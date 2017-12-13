import React from 'react';
import styles from './index.less';
import editorStyles from '../editorStyles/tool';
import Button from '../lib/button';
const Tools = ({
  style,
  tools,
  onToolCilck,
}) => {
  const toolStyle = editorStyles(style);
  const createToolBtn = () => {
    let outPut = [];
    tools.forEach((item,index)=>{
      outPut.push(<Button key={index} onClick={onToolCilck} type="primary" title={item}>{item}</Button>)
    })
    return outPut;
  }
  return (
    <div className={styles.wrap}>
      <div className={`clearfix ${styles.tool}`}>
        <div>
          {createToolBtn()}
        </div>
      </div>
    </div>
  )
}
export default Tools;
