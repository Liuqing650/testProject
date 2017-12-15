import React from 'react';
import {
  Editor, EditorState,
  getDefaultKeyBinding, KeyBindingUtil, RichUtils
 } from 'draft-js';

// 引入工具包
import Tools from './tools';
import styles from './editor.less';

const title = '其他工具';
const { hasCommandModifier } = KeyBindingUtil;
class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
    tool: ['B', 'I', 'U', 'Code']
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

  // 文本样式修改
  _onBoldClick = () => { this._toggleInlineStyle('BOLD'); }; // 加粗
  _onItalicClick = () => { this._toggleInlineStyle('ITALIC'); }; // 倾斜
  _onUnderLineClick = () => { this._toggleInlineStyle('UNDERLINE'); }; // 下划线
  _onCodeClick = () => { this._toggleInlineStyle('CODE'); }; // 代码块

  _toggleInlineStyle = (inlineStyle) => {
    this._onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }
  _onChange = (editorState) => {
    this.setState({ editorState })
  }
  myKeyBindingFn = (e) => {
    if (e.keyCode === 83 && hasCommandModifier(e)) {
      return 'myeditor-save';
    }
    return getDefaultKeyBinding(e);
  }
  handleKeyCommand = (command, editorState) => {
    if (command === 'myeditor-save') {
      console.log('保存数据', editorState);
      return "handled";
    }
    console.log('not-handled');
    return "not-handled";
  }

  // 判断工具栏谁被调用
  judgeToolIsClicked = (tool) => {
    let hasTool =  this.state.tool;
    switch (tool) {
      case hasTool[0]:
        this._onBoldClick();
        break;
      case hasTool[1]:
        this._onItalicClick();
        break;
      case hasTool[2]:
        this._onUnderLineClick();
        break;
      case hasTool[3]:
        this._onCodeClick();
        break;
      default: return false;
        break;
    }
  }
  render() {
    const self = this;
    const toolProps = {
      style: this.props.toolStyle ? this.props.toolStyle : null,
      tools: this.state.tool,
      onToolCilck(even) {
        self.judgeToolIsClicked(even.target.value);
      }
    }
    return (
      <div className={styles.wrap}>
        <button onClick={() => {this._toggleInlineStyle('BOLD')}}>B</button>
        <Tools { ...toolProps } />
        <Editor
          editorState={this.state.editorState}
          onChange={this._onChange}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={this.myKeyBindingFn}
         />
      </div>
    )
  }
}

export default MyEditor;
