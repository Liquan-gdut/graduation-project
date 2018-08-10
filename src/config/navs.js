const getNav = (title, url = '') => ({title, url})

export default [
  getNav('首页', './'),
  {
    ...getNav('新闻资讯', './News'),
    // title: '最新资讯',
    // url: '/News',
    // child: [
    //   getNav('first', './first'),
    //   getNav('second', './second'),
    //   getNav('third', './third')
    // ]
  },
  getNav('解决方案'),
  getNav('产品技术'),
  getNav('关于我们')
]
