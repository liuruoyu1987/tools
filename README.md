# 常用工具集

一个基于 Vue 3 的可扩展工具集网页应用，包含各种常用工具。

## 项目结构

```
tools/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.js
    ├── App.vue
    ├── assets/
    │   └── styles.css
    ├── router/
    │   └── index.js
    └── views/
        ├── Home.vue
        └── TimestampConverter.vue
```

## 安装依赖

```bash
npm install
```

## 运行开发服务器

```bash
npm run dev
```

## 构建生产版本

```bash
npm run build
```

## 如何添加新工具

### 1. 创建新的视图组件

在 `src/views/` 目录下创建新的 Vue 组件，例如 `MyTool.vue`：

```vue
<template>
  <div class="my-tool">
    <div class="container">
      <div class="page-header">
        <router-link to="/" class="back-link">← 返回首页</router-link>
        <h2>我的工具</h2>
        <p class="subtitle">工具描述</p>
      </div>
      
      <div class="tool-content">
        <!-- 工具内容 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTool',
  data() {
    return {
      // 数据
    }
  },
  methods: {
    // 方法
  }
}
</script>

<style scoped>
/* 样式 */
</style>
```

### 2. 添加路由配置

在 `src/router/index.js` 中导入新组件并添加路由：

```javascript
import MyTool from '../views/MyTool.vue'

const routes = [
  // ... 现有路由
  {
    path: '/my-tool',
    name: 'MyTool',
    component: MyTool
  }
]
```

### 3. 在首页添加工具卡片

在 `src/views/Home.vue` 的 `tools` 数组中添加新工具：

```javascript
tools: [
  // ... 现有工具
  {
    id: 2,
    title: '我的工具',
    description: '工具描述',
    icon: '🔧',
    path: '/my-tool'
  }
]
```

### 4. 在导航栏添加链接

在 `src/App.vue` 的导航栏中添加新工具链接：

```vue
<nav class="nav">
  <router-link to="/" class="nav-link">首页</router-link>
  <router-link to="/timestamp-converter" class="nav-link">时间戳转换</router-link>
  <router-link to="/my-tool" class="nav-link">我的工具</router-link>
</nav>
```

## 当前工具

- 时间戳转换：Unix 时间戳与日期时间相互转换

## 技术栈

- Vue 3
- Vue Router 4
- Vite
