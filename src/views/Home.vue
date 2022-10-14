<template>
  <div class="home">
    <!-- <button class="btn btn-primary">test</button> -->
    <div class="main-head" :style="{ background: '#ecedf3' }">
      <div
        class="but-sign"
        :style="{
          background:
            'linear-gradient(to right, rgb(255, 196, 114), rgb(255, 68, 122))',
        }"
      >
        <v-icon>mdi-account-circle</v-icon>
        <span class="first">Sign In</span>
      </div>
      <div class="header">
        <h1>Saloons</h1>
      </div>
    </div>
    <div class="content" :style="{ background: '#ecedf3' }">
      <div class="container">
        <div class="cont-main">
          <div class="cat-wave">
            <div
              class="barr"
              :style="{
                background:
                  'linear-gradient(to right, rgb(255, 196, 114), rgb(255, 68, 122))',
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
                    'linear-gradient(to right, rgb(255, 196, 114), rgb(255, 68, 122))',
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
            <div class="post" v-for="post in allPosts" :key="post.id">
              <router-link :to="{ name: 'post', params: { id: post.id } }">
                <div class="main-post">
                  <div class="imag">
                    <img
                      :src="require(`@/assets/imgs/${post.imgSrc}`)"
                      alt=""
                      class=""
                    />
                    <button class="pa-1">Utilities</button>
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
// import HeaderHome from "@/components/HeaderHome.vue";
// import Wave from "@/components/Wave.vue";
import Breed from "../components/Breed.vue";
import Formm from "../components/Formm.vue";
import Foot from "@/components/Foot.vue";
import JsonPosts from "../assets/posts_home.json";

export default {
  data: () => ({
    posts: JsonPosts,
    start: 0,
    end: 8,
    allPosts: [],
  }),
  computed: {
    // evenposts()  {
    //   console.log('run');
    //   const that = this as any;
    //   return that.posts.filter((p: number) =>  8)
    // }
  },
  components: {
    // HeaderHome,
    // Wave,
    Formm,
    Foot,
    Breed,
  },
  methods: {
    evenposts() {
      console.log("run");
      const that = this as any;
      for (let i = that.start; i < that.end; i++) {
        that.allPosts.push(that.posts[i]);
        // console.log(that.allPosts)
      }
    },
  },
  created() {
    const that = this as any;
    that.evenposts();
  },
};
</script>

