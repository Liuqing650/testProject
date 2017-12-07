import React from 'react';
import { connect } from 'dva';
import Chart from '../components/Chart'
import {Button} from 'antd';
import styles from './IndexPage.css';

function IndexPage({dispatch, location, main}) {
  const chartProps = {
    ...main,
    changeValue(data) {
      dispatch({
        type:'main/changeValue',
        payload: data,
      })
    }
  }
  return (
    <div className={styles.normal}>
      <Chart {...chartProps} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ main }) => ({ main}))(IndexPage);
