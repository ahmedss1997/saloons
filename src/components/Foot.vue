<template>
  <div class="footer">
    <span>
      <router-link to="/post/17"> who are we </router-link>
    </span>
    <span>
      <router-link to="/post/18"> Usage Agreement </router-link>
    </span>
    <span>
      <router-link to="/post/19"> Privacy policy </router-link>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "footerr",
};
</script>

<style lang="scss">
.home {
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
