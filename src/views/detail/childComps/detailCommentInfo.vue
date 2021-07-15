<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-top">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-content">
      <p>{{commentInfo.content}}</p>
      <div class="comment-date">
        <span>{{commentInfo.created | DateFilter}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils/utils";

  export default {
    name: "detailCommentInfo",
    props: {
      commentInfo: Object
    },
    filters: {
      DateFilter: function (value) {
        const date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .detail-comment-info {
    padding: 15px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-top {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    /*height: 50px;*/
    /*line-height: 50px;*/
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .comment-user {
    margin-top: 10px;
  }
  .comment-user img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .comment-user span {
    position: relative;
    top: -15px;
    margin-left: 10px;
  }
  .comment-content {
    padding: 10px 0;
  }
  .comment-content p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .comment-date {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .comment-date span:nth-of-type(1) {
    margin-right: 8px;
  }
  .comment-imgs img {
    margin-right: 8px;
    width: 70px;
    height: 70px;
  }
</style>