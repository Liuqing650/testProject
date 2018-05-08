import React from 'react';
import Tree1 from './tree1';
import { mockApi } from '../../../mock';
// import Tree2 from './tree2';

const Tree = () => {
  const getMockData = (model) => {
    const config = {
      test: {
        cTrees: 'c_trees|13',
        pTrees: 'p_trees|4',
        cNum: 13,
        pNum: 14
      },
      long: {
        cTrees: 'c_trees|100-120',
        pTrees: 'p_trees|30-60'
      }
    };
    return mockApi.createMock(config[model]);
  }
  const arr = [
    <Tree1 key="111" treeData={getMockData('test')} />,
    // <Tree2 key="222" />
  ];
  return (
    <div>
      {arr}
    </div>
  );
};
export default Tree;
