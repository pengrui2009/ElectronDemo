# Electron Jar to Windows Exe

**基于Electron, 实现jar打包成Windows EXE程序.**

## 介绍

> [!NOTE]
> 需要将数据库文件database/csfw.db 拷贝到D:\database\ruoyi

Web框架：ruoyi
数据库：sqlite3

## 编译及命令：

```bash
npm install electron --save-dev

npm install electron-builder --save-dev

# 部署生成可执行程序EXE
npm run dist

```

## 运行效果

### 登录界面

![login.png](https://github.com/pengrui2009/ElectronDemo/blob/main/images/login.png)

### 用户管理界面

![login.png](https://github.com/pengrui2009/ElectronDemo/blob/main/images/user_mgr.png)

### 界面全屏

![login.png](https://github.com/pengrui2009/ElectronDemo/blob/main/images/fullscreen.png)

### 锁屏界面

![login.png](https://github.com/pengrui2009/ElectronDemo/blob/main/images/lock_screen.png)

### 文档查看界面

![login.png](https://github.com/pengrui2009/ElectronDemo/blob/main/images/document.png)


## 使用指南

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/minimal-repro
# Go into the repository
cd minimal-repro
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [Electron Fiddle](https://electronjs.org/fiddle) - Electron Fiddle, an app to test small Electron experiments
- [Electron Forge](https://www.electronforge.io/) - Looking to bootstrap a new Electron app? Check out the Electron Forge docs to get started

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
