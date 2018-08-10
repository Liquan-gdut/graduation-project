# 京东城市管网

## todo
- [ ] categoryId 新闻类型主键 icity.get('/article/list/data')
  - [x] 不需要 categoryId 是什么
  - [x] 暂时没有 缺少浏览量、访问量
  - 新闻需要几张图片

## Build Setup

``` bash
git clone http://git.jd.com/web-uc/icity.git
cd icity

# install dependencies
npm install

# serve with hot reload at localhost:80
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## git流程
### 分支介绍
- master 生产分支
- integration 测试分支
- dev 开发分支
- <feature> dev 上切出来的各个功能分支

### 开发流程
- `git checkout dev`
- `git checkout -b <feature>` 从dev 上切 feature 分支出来开发某个功能
- `git checkout dev && git merge --no-ff <feature>` 开发完毕合并到dev分支
- `git push origin dev`
- 提交merge request， 从 dev 分支 merge 到integration 分支；
- 代码审查， 接受merge request； 提测
- 测试通过， 提交merge request， 从 integration 分支 merge 到 master 分支；
- 接受merge request， 验证预发布环境是否正常
- 手动触发上线流程
