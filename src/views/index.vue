<template>
  <div class="main">
    <router-view></router-view>
    <div class="footer">
      <van-tabbar v-model="active" route >
        <van-tabbar-item icon="manager" replace to="/">个人中心</van-tabbar-item>
        <van-tabbar-item icon="coupon" replace to="/meetingList">会议活动</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  min-height: 100%;
  position: relative;
  background: #f0f0f0;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  .van-tabbar--fixed{
    height: 1.4rem;
  }
  i {
    display: block;
    font-size: .5rem;
  }
  .van-tabbar-item__text {
    font-size: .4rem;
  }
}

</style>