<style lang="scss">
.home {
  .main-head {
    padding-bottom: 30px;
    .but-sign {
      padding: 10px 25px;
      overflow: hidden;
      text-align: right;
      position: absolute;
      top: 10px;
      right: 10px;
      color: #fff;
      // background: linear-gradient(to right, rgb(255, 196, 114), rgb(255, 68, 122));
      border-radius: 5px;
      font-size: 20px;
      box-shadow: 0 3px 3px #142a98;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        box-shadow: none;
        i {
          color: #fff;
        }
      }
      i {
        color: #cf7a20;
        transition: all 0.5s ease;
        cursor: pointer;
      }
      span {
        margin-left: 10px;
        cursor: pointer;
      }
    }
    .header {
      background: url(../assets/imgs/header.png);
      background-size: 100% 100%;
      text-align: center;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        color: #fff;
        font-size: 80px;
      }
    }
  }
  .content {
    padding-bottom: 30px;
    .container {
      .cont-main {
        box-shadow: 0 0 20px #c9cbd5;
        background-color: #fff;
        .cat-wave {
          .barr {
            padding: 10px;
            text-align: right;
            color: #fff;
            i {
              margin-right: 5px;
              color: #fff !important;
              cursor: pointer;
              transition: all 0.5s ease-in-out !important;
              &.rotat {
                &:hover {
                  transform: rotate(90deg);
                }
              }
            }
          }
          .up-comp {
            padding: 0 30px;
            .box-wave {
              max-width: 855px;
              padding: 20px;
              background-size: contain;
              position: relative;
              &::after {
                content: "";
                position: absolute;
                top: -2px;
                right: 0;
                width: 300px;
                background: url(../assets/imgs/3.png) right no-repeat;
                background-size: contain;
                height: 100%;
                @media (max-width: 767px) {
                  top: 0px;
                }
              }
              .head {
                border-bottom: 2px solid #000;
                @media (max-width: 767px) {
                  display: none;
                }
                button {
                  background-color: black;
                  color: white;
                  margin-right: 5px;
                  border: none;
                  padding: 7px;
                }
              }
              h2 {
                margin: 30px 0;
                letter-spacing: 1.5px;
                font-size: 30px;
              }
              .buts {
                button {
                  background-color: #2d45bd;
                  max-width: 800px;
                  border: none;
                  font-size: 14px;
                  padding: 8px;
                  height: 28px;
                  line-height: 10px;
                  margin: 5px;
                  position: relative;
                  perspective: 100px;
                  transition: all 0.5s ease;
                  cursor: pointer;
                  border-radius: 5px;
                  font-family: "Oswald", sans-serif;
                  color: #fff;
                }
              }
            }
            .breed {
              // color: #aaa !important;
              padding: 10px;
              // padding: 30px 10px;
              a {
                position: relative;
                margin: 0px 5px;
                text-decoration: none;
                transition: all 0.5s ease;
                color: inherit;
                cursor: pointer;
                color: #aaa !important;
                // padding: 30px 10px;
                &:hover {
                  color: blue !important;
                }
              }
            }
          }
        }
        .blogs {
          padding: 0 30px;
          .post {
            max-width: 855px;
            border: 1px solid #eee;
            margin-top: 35px;
            a {
              text-decoration: none;
              display: block;
              .main-post {
                display: flex;
                padding: 0 20px;
                @media (max-width: 991px) {
                  display: block;
                  text-align: center;
                }
                .imag {
                  width: 300px;
                  height: 200px;
                  margin: 20px;
                  position: relative;
                  perspective: 500px;
                  overflow: hidden;
                  @media (max-width: 991px) {
                    margin: 20px auto;
                  }
                  img {
                    width: 100%;
                    height: 100%;
                    transition: all 0.5s ease;
                  }
                  button {
                    background-color: #2d45bd;
                    border: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    color: #fff;
                    z-index: 1;
                  }
                }
                .inffo {
                  flex: 1;
                  h2 {
                    font-size: 20px;
                    color: #000;
                    margin: 20px 0;
                  }
                  .dat-ico {
                    margin-bottom: 10px;
                    color: #cf7a20;
                    .commentts {
                      float: right;
                      font-size: 14px;
                      color: #ff447a;
                    }
                  }
                  p {
                    font-size: 15px;
                    line-height: 1.8;
                    color: #666;
                    span {
                      color: #0082ff;
                    }
                  }
                }
              }
            }
          }
        }
        .viewws {
          max-width: 800px;
          text-align: center;
          margin-top: 40px;
          margin-bottom: 20px;
          padding-bottom: 40px;
          h2 {
            text-transform: uppercase;
            margin-bottom: 20px;
            span {
              color: #f7600e;
            }
          }
          p {
            line-height: 2;
            margin-bottom: 50px;
          }
          form {
            text-align: center;
            overflow: hidden;
            input {
              width: 44%;
              padding: 0 10px;
              height: 40px;
              line-height: 40px;
              border-radius: 10px;
              border: 1px solid #ccc;
              background-color: #ecedf3;
              margin: 0px 10px;
              outline: none;
              @media (max-width: 991px) {
                width: 90%;
                margin-bottom: 20px;
              }
            }
            textarea {
              margin-top: 20px;
              width: 90%;
              padding: 20px;
              height: 140px;
              border-radius: 10px;
              border: 1px solid #ccc;
              background-color: #ecedf3;
              outline: none;
            }
            .form-ico {
              margin-top: 20px;
              display: flex;
              justify-content: center;
              .cov-btn {
                // flex-grow: 1;
                text-align: left;
                // padding-left: 40px;
                button {
                  padding: 10px;
                  width: 220px;
                  border: none;
                  background-color: #f7600e;
                  color: #fff;
                  border-radius: 10px;
                  font-size: 14px;
                }
              }
              .soc-ico {
                // flex-grow: 1;
                text-align: right;
                padding-right: 40px;
                i {
                  width: 40px;
                  height: 40px;
                  line-height: 40px;
                  color: #fff;
                  border-radius: 50%;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  .footer {
    background-color: #010414;
    padding: 35px;
    display: flex;
    @media (max-width: 991px) {
      display: block;
      padding: 35px 0;
    }
    span {
      flex: 1;
      font-size: 23px;
      font-family: "Open Sans", sans-serif;
      color: #080;
      transition: all 0.5s ease;
      text-align: center;
      display: block;
      a {
        text-decoration: none;
        transition: all 0.5s ease-in-out;
        &:hover {
          color: #fff !important;
        }
      }
    }
  }
}
</style>
