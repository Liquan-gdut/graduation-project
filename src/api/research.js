import {icity} from './adapter'

export const getResearchs = () => icity.get('research/list/data')

export const tabs = [{
  title: '平台开发',
  subtitle: '致力于研发决策支持'
},
{
  title: '科研论文',
  subtitle: '有价值的生产实践和科研课题'
}]

export const project = [
  {
    cover: './static/project-item-1.jpg',
    title: '城市时空大数据平台',
    desc: `
    <br/>时空大数据
    <br/>在城市计算里面处理的数据是时空数据，它不是一般的图像文本语音数据，它所用到的数据管理办法和目前人工智能方法在其他问题的用法都不太一样，不是说随便拿一个深度学习算法（CNN或LSTM）就能解决的。它有自己特殊的时空属性，包括时间的趋势、周期和邻近性，空间距离和空间层次性。这些特殊的时空特性用普通算法是抓不住的。
    <br/><br/>多源数据融合
    <br/>多源数据融合本身就是一个难点，在机器学习当中也是一个相对比较新兴的学科和研究方向。在真正的城市计算里面，会用到多个数据源，而不是单一数据源。比如刚刚我们说到的娱乐城案例，需要用到兴趣点（POI, Point of Interests）、路网数据点，加上环境消费等等很多种数据，融合这么多数据才能判断这个地方未来的变化。来自于不同领域的数据如何做到1+1大于2的知识发现，这个其实是一件很困难的事情。
    `
    // <br/><br/><b>开放的生态系统，广泛的延展功能</b>
    // <br/>城市大数据平台是一个具备完整生态的平台，依托该平台能够实现贯穿城市规划、运维、预测的所有方案。城市大数据平台将特殊的针对时空数据的人工智能算法以及多源数据融合算法标准化、模块化，并在这些模型上搭建了大量垂直应用，可以解决当下和未来城市发展遇到的问题，具备极强的延展性。
  }
]

export const software = [
  {
    cover: './static/project-item-1.jpg',
    title: 'title software',
    desc: 'desc'
  }
]

export const paperTypes = ['期刊', '会议', '书籍']
export const papers = [
  // {
  //   name: 'Dynamic Bike Reposition: A Spatio-Temporal Reinforcement Learning Approach ',
  //   author: 'Yexin Li, Yu Zheng, Qiang Yang. ',
  //   time: '2018',
  //   press: 'in Proceedings of the 24th SIGKDD conference on Knowledge Discovery and Data Mining (KDD 2018) ',
  //   link: '',
  //   type: 1,
  //   cover: './static/research/paper-1.jpg'
  // },
  {
    name: 'Deep Distributed Fusion Network for Air Quality Prediction',
    author: 'Xiuwen Yi, Junbo Zhang, Zhaoyuan Wang, Tianrui Li, Yu Zheng ',
    time: '2018',
    press: 'in Proceedings of the 24th SIGKDD conference on Knowledge Discovery and Data Mining (KDD 2018).',
    link: 'http://urban-computing.com/pdf/kdd2018AirPrediction-camera.pdf',
    type: 1,
    cover: './static/research/paper-2.jpg'
  }, {
    name: 'Detecting Vehicle Illegal Parking Events using Sharing Bikes’ Trajectories.',
    author: 'Tianfu He, Jie Bao, Ruiyuan Li, Sijie Ruan, Yanhua Li, Chao Tian, Yu Zheng. ',
    time: '2018',
    press: 'in Proceedings of the 24th SIGKDD conference on Knowledge Discovery and Data Mining (KDD 2018).',
    link: 'http://urban-computing.com/pdf/kdd2018illegalparking.pdf',
    type: 1,
    cover: './static/research/paper-3.jpg'
  },
  {
    name: 'GeoMAN: Multi-level Attention Networks for Geo-sensory Time Series Prediction.',
    author: 'Yuxuan Liang, Songyu Ke, Junbo Zhang, Xiuwen Yi, Yu Zheng. G',
    time: '2018.06.10',
    press: 'In Proceedings of the 27th International Joint Conference on Artificial Intelligence (IJCAI 2018)',
    link: 'http://urban-computing.com/pdf/liang2018geoman.pdf',
    type: 1,
    cover: './static/research/paper-4.jpg'
  },
  {
    name: 'Predicting Citywide Crowd Flows Using Deep Spatio-Temporal Residual Networks. ',
    author: 'Junbo Zhang, Yu Zheng, Dekang Qi, Ruiyuan Li, Xiuwen Yi, Tianrui Li.',
    time: '2018',
    press: 'AI Journal.',
    link: 'http://urban-computing.com/pdf/Predicting%20citywide%20crowd%20flow-AI%20journal-zheng.pdf',
    type: 0,
    cover: './static/research/paper-5.jpg'
  },
  {
    name: 'Detecting Urban Anomalies using Multiple Spatio-Temporal Data Sources',
    author: 'Huichu Zhang, Yu Zheng, Yong Yu.',
    time: '2018',
    press: 'In Proceedings of the 20th ACM International Conference on Ubiquitous Computing (UbiComp 2018)',
    link: 'http://urban-computing.com/pdf/detecting-urban-anomalies-Ubicomp2018-Zheng.pdf',
    cover: './static/research/paper-6.jpg',
    type: 1
  }
]
