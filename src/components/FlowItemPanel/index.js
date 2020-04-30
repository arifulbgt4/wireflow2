import React from 'react';
import { ItemPanel } from 'gg-editor';
import Card from 'antd/es/card';
import 'antd/es/card/style/css';

import NodeItem from './NodeItem';
import nodes from './nodesData';

import './style.scss';

const FlowItemPanel = () => {
  return (
    <ItemPanel>
      <Card
        className='node-item-card'
        bodyStyle={{ padding: 0 }}
        style={{ height: '100vh' }}
      >
        {nodes && nodes.map((item, i) => <NodeItem key={i} {...item} />)}
      </Card>
    </ItemPanel>
  );
};

export default FlowItemPanel;