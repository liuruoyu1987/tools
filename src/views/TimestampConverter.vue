<template>
  <div class="timestamp-converter">
    <div class="container">
      <div class="page-header">
        <router-link to="/" class="back-link">← 返回首页</router-link>
        <h2>时间戳转换工具</h2>
        <p class="subtitle">Unix时间戳与日期时间相互转换</p>
      </div>

      <div class="converter-container">
        <div class="converter-section">
          <h3>时间戳 → 日期时间</h3>
          <div class="input-group">
            <label>Unix 时间戳（秒）</label>
            <input 
              v-model="timestampInput" 
              type="number" 
              placeholder="例如: 1735689600"
              @input="convertTimestampToDate"
            >
          </div>
          <div class="input-group">
            <label>转换结果</label>
            <div class="result-display">
              {{ dateResult || '等待输入...' }}
            </div>
          </div>
          <div class="quick-actions">
            <button @click="setCurrentTimestamp" class="btn btn-secondary">使用当前时间戳</button>
          </div>
        </div>

        <div class="converter-section">
          <h3>日期时间 → 时间戳</h3>
          <div class="input-group">
            <label>选择日期和时间</label>
            <input 
              v-model="datetimeInput" 
              type="datetime-local" 
              @input="convertDateToTimestamp"
            >
          </div>
          <div class="input-group">
            <label>转换结果</label>
            <div class="result-display">
              {{ timestampResult || '等待选择...' }}
            </div>
          </div>
          <div class="quick-actions">
            <button @click="setCurrentDateTime" class="btn btn-secondary">使用当前时间</button>
          </div>
        </div>
      </div>

      <div class="info-section">
        <h3>当前时间信息</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">当前时间戳:</span>
            <span class="info-value">{{ currentTimestamp }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">当前日期时间:</span>
            <span class="info-value">{{ currentDateTime }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">UTC 时间:</span>
            <span class="info-value">{{ currentUTC }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimestampConverter',
  data() {
    return {
      timestampInput: '',
      datetimeInput: '',
      dateResult: '',
      timestampResult: '',
      currentTimestamp: '',
      currentDateTime: '',
      currentUTC: ''
    }
  },
  mounted() {
    this.updateCurrentTime()
    this.setCurrentTimestamp()
    this.intervalId = setInterval(this.updateCurrentTime, 1000)
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },
  methods: {
    convertTimestampToDate() {
      if (!this.timestampInput) {
        this.dateResult = ''
        return
      }
      try {
        const timestamp = parseInt(this.timestampInput)
        const date = new Date(timestamp * 1000)
        this.dateResult = this.formatDate(date)
      } catch (e) {
        this.dateResult = '无效的时间戳'
      }
    },
    convertDateToTimestamp() {
      if (!this.datetimeInput) {
        this.timestampResult = ''
        return
      }
      try {
        const date = new Date(this.datetimeInput)
        this.timestampResult = Math.floor(date.getTime() / 1000).toString()
      } catch (e) {
        this.timestampResult = '无效的日期'
      }
    },
    setCurrentTimestamp() {
      const now = new Date()
      this.timestampInput = Math.floor(now.getTime() / 1000).toString()
      this.convertTimestampToDate()
    },
    setCurrentDateTime() {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      this.datetimeInput = `${year}-${month}-${day}T${hours}:${minutes}`
      this.convertDateToTimestamp()
    },
    updateCurrentTime() {
      const now = new Date()
      this.currentTimestamp = Math.floor(now.getTime() / 1000).toString()
      this.currentDateTime = this.formatDate(now)
      this.currentUTC = now.toUTCString()
    },
    formatDate(date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
  }
}
</script>

<style scoped>
.timestamp-converter {
  padding: 2rem 0;
}

.page-header {
  margin-bottom: 2rem;
}

.back-link {
  display: inline-block;
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.back-link:hover {
  color: #764ba2;
}

.page-header h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
}

.converter-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.converter-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.converter-section h3 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f0f0f0;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  font-weight: 500;
  color: #555;
  margin-bottom: 0.5rem;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.input-group input:focus {
  outline: none;
  border-color: #667eea;
}

.result-display {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 0.75rem;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  color: #333;
  min-height: 48px;
  display: flex;
  align-items: center;
}

.quick-actions {
  display: flex;
  gap: 0.75rem;
}

.btn {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.info-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-section h3 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f0f0f0;
}

.info-grid {
  display: grid;
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.info-label {
  font-weight: 500;
  color: #555;
}

.info-value {
  font-family: 'Courier New', monospace;
  color: #333;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .converter-container {
    grid-template-columns: 1fr;
  }
  
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
