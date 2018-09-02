export const domains = process.env.domain

export const PAGE_SIZE = 5

export const mapConf = {
  scale: 700,
  center: [103.57547188569058, 36.51393993057369],
  width: 700,
  height: 600
}

export const PLATFORM_FEATURES_TYPE_MAP = {
  feature: 'FEATURE',
  advantage: 'ADVANTAGE'
}

export const PARTNER_TYPE_MAP = {
  GOVERNMENT: '政府合作',
  SCHOOL: '产学研合作',
  COMPANY: '企业用户'
}

export const TimeLists = [
  {time: '2018年2月12日', content: '京东城市成立'},
  {time: '3月1日', content: '京东城市设立5大二级部门：商务拓展部，智能解决方案部，AI平台部，数据管理平台部，基础研发部'},
  {time: '3月7日', content: '京东城市和上海交通大学达成研究生定向培养合作机制'},
  {time: '4月17日', content: '京东城市第一篇论文被国际顶级学术会议IJCAI-18录用'},
  {time: '5月9日', content: '京东城市承接第一个城市级项目：宿迁智能城市建设项目'},
  {time: '6月4日', content: '京东城市第一个合作协议签署-与国电集团签约'},
  {time: '6月22日', content: '京东城市正式签约南京，成立第一个分公司-京东城市（南京）科技有限公司'},
  {time: '7月7日-7月18日', content: '京东集团战略会确认了一拖三战略，树立了智能城市研究院为集团三大研究院之一'},
  {time: '7月13日', content: '京东城市第一个联合实验室成立-“京东城市大数据广西实验室“'},
  {time: '7月13日-7月19日', content: '京东城市首次亮相人工智能领域国际顶级学术会议IJCAI2018'},
  {time: '7月18日', content: '北京京东智能城市大数据研究院成立'},
  {time: '7月31日', content: '京东城市挂牌中国雄安集团，共同开展建设雄安项目'},
  {time: '8月13日', content: '京东城市成立第6大二级部门-产品运营部'}
]
export const SHORT_VIDEO = 'https://uc-icity.oss.cn-north-1.jcloudcs.com/46c9bff42d734c84b1d4dbd07e6f58ef.mp4'

export const LONG_VIDEO = 'https://uc-icity.oss.cn-north-1.jcloudcs.com/e99cffcbefde44aeb48ff773e8d3eea8.mp4'

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}
