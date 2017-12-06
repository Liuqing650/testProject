import React from 'react';
import { connect } from 'dva';
import Chart from '../components/Chart'
import {Button} from 'antd';
import styles from './IndexPage.css';

function IndexPage() {

  const charts = ['dom', 'line', 'domain1', 'xaxis'];

  return (
    <div className={styles.normal}>
      <Chart charts={charts}/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
