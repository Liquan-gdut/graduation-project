import {icity} from './adapter'

export const getNews = () => icity.get('article/list/data')

export default [{
  banner: './static/news/发改委-home.jpg',
  cover: './static/news/发改委.jpg',
  title: '国家发改委城市和小城镇改革发展中心与京东集团达成战略合作，助力新型智慧城市建设',
  author: '智慧城市发展联盟',
  time: '2018-07-03',
  subtitle: '7月3日，京东集团与国家发改委城市和小城镇改革发展中心，开展主题党日活动，并签署战略合作协议',
  link: 'https://mp.weixin.qq.com/s/nJY0ZI3XTosJ4eTOnazHZg'
},
{
  title: '高端访谈：搭建城市计算生态，终结信息孤岛和重复建设',
  banner: './static/news/泰伯访谈-home.jpg',
  cover: './static/news/泰伯访谈.jpg',
  author: '泰伯网',
  time: '2018-06-28',
  subtitle: '京东金融城市计算事业部目前提供了在底层云架构之上的“城市计算平台”，该平台的核心功能在于提供了大数据时空化分类和检索的标准，以及基于时空大数据进行城市计算的算法模块和生态应用接口。这意味着',
  link: 'http://www.3snews.net/interview/250000027.html'
}, {
  cover: './static/news/wgdc.jpg',
  banner: './static/news/wgdc-home.jpg',
  title: '京东首席科学家、“城市计算”提出者郑宇：用大数据和AI打造新型智慧城市，与空间信息企业合作共赢',
  subtitle: '通过对数据不断的搜集、管理、分析和挖掘，再利用挖掘出来的知识解决社会痛点。',
  author: '泰伯网',
  time: '2018-06-20',
  link: 'http://www.3snews.net/wgdc2018/356000052115.html',
  desc: '6月14日，在WGDC2018大会上，京东金融集团副总裁、首席数据科学家郑宇就“大数据和AI打造智慧城市”的话题进行了专题演讲'
}, {
  cover: './static/news/信用论坛.jpg',
  banner: './static/news/信用论坛-home.jpg',
  title: '福州打造“三坊七巷”信用街区',
  subtitle: '京东金融研发的智能城市信用平台助力信用体系建设',
  author: '新京报',
  time: '2018-06-11',
  link: 'http://www.bjnews.com.cn/feature/2018/06/11/490520.html',
  desc: '昨日，2018中国城市信用建设高峰论坛在福州举办，来自全国的1000多位城市管理者、行业资深人士及专家学者共同探讨城市信用建设和市民信用生活等热点话题。'
}, {
  cover: './static/news/数博会.jpg',
  banner: './static/news/数博会.jpg',
  title: '数博会上”最”数字：京东金融AI指导火力发电 一年为国家节约一百亿',
  subtitle: '城市计算是什么？未来，人工智能和大数据将如何改变我们的生活？在5月27日举行的中国国际大数据产业博览会（数博会）上，京东金融副总裁、首席数据科学家、城市计算事业部总经理郑宇详解了京东金融的智慧城市理念和愿景, 他认为，城市计算是大数据、人工智能和云计算在城市里的有机结合，而除了技术本身，点、线、面结合的顶层设计加上跨领域的城市应用尤为重要',
  author: 'itechsir',
  time: '2018-05-27',
  link: 'http://www.techsir.com/a/201805/47051.html',
  desc: '城市计算是什么？未来，人工智能和大数据将如何改变我们的生活？在5月27日举行的中国国际大数据产业博览会（数博会）上，京东金融副总裁、首席数据科学家、城市计算事业部总经理郑宇详解了京东金融的智慧城市理念和愿景, 他认为，城市计算是大数据、人工智能和云计算在城市里的有机结合，而除了技术本身，点、线、面结合的顶层设计加上跨领域的城市应用尤为重要'
}, {
  cover: './static/news/ijcai.jpg',
  banner: './static/news/ijcai.jpg',
  title: '京东金融城市计算论文入选IJCAI 2018，郑宇解读地理传感器时间序列预测问题',
  subtitle: '近日，京东金融城市计算业务部的一篇论文《GeoMAN:Multi-level Attention Networks for Geo-sensory Time Series Prediction（基于多层注意力机制神经网络的地理传感器时间序列预测）》被人工智能领域国际顶级学术会议 IJCAI 2018 录用',
  author: '机器之心',
  time: '2018-05-25',
  desc: '近日，京东金融城市计算业务部的一篇论文《GeoMAN:Multi-level Attention Networks for Geo-sensory Time Series Prediction（基于多层注意力机制神经网络的地理传感器时间序列预测）》被人工智能领域国际顶级学术会议 IJCAI 2018 录用',
  link: 'https://www.jiqizhixin.com/articles/Jingdong-IJCAI-2018-Yu-Zheng'
}, {
  cover: './static/news/智能大会.jpg',
  banner: './static/news/智能大会.jpg',
  title: '助力智慧城市建设，京东金融副总裁郑宇详解城市计算 | 世界智能大会',
  subtitle: '导语：利用大数据和人工智能打造未来城市，与政府、学界、产业界联合培养人才，推动中国的大数据和人工智能与智慧城市的可持续发展',
  author: '雷锋网',
  time: '2018-05-20',
  link: 'https://www.leiphone.com/news/201805/j6xDCotvIfx3QmWh.html',
  desc: '在今年早些时候的雷锋网专访中，郑宇曾表示，京东金融希望能够成为智慧城市技术、平台和解决方案的领先输出者，利用大数据和人工智能技术，解决城市里的交通、规划、环境、能耗、商业和公共安全等问题。在此次“大数据与智慧社会论坛”上，郑宇为与会者带来了数个城市计算应用案例。'
}]
