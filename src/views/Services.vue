<template>
  <div class="home">
    <div class="main-head">
      <div
        class="but-sign"
        :style="{
          background:
            'linear-gradient(to right, rgb(143, 121, 230), rgb(82, 233, 226))',
          'box-shadow': '#142a98',
        }"
      >
        <v-icon color="#fff">mdi-account-circle</v-icon>
        <span class="first">Sign In</span>
      </div>
      <div class="header-serv">
        <h1
          :style="{
            'text-shadow':
              '0 2px 0 rgb(191 236 242 / 50%), 0 3px 0 rgb(170 230 238 / 50%), 0 4px 0 rgb(153 225 235 / 50%), 0 5px 0 rgb(144 223 233 / 50%), 0 7px 0 rgb(140 222 232 / 50%), 0 8px 0 rgb(42 193 213 / 50%), 0 0 5px rgb(25 116 128 / 50%), 0 10px 10px rgb(25 116 128 / 50%)',
            'font-size': '130px',
          }"
        >
          Services
        </h1>
      </div>
    </div>
    <div class="content" :style="{ background: '#fff' }">
      <div class="container">
        <div class="cont-main">
          <div class="cat-wave">
            <div
              class="barr"
              :style="{
                background:
                  'linear-gradient(to right, rgb(143, 121, 230), rgb(82, 233, 226))',
              }"
            >
              <v-icon class="rotat">mdi-magnify</v-icon>
              <v-icon>mdi-menu</v-icon>
            </div>
            <div class="up-comp">
              <Breed />
              <div
                class="box-wave"
                :style="{
                  background:
                    'linear-gradient(to right, rgb(143, 121, 230), rgb(82, 233, 226))',
                }"
              >
                <div class="head">
                  <button>Browsing Category</button>
                </div>
                <h2>Utilities</h2>
                <div class="buts">
                  <button>All</button>
                  <button>Most Popular</button>
                  <button>New</button>
                  <button>For Sale</button>
                </div>
              </div>
            </div>
          </div>
          <div class="blogs">
            <div class="post" v-for="post in secPosts" :key="post.id">
              <router-link :to="{ name: 'post', params: { id: post.id } }">
                <div class="main-post">
                  <div class="imag">
                    <img
                      :src="require(`@/assets/imgs/${post.imgSrc}`)"
                      alt=""
                    />
                    <button class="">Utilities</button>
                  </div>
                  <div class="inffo">
                    <h2>{{ post.title }}</h2>
                    <div class="dat-ico">
                      <span> {{ post.author }} </span>
                      <v-icon color="#cf7a20">mdi-circle-medium</v-icon>
                      <span> {{ post.date }} </span>
                      <div class="commentts">
                        <span> {{ post.views }} </span>
                        <v-icon>mdi-forum-outline</v-icon>
                      </div>
                    </div>
                    <p>
                      {{ post.contents[0] }} <span> {{ post.category }} </span>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <Formm />
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script lang="ts">
// import HeaderServices from "@/components/HeaderServices.vue";
// import WaveServ from "@/components/WaveServ.vue";
import Breed from "../components/Breed.vue";
import Formm from "../components/Formm.vue";
import Foot from "@/components/Foot.vue";
import JsonPosts from "../assets/posts_home.json";

export default {
  name: "services",
  data: () => ({
    posts: JsonPosts,
    secPosts: [],
  }),
  components: {
    // HeaderServices,
    // WaveServ,
    Formm,
    Foot,
    Breed,
  },
  methods: {
    servPosts() {
      console.log("run");
      const that = this as any;
      for (let i = 8; i < 16; i++) {
        that.secPosts.push(that.posts[i]);
        // console.log(that.secPosts)
      }
    },
  },
  created() {
    const that = this as any;
    that.servPosts();
  },
};
</script>

<style lang="scss">
.header-serv {
  background: url(../assets/imgs/serv.png);
  background-size: 100% 100%;
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    // text-shadow: 0 2px 0 rgb(191 236 242 / 50%), 0 3px 0 rgb(170 230 238 / 50%), 0 4px 0 rgb(153 225 235 / 50%), 0 5px 0 rgb(144 223 233 / 50%), 0 7px 0 rgb(140 222 232 / 50%), 0 8px 0 rgb(42 193 213 / 50%), 0 0 5px rgb(25 116 128 / 50%), 0 10px 10px rgb(25 116 128 / 50%);
    color: #fff;
    font-size: 130px;
    @media (max-width: 991px) {
      font-size: 80px !important;
    }
  }
}
</style>
