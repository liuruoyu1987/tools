<template>
  <div class="home">
    <div class="container">
      <div class="welcome-section">
        <h2>欢迎使用常用工具集</h2>
        <p>选择一个工具开始使用</p>
      </div>
      
      <div class="tools-grid">
        <router-link 
          v-for="tool in tools" 
          :key="tool.id" 
          :to="tool.path" 
          class="tool-card"
        >
          <div class="tool-icon">{{ tool.icon }}</div>
          <h3 class="tool-title">{{ tool.title }}</h3>
          <p class="tool-description">{{ tool.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tools: [
        {
          id: 1,
          title: '时间戳转换',
          description: 'Unix时间戳与日期时间相互转换',
          icon: '⏰',
          path: '/timestamp-converter'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem 0;
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.welcome-section p {
  color: #666;
  font-size: 1.1rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.tool-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  color: inherit;
  display: block;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.tool-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tool-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.tool-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
