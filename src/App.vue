<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <h1 class="logo">常用工具集</h1>
        <nav class="nav">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/timestamp-converter" class="nav-link">时间戳转换</router-link>
        </nav>
      </div>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 常用工具集</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  margin: 0;
  font-size: 1.5rem;
  display: inline-block;
}

.nav {
  float: right;
  margin-top: 0.25rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.main {
  min-height: calc(100vh - 120px);
  padding: 2rem 0;
}

.footer {
  background-color: #f5f5f5;
  padding: 1.5rem 0;
  text-align: center;
  color: #666;
}
</style>
