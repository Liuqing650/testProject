import React from 'react';
const wrap = WrappedComponent => {
  return class wrapComponent extends React.Component {
    render() {
      const WrappedComponentProps = {
        test: '123'
      }
      return (
        <div>
          <div>包裹：</div>
          <WrappedComponent {...WrappedComponentProps} />
        </div>
      );
    }
  }
}
export default wrap;
