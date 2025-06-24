# Cerebro3D Homepage - 官方展示首页

## 🎯 项目概述

Cerebro3D官方展示首页，专门用于展示Cerebro3D品牌形象和核心功能特性的静态网站。采用现代化技术栈构建，提供优雅的用户体验和专业的品牌展示。

## ✨ 主要特性

- 🎨 **动态RGB背景** - 自然流畅的彩色渐变动画效果
- 💎 **玻璃态UI** - 半透明毛玻璃效果的现代化界面  
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🚀 **高性能** - 轻量级构建，快速加载
- 🔗 **一键跳转** - 直接导航到产品页面和Github仓库
- ⚡ **零依赖业务逻辑** - 纯展示页面，无复杂功能

## 🎨 设计亮点

- **英雄区域**: 全屏RGB渐变背景，品牌标题居中展示
- **功能展示**: 8个核心功能特性卡片，网格布局
- **导航栏**: 固定顶部，包含品牌logo和外部链接
- **页脚**: 版权信息和备案号链接

## 🚀 快速开始

### 环境要求
- Node.js 16.0 或更高版本
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 🏗️ 技术架构

### 核心技术栈
- **React 18** - 现代化UI框架
- **TypeScript** - 类型安全的开发体验  
- **SCSS** - 强大的样式预处理器
- **Vite** - 快速的构建工具

### 开发工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **TypeScript** - 静态类型检查

## 📁 项目结构

```
src/
├── App.tsx          # 主应用组件
├── App.scss         # 主样式文件
└── main.tsx         # 应用入口

public/
└── images/
    └── logo.png     # 品牌Logo

配置文件/
├── vite.config.ts   # Vite配置
├── tsconfig.json    # TypeScript配置
└── package.json     # 项目依赖
```

## 🎨 样式特色

### RGB动画背景
- 20秒循环的自然渐变效果
- Material Design缓动函数
- 多色彩柔和过渡

### 响应式布局
- 桌面端：网格布局展示功能卡片
- 移动端：单列布局，优化触摸体验
- 断点：768px、480px

## 🔗 相关链接

- **🌐 产品地址**: [https://cerebro3d.cerror.cn](https://cerebro3d.cerror.cn)
- **📚 Github仓库**: [https://github.com/Cerrorr/Cerebro3D](https://github.com/Cerrorr/Cerebro3D)
- **🏛️ 备案查询**: [https://beian.miit.gov.cn/](https://beian.miit.gov.cn/)

## 📋 开发规范

- 📝 所有方法必须包含中文注释
- 📄 文件头部注释必须设置作者为'Cerror'
- 🎯 遵循TypeScript最佳实践
- 🎨 遵循SCSS模块化组织

## 🚀 部署说明

### 静态托管平台
项目构建后生成的`dist`目录可以部署到：
- Vercel
- Netlify  
- GitHub Pages
- 阿里云OSS
- 腾讯云COS

### 部署步骤
1. 执行 `npm run build` 构建项目
2. 将 `dist` 目录上传到托管平台
3. 配置自定义域名（可选）
4. 配置HTTPS证书（推荐）

## 📄 许可证

本项目采用MIT许可证 - 查看[LICENSE](LICENSE)文件了解详情

## 📞 联系方式

- 作者: Cerror
- Github: https://github.com/Cerrorr/Cerebro3D
- 官网: https://cerebro3d.cerror.cn

---

Copyright © 2025 Cerror | 专业3D引擎展示首页 