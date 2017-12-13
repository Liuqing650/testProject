import React from 'react';

const toolStyle = (style) => {
  const tool = {
    width: style && style.width ? style.width : '100%',
    height: style && style.height ? style.height : '80px',
    background: style && style.background ? style.background : null
  }
  return tool;
}
export default toolStyle;
