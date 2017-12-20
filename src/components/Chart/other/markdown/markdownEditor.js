import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Input } from 'antd';
const { TextArea } = Input;
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '# This is a header\n\nAnd this is a paragraph' }
  }

  handleChange = (value) => {
    this.setState({ text: value })
  };

  render() {
    return (
      <div>
        <ReactMarkdown source={this.state.text} />
        <TextArea value={this.state.text} rows={4} onChange={(event) => this.handleChange(event.target.value)} />
      </div>
    );
  }
}
export default MarkdownEditor;
