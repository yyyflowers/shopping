<template>
  <div class="user-info">
    <img src="~assets/img/profile/avatar.svg" alt="" class="avatar">
      <div class="info">
        <div class="login">登录/注册</div>
        <div class="phone">
          <img src="~assets/img/profile/phone.svg" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .user-info {
    height: 85px;
    padding: 6px 15px;
    background-color: var(--color-tint);
    color: #ffffff;
    display: flex;
  }
  .user-info .avatar {
    height: 70px;
    width: 70px;
  }
  #user-info .info {
    flex: 1;
    padding-left: 15px;
  }
  .user-info .info .login {
    padding-top: 15px;
  }
  .user-info .info .phone img {
    width: 20px;
    height: 30px;
    vertical-align: middle;
    margin-left: -5px;
  }
  .user-info .info .phone span {
    font-size: 13px;
  }
  .user-info .arrow {
    width: 20px;
    line-height: 85px;
  }
  .user-info .arrow img {
    width: 20px;
  }
</style>