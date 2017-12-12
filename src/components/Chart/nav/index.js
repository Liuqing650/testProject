const menus = [
  {title: '基本图形', children:[
    { title: 'dom'},
    { title: 'line'},
    { title: 'domain1'},
    { title: 'xaxis' },
    { title: 'enter&update' },
  ]},
  {title: '动态图形', children:[
    { title: '过渡效果' },
    { title: '条形统计图' },
    { title: '径向树' },
    { title: '力导图' }
  ]},
  {
    title: '书籍相关', children: [
      { title: '测试效果' },
      { title: '条形图' },
      { title: '散点图' }
    ]
  },
  {
    title: '其他工具', children: [
      { title: '编辑器' }
    ]
  }
]

let defaultOpenKeys = [];

function changeNav(arr, laryer) {
  arr.map((item,index)=>{
    let temp = index + 1;
    if(!laryer) {
      item.id = temp.toString();
    } else {
      item.id = laryer + '-' + temp.toString();
      defaultOpenKeys.push(item.id);
    }
    if (item.children && item.children.length>0) {
      item.children = changeNav(item.children, item.id);
      item.parent = item.title;
    }
  })
  return arr;
}

const nav = {
  menus: changeNav(menus),
  defaultOpenKeys: defaultOpenKeys
};
export default nav;
