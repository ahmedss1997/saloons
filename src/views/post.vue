<template>
  <div class="home">
    <div
      class="but-sign"
      :style="{ 'box-shadow': post.colors.boxeShadowColor }"
    >
      <v-icon :color="post.colors.iconColor">mdi-account-circle</v-icon>
      <span class="first">Sign In</span>
    </div>

    <div class="caree" :style="{ background: post.colors.bgColor }">
      <h3 :style="{ color: post.colors.color }">Services</h3>
      <div class="svg-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1920 204.8"
          style="enable-background: new 0 0 1920 204.8"
          xml:space="preserve"
          preserveAspectRatio="none"
          class="svg hero__wave--svg replaced-svg"
        >
          <path
            class="st0"
            d="M367,41.4c235-43.3,518-74.9,736.8,23.9c121.4,54.9,250.6,103.2,395.6,103.2c116.1,0,242.4-31,383.1-114.4  c13.4-7.9,25.9-15.3,37.5-22.2v173H0l0-172C0,32.8,132,84.6,367,41.4z"
          ></path>
        </svg>
      </div>
      <div class="background-anim">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="poast">
      <div class="container">
        <div class="pos-main">
          <div class="cont-post">
            <div
              class="barr"
              :style="{
                background: 'linear-gradient(to right, #1C3484, #142C54)',
              }"
            >
              <v-icon class="rotat">mdi-magnify</v-icon>
              <v-icon>mdi-menu</v-icon>
            </div>
          </div>
          <Breed />
          <div class="watch-post">
            <h3>{{ post.title }}</h3>
            <img :src="require(`@/assets/imgs/${post.imgSrc}`)" alt="" />
            <div class="share">
              <div class="shareIt">
                <v-icon>mdi-share-variant</v-icon>
                Share
              </div>
              <ul class="sociaal">
                <li class="facebook">
                  <a href="#">
                    <v-icon>mdi-facebook</v-icon>
                    Facebook
                  </a>
                </li>
                <li class="twitter">
                  <a href="#">
                    <v-icon>mdi-twitter</v-icon>
                    twitter
                  </a>
                </li>
                <li class="google">
                  <a href="#">
                    <v-icon>mdi-google-plus</v-icon>
                    Google
                  </a>
                </li>
                <li class="linkedin">
                  <a href="#">
                    <v-icon>mdi-linkedin</v-icon>
                    Linkedin
                  </a>
                </li>
              </ul>
              <div class="pls">
                <v-icon>mdi-plus-thick</v-icon>
              </div>
            </div>
            <!-- content -->
            <div
              v-for="(content, i) in post.contents"
              :key="'content' + i"
              class="post-det"
            >
              <div class="pargraphh">
                <p>{{ content }}</p>
              </div>
              <div class="testingg">This is the ad place</div>
            </div>
            <Formm />
            <!-- Buttons -->
            <div class="next-prevv">
              <div class="arroww-right">
                <v-icon>mdi-arrow-left-bold-outline</v-icon>
                <span>Move to the next page</span>
              </div>
              <div class="arroww-left">
                <span>Move to the previous page</span>
                <v-icon>mdi-arrow-right-bold-outline</v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script lang="ts">
// import Bar from "../components/Bar.vue";
import Breed from "../components/Breed.vue";
import Formm from "../components/Formm.vue";
import Foot from "../components/Foot.vue";
import JsonPosts from "@/assets/posts_home.json";

