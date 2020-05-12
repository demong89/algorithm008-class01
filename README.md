# 极客大学「算法训练营-第8期」作业提交仓库


## 讲师课件下载地址

请大家通过该链接查看讲师课件并进行下载，链接:https://pan.baidu.com/s/1DM7UAhSYs3Im_t2ayiAAXQ  密码:9fct


## 仓库目录结构说明

1. `week01/` 代表第一周作业提交目录，以此类推。
2. 请在对应周的目录下新建或修改自己的代码作业。
2. 每周均有一个 `NOTE.md` 文档，你可以将自己当周的学习心得以及做题过程中的思考记录在该文档中。

## 作业提交规则
 
1. 先将本仓库 Fork 到自己 GitHub 账号下。
2. 将 Fork 后的仓库 Clone 到本地，然后在本地仓库中对应周的目录下新建或修改自己的代码作业，当周的学习总结写在对应周的NOTE.md文件里。
3. 在本地仓库完成作业后，push 到自己的 GitHub 远程仓库。
4. 最后将远程仓库中当周的作业链接，按格式贴到班级仓库对应学习周的issue下面。
5. 提交issue请务必按照规定格式进行提交，否则作业统计工具将抓取不到你的作业提交记录。 


## 注意事项
 如果对 Git 和 GitHub 不太了解，请参考 [Git 官方文档](https://git-scm.com/book/zh/v2) 或者极客时间的[《玩转 Git 三剑客》](https://time.geekbang.org/course/intro/145)视频课程。


#学号:G20200447010155
#姓名:郭兴旺
#班级:1班
#小组:刷题狂魔组 + JS组
#作业&总结链接:https://github.com/demong89/algorithm008-class01/tree/master/Week_03







## angular 提交规范
message格式
```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```
分别对应 Commit message 的三个部分：Header，Body 和 Footer。

#### Header

Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。
type: 用于说明 commit 的类型。一般有以下几种:
```
    feat: 新增feature
    fix: 修复bug
    docs: 仅仅修改了文档，如readme.md
    style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。
    refactor: 代码重构，没有新增功能或修复bug
    perf: 优化相关，如提升性能、用户体验等。
    test: 测试用例，包括单元测试、集成测试。
    chore: 改变构建流程、或者增加依赖库、工具等。
    revert: 版本回滚
```
scope: 用于说明 commit 影响的范围，比如: views, component, utils, test...
subject: commit 目的的简短描述
#### Body
#### Footer