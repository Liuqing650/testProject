import React from 'react';
import { connect } from 'dva';
import { Line } from '../components/Chart'
import styles from './IndexPage.css';

function IndexPage() {

  function createData(index,num) {
    let data = [];
    for(let i=0;i<index;i++) {
      const obj={};
      obj.x = parseInt(Math.random()*num);
      obj.y = parseInt(Math.random()*num);
      data.push(obj);
    }
    return data;
  }

  const LineProps = {
    data:createData(10,100),
    width: 500,
  }

  return (
    <div className={styles.normal}>
      <Line {...LineProps} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
