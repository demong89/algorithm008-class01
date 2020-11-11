

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
    build:构建系统或者包依赖更新（eg: gulp、npm、broccoli）
    ci: CL配置，脚本文件等更新（eg：Travis持续集成服务）
    improvement: 对现有功能的改进
```



scope: 用于说明 commit 影响的范围，比如: views, component, utils, test...
subject: commit 目的的简短描述
#### Body
对本次 commit 修改内容的具体描述, 可以分为多行。如下图:
```
# body: 72-character wrapped. This should answer:
# * Why was this change necessary?
# * How does it address the problem?
# * Are there any side effects?
# initial commit
```
#### Footer


commitlint

commitlint是一个提交验证工具。原理是可以在实际的 git commit 提交到远程仓库之前使用 git 钩子来验证信息。提交不符合规则的信息将会被阻止提交到远程仓库。
https://commitlint.js.org/#/guides-local-setup 
首先安装 commitlint 以及 conventional 规范:
npm install --save-dev @commitlint/cli @commitlint/config-conventional
接着在 package.json 中配置 commitlint 脚本:
"commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
当然如果你想单独对 commitlint 进行配置的话，需要建立校验文件 commitlint.config.js，不然会校验失败
为了可以在每次 commit 时执行 commitlint 来 检查我们输入的 message，我们还需要用到一个工具 —— husky。
husky 是一个增强的 git hook 工具。可以在 git hook 的各个阶段执行我们在 package.json 中配置好的 npm script。
首先安装 husky:
npm install --save-dev husky
接着在 package.json 中配置 commitmsg 脚本:
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
 },
到这里，commitlint就配置完成了～


# 安装
(安装就能用)
npm i -g gitmoji-cli
# 使用
git commit -m ':bug: 问题fix'


[gitmoji项目地址](https://github.com/carloscuesta/gitmoji/)
[gitmoji使用示例](https://gitmoji.carloscuesta.me/)    

[参考](https://mp.weixin.qq.com/s/8oWsj_ipp73crD_vg58LeQ)