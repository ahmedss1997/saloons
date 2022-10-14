<template>
  <div class="hr-lin">
    <div class="breed">
      <router-link to="/">Home</router-link>
      <v-icon>mdi-chevron-right</v-icon>
      <router-link to="/services">Services</router-link>
      <v-icon>mdi-chevron-right</v-icon>
      <a href="#"
        >Offers of year 2020 : The European site offers used furniture and free
        home appliances around the world</a
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "breed",
};
</script>

<style lang="scss">
.home {
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
}
</style>
