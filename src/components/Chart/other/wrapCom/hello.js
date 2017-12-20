import React from 'react';
import wrap from './wrap';
const Hello = ({
  test
}) => {
  return (
    <div>
      <div>
        一个普通的hello{test}
      </div>
    </div>
  );
}
export default wrap(Hello);
