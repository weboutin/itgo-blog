<template>
  <div class="article-detail">
    <Header />
    <div class="main">
      <div v-html="article" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>

import Header from '../components/common/header.vue'
import axios from 'axios'
import markdown from 'markdown-it'
import 'github-markdown-css'

export default {
  name: 'ArticleDetailView',
  components: {
    Header
  },
  data: function () {
    return {
      article: ''
    }
  },
  async mounted() {
    const id = this.$route.params.id
    id

    const resp = await axios.get('/markdown/0827.md');
    this.article = (new markdown()).render(resp.data)
  }
}
</script>


<style scoped>
.main {
  padding: 0 400px;
  margin-top: 40px;
}
</style>