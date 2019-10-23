<template>
  <div class="meeting-main">
    <div class="meeting" @click="handleRouterPush">
      <div class="title">
        <div class="text">2019中国信息经济学会</div>
        <div class="ico" @click="hanldeMore">
          <van-icon class="iconfont" class-prefix="icon" name="more" />
        </div>
      </div>
      <div class="content">
        <van-row>
          <van-col span="16" class="message">
            <div>
              <van-icon class="iconfont" class-prefix="icon" name="ziliao" />
              <span>组委会暂未发布资料</span>
            </div>
            <div>
              <van-icon class="iconfont" class-prefix="icon" name="time" />
              <span>2019年10月25日-27日</span>
            </div>
            <div>
              <van-icon class="iconfont" class-prefix="icon" name="weizhi" />
              <span>中部三省系统工程学会2018学术研讨会通知</span>
            </div>
            <div></div>
            <div></div>
          </van-col>
          <van-col span="8" class="logo">
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </van-col>
        </van-row>
      </div>
    </div>
    <van-dialog
      v-model="show"
      :show-cancel-button="false"
      :showConfirmButton="false"
      :closeOnClickOverlay="true"
    >
      <ul>
        <li>转发参会链接</li>
        <li>分享参会二维码</li>
        <li>标记为【已结束】</li>
        <li>置顶</li>
        <li>退出活动</li>
      </ul>
    </van-dialog>
    <div class="add">
      <div class="add-icon" @click="handleAdd">
        <van-icon name="plus" color="#fff" />
      </div>
    </div>
    <van-overlay :show="overlay" @click="overlay = false">
      <div class="add">
        <div>
          <span>我要筹备会议活动</span>
          <div class="add-icon" style="background: #FFA000">
            <van-icon name="coupon-o" color="#fff" />
          </div>
        </div>
        <div>
          <span>我要筹备会议活动</span>
          <div class="add-icon" style="margin-top: 15px;background:#4CAF50">
            <van-icon name="search" color="#fff" />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
export default {
  name: 'meetingIndex',
  data() {
    return {
      show: false,
      overlay: false
    }
  },
  methods: {
    hanldeMore () {
      this.show = true
    },
    handleAdd () {
      this.overlay = true
    },
    handleRouterPush () {
      this.$router.push({name: 'userInfo'})
    }
  }
}
</script>
<style lang="less" scoped>
.meeting-main {
  height: 100%;
  padding: 10px;
  .meeting {
    border-radius: 7px;
    overflow: hidden;
    .title {
      padding: 10px 5px 10px 15px;
      overflow: hidden;
      background: red;
      .text {
        // display: inline-block;
        font-size: 0.5rem;
        float: left;
      }
      .ico {
        float: right;
        height: 100%;
        padding: 5px;
      }
      .icon {
        float: right;
        font-size: 0.4rem;
      }
    }
    .content {
      // height: 4rem;
      // line-height: 5rem;
      background: #fff;
      overflow: hidden;
      margin-bottom: 0.6rem;
      .van-row {
        position: relative;
      }
      .message {
        font-size: 0.4rem;
        padding: 0.5rem;
        div {
          margin-bottom: 0.1rem;
        }
      }
      .logo {
        text-align: center;
        & > div {
          vertical-align: middle;
          position: absolute;
          top: 50%;
          right: 0.8rem;
          transform: translateY(-50%);
        }
      }
    }
    &:last-child {
      margin-bottom: 1rem;
    }
  }
  ul {
    li {
      padding: 10px 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
  .add {
    position: fixed;
    bottom: 2rem;
    right: 0.5rem;
    .add-icon {
      width: 1.5rem;
      text-align: center;
      border-radius: 50%;
      height: 1.5rem;
      background: #1989fa;
    }
    .van-icon {
      padding-top: 0.2rem;
    }
  }
  .van-overlay {
    span {
      font-size: 0.4rem;
      color: #fff;
      vertical-align: super;
    }
    .add-icon {
      display: inline-block;
    }
  }
}
</style>
