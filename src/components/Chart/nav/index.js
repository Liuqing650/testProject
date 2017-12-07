const menus = [
  {title: '基本图形', children:[
    { title: 'dom'},
    { title: 'line'},
    { title: 'domain1'},
    { title: 'xaxis' },
    { title: 'enter&update' },
  ]},
  {title: '动态图形', children:[
    {title: '过渡效果'}
  ]}
]

function changeNav(arr, laryer) {
  arr.map((item,index)=>{
    let temp = index + 1;
    if(!laryer) {
      item.id = temp.toString();
    } else {
      item.id = laryer + '-' + temp.toString();
    }
    if (item.children && item.children.length>0) {
      item.children = changeNav(item.children, item.id);
      item.parent = item.title;
    }
  })
  return arr;
}
const nav = changeNav(menus);
export default nav;