export default {
  name: "post",
  components: {
    // Bar,
    Formm,
    Foot,
    Breed,
  },
  data: function () {
    return {
      posts: JsonPosts,
      post: {},
    };
  },
  mounted() {
    let that = this as any;
    if (that.$route.params && that.$route.params.id) {
      let findPost = that.posts.filter(
        (x: any) => x.id == that.$route.params.id
      );
      if (findPost.length) {
        that.post = findPost[0];
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  .but-sign {
    padding: 5px 25px;
    overflow: hidden;
    text-align: right;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    background: linear-gradient(to right, #1c3484, #142c54);
    // box-shadow: 0 3px 3px #0434ec;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    z-index: 10;
    &:hover {
      box-shadow: none !important;
      i {
        color: #fff !important;
      }
    }
    i {
      // color: #0434ec;
      transition: all 0.5s ease;
      cursor: pointer;
    }
    span {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .caree {
    font-family: "Oswald", sans-serif;
    height: 700px;
    line-height: 1000px;
    font-size: 120px;
    // color: #08B62C !important;
    background-size: 100% 100%;
    text-align: center;
    margin: 0;
    position: relative;
    @media (max-width: 767px) {
      height: 500px;
    }
    h3 {
      top: 40%;
      position: relative;
      transform: translateY(-50px);
      font-size: 80px;
      color: #fff !important;
    }
    .svg-wave {
      position: relative;
      top: 22px;
      @media (max-width: 1200px) {
        top: 35px;
      }
      @media (max-width: 991px) {
        top: 46px;
      }
      @media (max-width: 767px) {
        top: -135px;
      }
      .st0 {
        fill: #ecedf3;
      }
    }
    .background-anim {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      span {
        background-color: #ecedf3;
        opacity: 0.5;
        display: block;
        position: absolute;
        bottom: 0;
        animation: anim 15s linear infinite;
        &:nth-of-type(1) {
          left: 25%;
          width: 80px;
          height: 80px;
        }
        &:nth-of-type(2) {
          left: 70%;
          animation-delay: 4s;
          width: 20px;
          height: 20px;
        }
        &:nth-of-type(3) {
          left: 10%;
          animation-delay: 2s;
          width: 20px;
          height: 20px;
        }
        &:nth-of-type(4) {
          left: 40%;
          animation-delay: 18s;
          width: 60px;
          height: 60px;
        }
        &:nth-of-type(5) {
          left: 65%;
          width: 20px;
          height: 20px;
        }
        &:nth-of-type(6) {
          left: 75%;
          animation-delay: 3s;
          width: 110px;
          height: 110px;
        }
        &:nth-of-type(7) {
          left: 35%;
          animation-delay: 7s;
          width: 150px;
          height: 150px;
        }
        &:nth-of-type(8) {
          left: 50%;
          animation-delay: 15s;
          width: 25px;
          height: 25px;
        }
        &:nth-of-type(9) {
          left: 20%;
          animation-delay: 2s;
          width: 15px;
          height: 15px;
        }
        &:nth-of-type(10) {
          left: 85%;
          width: 150px;
          height: 150px;
        }
      }
    }
  }
  .poast {
    background-color: #ecedf3;
    padding-top: 32px;
    padding-bottom: 60px;
    .pos-main {
      box-shadow: 0 0 20px #c9cbd5;
      background-color: #fff;
      padding-bottom: 30px;
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
      .hr-lin {
        border-bottom: 1px solid #eee;
        margin-bottom: 60px;
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
      .watch-post {
        max-width: 900px;
        border: 1px solid #eee;
        overflow: hidden;
        padding: 0 60px;
        margin: 20px auto;
        padding-bottom: 40px;
        h3 {
          margin: 15px 0;
          line-height: 40px;
          font-size: 30px;
          font-weight: bold;
          text-align: center;
        }
        img {
          width: 100%;
          height: 500px;
          overflow: hidden;
          perspective: 500px;
          cursor: pointer;
          @media (max-width: 767px) {
            height: 300px;
          }
        }
        .share {
          display: flex;
          justify-content: space-between;
          padding: 30px 15px;
          flex-wrap: wrap;
          .shareIt {
            border: 1px solid #c2c0c0;
            border-radius: 5px;
            line-height: 30px;
            padding: 5px 10px;
            position: relative;
            cursor: pointer;
            height: 40px;
            margin: 0 auto 10px auto;
            &::after {
              content: "";
              position: absolute;
              top: 14px;
              right: -6px;
              width: 10px;
              height: 10px;
              transform: rotate(45deg);
              border-right: 1px solid #c2c0c0;
              border-top: 1px solid #c2c0c0;
              background-color: #f9fafd;
            }
            i {
              font-size: 20px !important;
            }
          }
          .sociaal {
            list-style: none;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 0 auto;
            padding: 0 15px;
            li {
              flex-grow: 1;
              max-width: 110px;
              height: 40px;
              border-radius: 5px;
              font-size: 14px;
              overflow: hidden;
              text-align: center;
              margin-left: 10px;
              color: #fff;
              margin-bottom: 10px;
              &.facebook {
                background-color: #3b5999;
              }
              &.twitter {
                background-color: #55acee;
              }
              &.google {
                background-color: #dd4b39;
              }
              &.linkedin {
                background-color: #0077b5;
              }
              a {
                text-decoration: none;
                color: inherit;
                line-height: 40px;
                display: flex;
                padding: 0 10px;
                i {
                  max-width: 30px;
                  min-width: 30px;
                  height: 100%;
                  display: block;
                  color: #fff;
                  line-height: 40px;
                  margin-left: -10px;
                  margin-right: 10px;
                  background: rgba(0, 0, 0, 0.3);
                }
              }
            }
          }
          .pls {
            border: 1px solid #c2c0c0;
            border-radius: 5px;
            padding: 0 7px;
            cursor: pointer;
            height: 30px;
            position: relative;
            top: 5px;
            margin: 0 auto 10px auto;
            i {
              font-size: 18px !important;
            }
          }
        }
        .post-det {
          .pargraphh {
            padding: 35px 0;
            p {
              line-height: 2.5;
              font-size: 20px;
            }
          }
          .testingg {
            height: 200px;
            background-color: #ecedf3;
            color: #aaa;
            padding: 35px 0;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
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
        .next-prevv {
          margin: 90px auto 40px;
          margin-top: 90px;
          margin-bottom: 40px;
          max-width: 800px;
          height: 80px;
          @media (max-width: 991px) {
            margin: 40px auto 60px;
          }
          .arroww-right {
            width: 265px;
            margin: 10px 0;
            padding: 35px;
            cursor: pointer;
            background-color: #bd3618;
            padding: 15px;
            color: #fff;
            text-align: center;
            transition: all 0.5s ease;
            will-change: transform;
            font-family: "Oswald", sans-serif;
            float: left;
            &:hover {
              transform: rotateX(45deg) rotateZ(8deg) translateY(-20px);
              i {
                transform: translateX(-20px) !important;
              }
            }
            @media (max-width: 991px) {
              float: none;
              margin: 20px auto;
              &:hover {
                transform: rotateY(-10deg) rotateZ(8deg) translateY(-20px);
                i {
                  transform: translateX(-20px) !important;
                }
              }
            }
            i {
              transition: all 0.5s ease;
              position: relative;
              will-change: transform;
              margin: 0 10px;
              color: #fff;
              &:hover {
                transform: translateX(-20px) !important;
              }
            }
            span {
              color: #fff;
            }
          }
          .arroww-left {
            width: 265px;
            margin: 10px 0;
            padding: 35px;
            cursor: pointer;
            background-color: #bd3618;
            padding: 15px;
            color: #fff;
            text-align: center;
            transition: all 0.5s ease;
            will-change: transform;
            font-family: "Oswald", sans-serif;
            float: right;
            &:hover {
              transform: rotateX(45deg) rotateZ(-8deg) translateY(-20px);
              i {
                transform: translateX(20px) !important;
              }
            }
            @media (max-width: 991px) {
              float: none;
              margin: 20px auto;
              &:hover {
                transform: rotateY(10deg) rotateZ(-8deg) translateY(20px);
                i {
                  transform: translateX(20px) !important;
                }
              }
            }
            span {
              color: #fff;
            }
            i {
              transition: all 0.5s ease;
              position: relative;
              will-change: transform;
              margin: 0 10px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

@keyframes anim {
  0% {
    transform: translateY(0%) rotate(0deg);
    opacity: 1;
    border-radius: 0%;
  }
  100% {
    transform: translateY(-820px) rotate(72deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
