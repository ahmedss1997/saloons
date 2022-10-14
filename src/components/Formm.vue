<template>
  <div class="viewws">
    <h2>Say <span>Hello</span></h2>
    <p>
      lerm ipsum dolor sit atem, consectetur adipisicing elit. <br />
      fugit molistias pereferendis, sint error iste ut
    </p>
    <form>
      <input type="text" name="mail" placeholder="Your Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea
        name="textarea"
        cols="30"
        rows="10"
        placeholder="Your Message"
      ></textarea>
      <div class="form-ico">
        <div class="cov-btn">
          <button>Hire Us</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "formm",
};
</script>

<style lang="scss">
.home {
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
</style>
