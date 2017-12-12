import React from 'react';
import { Editor, EditorState } from 'draft-js';
import { Row, Col, Button } from 'antd';
import styles from './index.less';
const ButtonGroup = Button.Group;
const title = '其他工具';
class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  componentDidMount() {
    // this.renderLine();
  }

  componentDidUpdate() {
    this.changeEditor(this.props.activeMenu);
  }

  changeEditor(activeMenu) {
    let isThisChart = false;
    let data = [];
    this.props.menus.map((menu) => {
      if (menu.title === title) {
        data = menu.children;
        data.map((item, index) => {
          if (item.id === activeMenu.eventKey) {
            isThisChart = true;
            // this.resetSvg();
            // switch (index) {
            //   case 0: this.renderTest();
            //     break;
            //   case 1: this.renderLine();
            //     this.resetSvg(true);
            //     break;
            //   case 2: this.renderScatter();
            //     break;
            //   default: this.renderWelcome();
            // }
          }
        })
      }
    })
    if (!isThisChart) {
      // this.resetSvg();
    }
  }

  onChange = (editorState) => {
    this.setState({ editorState })
  }


  render() {
    return (
      <div className={styles.wrap}>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    )
  }
}

export default MyEditor;
