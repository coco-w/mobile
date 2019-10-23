<template>
  <div>
    <div class="header">
      <van-cell value="内容" is-link  to="/">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <van-image
            round
            width="1rem"
            height="1rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            style="  vertical-align: middle;"
          />
          <div class="wrapper">
            <span>王林强</span>
          </div>
        </template>
        <template>
          <div class="wrapper">
            <span>个人中心</span>
          </div>
        </template>
        <template slot="right-icon">
          <div class="wrapper">
            <van-icon name="arrow" />
          </div>
        </template>
      </van-cell>
      <van-row class="sign_up">
        <van-col span="8">
          <div class="ico">
            <van-icon class="iconfont" class-prefix="icon" name="xiangxixuqiu" />
          </div>
          <span>活动详细</span>
        </van-col>
        <van-col span="8">
          <div class="ico">
            <van-icon class="iconfont" class-prefix="icon" name="baoming" />
          </div>
          <span>报名注册</span>
        </van-col>
        <van-col span="8">
          <div class="ico">
            <van-icon class="iconfont" class-prefix="icon" name="tougao" />
          </div>
          <span>在线投稿</span>
        </van-col>
      </van-row>
    </div>
    <div class="main">
      <van-row>
        <van-col span="8">
          <div class="ico">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gonggao" />
            </svg>
          </div>
          <span>公告</span>
        </van-col>
        <van-col span="8">
          <div class="ico">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-download" />
            </svg>
          </div>
          <span>资料下载</span>
        </van-col>
        <van-col span="8">
          <div class="ico">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kefu1-copy-copy" />
            </svg>
          </div>
          <span>咨询留言</span>
        </van-col>
        <van-col span="8">
          <div class="ico">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qiandao" />
            </svg>
          </div>
          <span>现场签到</span>
        </van-col>
        <van-col span="8">
          <div class="ico">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-hudong" />
            </svg>
          </div>
          <span>现场互动</span>
        </van-col>
        <van-col span="8">
          <div class="ico">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-funzhaopianfenxiang" />
            </svg>
          </div>
          <span>照片分享</span>
        </van-col>
        <van-col span="8">
          <div class="ico">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-funwenjuantiaoyan" />
            </svg>
          </div>
          <span>问卷调研</span>
        </van-col>
      </van-row>
    </div>
    <div class="footer">
      <van-cell  is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <van-icon name="star" />
          <span class="custom-title">查看更多学术会议</span>          
        </template>
      </van-cell>
      <div class="mark">
        <span>技术支持:</span>
        <span>互动学堂</span>
        <span>学术会议管理系统</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>

.header {
  background-image: linear-gradient(to right, #7a88ff, #7affaf);
  color: #fff;
 
}

.van-cell:not(:last-child)::after {
  border: none;
}
.van-cell {
  background: transparent;
  color: #fff;
  font-size: 0.4rem;
  .van-icon {
    font-size: 0.4rem;
  }
  .wrapper {
    display: inline-block;
    height: 1rem;
    vertical-align: top;
    line-height: 1rem;
  }
  .van-cell__value {
    margin-right: 0.5rem;
    color: #fff;
  }
}
.sign_up {
  font-size: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  i {
    font-size: 1rem;
  }
  .ico {
    margin-bottom: 0.3rem;
  }
}
.main {
  font-size: 0.5rem;
  margin-top: 0.3rem;
  .van-col {
    box-sizing: border-box;
    text-align: center;
    padding: 0.65rem;
    background: #fff;
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
.footer {
  margin-top: 0.5rem;
  .van-cell {
    color:#333;
    background: #fff;
  }
  i:nth-child(1) {
    color: greenyellow;
  }
  .mark {
    text-align: center;
    margin-top:-15px;
    span {
      font-size: 0.4rem;
    }
    span:nth-child(2) {
      color:red;
    }
  }
  
}
</style>
