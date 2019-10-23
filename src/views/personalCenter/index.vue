<template>
  <div>
    <div class="header">
      <div class="user">
        <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="user-text">
          <span>王林强</span>
        </div>
        <div class="icon">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="btn">
        <van-button type="primary" size="large" style="font-size:0.6rem;height: 1.5rem;">
          <van-icon name="coupon" color="#fff" />
          <span>筹备会议活动</span>
        </van-button>
      </div>
    </div>
    <div class="menu">
      <van-cell title="我的会议活动" icon="coupon">
        <div class="info" style="background: transparent;color: #777;">
          <span>3</span>
        </div>
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
          color="#323233"
        />
      </van-cell>
      <van-cell title="我的消息" icon="comment" style="margin-top:20px">
        <div class="info">
          <span>99</span>
        </div>
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
          color="#323233"
        />
      </van-cell>
      <van-cell title="联系互动学堂" icon="service">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
          color="#323233"
        />
      </van-cell>
      <van-cell title="互动学堂介绍" icon="label">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
          color="#323233"
        />
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
@userHeight: 2rem;
.header {
  width: 100%;
  background-color: rgb(118, 218, 255);
  overflow: hidden;
  position: relative;
  align-items: center;
   &:before {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background-color: #fff;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &:before {
        bottom: 3rem;
        border-radius: 45%;
        animation-duration: 10s;
    }

    // &:after {
    //     bottom: 2.1vh;
    //     opacity: .5;
    //     border-radius: 47%;
    //     animation-duration: 10s;
    // }
  .user {
    margin: 20px 0;
    padding: 0 15px;
    .user-text {
      position: relative;
      display: inline-block;
      height: @userHeight;
      vertical-align: top;
      line-height: @userHeight;
      margin-left: 15px;
      font-size: 0.5rem;
    }
    .icon {
      height: @userHeight;
      line-height: @userHeight;
      float: right;
      i {
        font-size: 0.6rem;
      }
    }
  }
  .btn {
    width: 80%;
    margin: 0 auto;
    margin-bottom: .5rem
  }
}
.menu {
  margin-top: 20px;
  .van-cell {
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0px 16px;
    .van-cell__left-icon {
      line-height: 1.5rem;
    }
  }
  i {
    color:red;
  }
  i,span {
    font-size: 0.4rem;
  }
}
@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
    }
}
.info {
  display: inline-block;
  margin-right: 10px;
  background: red;
  border-radius: 50%;
  height: .6rem;
  width: .6rem;
  line-height: 20px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  line-height: 0.6rem;
  span {
    font-size: 0.4rem;
  }
}
</style>
