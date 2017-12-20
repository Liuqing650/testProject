import React from 'react';
import RichEditor from './richEditor';
import QuillEditor from './quillEditor';
import MarkdownEditor from './markdown';
import NomalComponent from './wrapCom';
const title = '其他工具';
const OtherComponent = ({
  activeMenu,
  menus
}) => {
  const renderCom = () => {
    let outPut;
    menus.map((menu) => {
      if (menu.title === title) {
        menu.children.map((item, index) => {
          if (item.id === activeMenu.eventKey) {
            switch (index) {
              case 0: outPut= <RichEditor />;
                break;
              case 1: outPut= <QuillEditor />;
                break;
              case 2: outPut = <MarkdownEditor />;
                break;
              case 3: outPut = <NomalComponent />;
                break;
              default: outPut= <RichEditor />;
            }
          }
        })
      }
    })
    return outPut;
  }
  return (
    <div>
      {renderCom()}
    </div>
  );
}
export default OtherComponent;
