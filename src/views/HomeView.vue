<template>
  <div class="home">
    <Header />
    <div class="main">
      <div class="home-recommend" @click="change">
        <div class="home-title">最新发布</div>
        <div class="home-recommend-content">
          <div>
            <Transition name="slide-up">
              <img v-if="imageLoopShowIndex == 0" src="../assets/0.jpg" />
              <img v-else-if="imageLoopShowIndex == 1" src="../assets/1.jpg" />
              <img v-else-if="imageLoopShowIndex == 2" src="../assets/3.jpg" />
            </Transition>
          </div>
          <div class="home-recommend-item-box">
            <div class="home-recommend-item home-recommend-content-more-article">更多文章</div>
            <div class="home-recommend-item home-recommend-content-more-laboratory">更多文章</div>
            <div class="home-recommend-item home-recommend-content-more-game">王者荣耀</div>
          </div>
        </div>
      </div>
      <div class="home-laboratory">
        <div class="home-title">好玩实验</div>
        <div class="home-laboratory-box">
          <div v-for="laboratory, index in laboratories" :key="index" class="home-laboratory-card">
            {{ laboratory.title }}
          </div>
        </div>
      </div>
      <div class="home-articles">
        <div class="home-title">推荐文章</div>
        <div class="home-articles-box">
          <div v-for="article, index in articles" :key="index" class="home-articles-card">
            <img :src="article.backgroundURL">
            <div class="home-articles-card-title">{{ article.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/common/header.vue'
import Footer from '@/components/common/footer.vue'


export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      imageLoop: [{
        url: '../assets/0.jpg'
      }, {
        url: '../assets/1.jpg'
      }, {
        url: '../assets/0.jpg'
      }],
      imageLoopShowIndex: 3,
      articles: [{
        title: '多线程的由来与发展',
        backgroundURL: require('../assets/1.jpg')
      },
      {
        title: '操作系统-系统调用syscall',
        backgroundURL: require('../assets/3.jpg')
      },
      {
        title: 'TCP握手/挥手次数设计',
        backgroundURL: require('../assets/0.jpg')
      },
      ],
      laboratories: [{
        title: 'game-2048',
        url: ''
      }, {
        title: 'game-2048',
        url: ''
      }]

    }
  },
  methods: {
    change() {
      this.imageLoopShowIndex = this.imageLoopShowIndex >= (this.imageLoop.length - 1) ? 0 : this.imageLoopShowIndex + 1
    }
  },
  mounted() {
    this.imageLoopShowIndex = 0;
  }
}
</script>

<style scoped>
.main {
  padding: 0 400px;
}

.home-title {
  font-size: 24px;
  font-weight: 700;
  height: 80px;
  line-height: 80px;
}

.home-recommend {
  width: 100%;
  height: 450px;
  user-select: none;
  margin-top: 20px;
}

.home-recommend-content {
  /* display: flex; */

}

.home-recommend-item {
  width: 380px;
  height: 80px;
  border-radius: 5px;
  line-height: 80px;
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 20px;
  user-select: none;
  cursor: pointer;
}

.home-recommend-item+.home-recommend-item {
  margin-top: 15px;
}

.home-recommend-content-more-article {
  background:
    linear-gradient(105deg, rgb(188, 211, 236) 39%, rgb(136, 155, 177) 96%), rgb(51, 60, 90);

}

.home-recommend-content-more-laboratory {
  background:
    linear-gradient(105deg, rgb(247, 206, 146) 39%, rgb(225, 184, 79) 96%), rgb(255, 184, 79);
}

.home-recommend-content-more-game {
  background:
    linear-gradient(105deg, rgb(255, 244, 159) 39%, rgb(225, 244, 19) 96%), rgb(255, 184, 79);
}


.home-recommend-content {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
}

.home-articles {
  width: 100%;
}

.home-articles-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home-articles-card {
  width: 340px;
  height: 170px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  /* transition: .3s; */
}

.home-articles-card img {
  width: 100%;
  height: 100%;
  opacity: 0.8;
  border-radius: 5px;
}

.home-laboratory-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home-laboratory-card {
  width: 520px;
  height: 170px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgb(136, 155, 177);
}

.home-articles-card-title {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: rgb(228, 238, 238);
  background-color: rgb(58, 143, 207);
}


.home-recommend img {
  width: 700px;
  height: 350px;
}

.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>