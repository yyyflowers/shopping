<template>
  <div class="account-info">
    <div class="account-item">
      <div class="number">
        <span class="balance">0.00</span>元
      </div>
      <div class="info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>个
      </div>
      <div class="info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>分
      </div>
      <div class="info">我的积分</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AccountInfo"
  }
</script>

<style scoped>
  .account-info {
    display: flex;
  }
  .account-item {
    width: 100%;
    text-align: center;
    margin-right: 1px;
    background-color: #ffffff;
    color: #666;
    font-size: 13px;
    padding: 18px;
  }
  .account-item:last-of-type {
    margin-right: 0;
  }
  .account-item .balance {
    font-size: 24px;
    color: #ff5f3e;
    font-weight: 700;
  }
  .account-item .info {
    margin-top: 6px;
  }
</style>