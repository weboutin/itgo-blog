<template>
  <div class="article">
    <Header />
    <div class="main">
      <div class="article-card" @click="getDetail(1)">
        <div class="article-title">Redis RDB持久化</div>
        <div class="article-content">
          <div class="article-background">
            <img src="../assets/1.jpg" />
          </div>
          <div class="article-summary">Redis 在最初的版本就提供了 RDB 持久化，在 1.100 版之后才新增了 AOF 持久化的特性。这篇文章探讨 RDB 持久化的实现。</div>
        </div>
      </div>
      <div class="article-card">
        <div class="article-title">Redis RDB持久化</div>
        <div class="article-content">
          <div class="article-background">
            <img src="../assets/1.jpg" />
          </div>
          <div class="article-summary">Redis 在最初的版本就提供了 RDB 持久化，在 1.100 版之后才新增了 AOF 持久化的特性。这篇文章探讨 RDB 持久化的实现。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import 'reset.css'
import Header from '../components/common/header.vue'


export default {
  name: 'ArticleView',
  components: {
    Header
  },
  data: function () {
    return {}
  },
  methods: {
    getDetail(id) {
      this.$router.push({
        name: 'article-detail',
        params: {
          id
        }
      })
    }
  }

}
</script>


<style scoped>
.main {
  padding: 0 400px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.article-card {
  cursor: pointer;
  width: 600px;
  border: 1px solid rgb(232, 238, 238);
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(71, 49, 49, 0.2);
  user-select: none;
}

.article-card+.article-card {
  margin-top: 30px;
}

.article-title {
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(214, 228, 228);
}

.article-content {
  display: flex;
  justify-content: space-between;
}

.article-background {
  padding: 10px 0;
  box-sizing: border-box;
}

.article-content img {
  width: 200px;
  height: 100px;
  border-radius: 5px;
}

.article-summary {
  padding: 10px;
  line-height: 20px;
  color: rgb(66, 75, 75);
}
</style>