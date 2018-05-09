import Mock from 'mockjs';
// const list = Mock.mock({
//   'list|1-10': [{
//     'id|+1': 1
//   }]
// });
// const data = Mock.mock({
//   'data|20-30': [
//     {
//       'id|+1': 1,
//       'name': '@cname',
//       'email': `@email('qq.com')`,
//       'address': '@city',
//       'avator': `@image('80x80', '#ffcc33', '#FFF', 'png', '@first')`
//     }
//   ]
// });

export const createMock = (cofig) => {
  const _cofig = {
    c_trees: cofig && cofig.cTrees || 'c_trees|13',
    p_trees: cofig && cofig.pTrees || 'p_trees|4',
    cNum: cofig && cofig.cNum || 13,
    pNum: cofig && cofig.pNum || 4,
  };
  const data = Mock.mock({
    'amount': '',
    'eid': '@guid',
    'has_problem': '0',
    'identifier': '1',
    'level': '0',
    'name': '@ctitle(5, 10)有限公司',
    'p_count': _cofig.pNum,
    'c_count': _cofig.cNum,
    'percent': '@float(0, 1, 4, 4)',
    'sh_type': '',
    'short_name': '@ctitle(5, 10)',
    'type': 'E',
    [_cofig.c_trees]: [
      {
        'amount': '',
        'eid': '@guid',
        'has_problem': '0',
        'identifier': '@integer(0, 1000)',
        'items|100': [
          {
            'amount': '',
            'eid': '@guid',
            'has_problem': '0',
            'identifier': '@integer(0, 1000)',
            'items': [],
            'level': '1',
            'name': '@ctitle(5, 10)有限公司',
            'percent': '@float(0, 0, 4, 4)',
            'sh_type': '@cname',
            'short_name': '@ctitle(5, 10)',
            'type': 'E'
          }
        ],
        'level': '1',
        'name': '@ctitle(5, 10)有限公司',
        'percent': '@float(0, 0, 4, 4)',
        'sh_type': '@cname',
        'short_name': '@ctitle(5, 10)',
        'type': 'E'
      }
    ],
    'companyName': '@ctitle(5, 10)有限公司',
    [_cofig.p_trees]: [
      {
        'amount': '@float(0, 10000, 4, 4)',
        'eid': '@guid',
        'has_problem': '0',
        'identifier': '@integer(0, 1000)',
        'items': [],
        'level': '1',
        'name': '@ctitle(5, 10)有限公司',
        'percent': '@float(0, 1, 4, 4)',
        'sh_type': '@cname',
        'short_name': '@ctitle(5, 10)',
        'type': 'E'
      }
    ]
  });
  return data;
};
