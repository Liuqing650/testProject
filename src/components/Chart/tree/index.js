import React from 'react';
import Tree1 from './tree1';
// import Tree2 from './tree2';

const Tree = () => {
  const arr = [
    <Tree1 key="111" />,
    // <Tree2 key="222" />
  ];
  return (
    <div>
      {arr}
    </div>
  );
};
export default Tree;
