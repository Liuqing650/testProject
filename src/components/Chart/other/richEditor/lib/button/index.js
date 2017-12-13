import React, { PropTypes } from 'react';
import styles from './index.less';
const Button = ({
  type,
  disabled,
  onClick,
  children,
  title
}) => {
  console.log('type--->', type);
  const outPut = () => {
    switch (type) {
      case 'primary':
        return styles.primaryBtn;
        break;
      case 'dashed':
        return styles.dashedBtn;
        break;
      case 'danger':
        return styles.dangerBtn;
        break;
      default: return styles.defaultBtn;
        break;
    }
  }

  const onHandleClick = (even) => {
    if (disabled) {
      return false;
    }
    onClick(even);
  }
  return (
    <button
      onClick={onHandleClick}
      title={title}
      value={children}
      className={`${styles.btn} ${outPut()}`}>
      {children}
    </button>
  )
}
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'default',
  disabled: false,
};

export default Button;
