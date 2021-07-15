<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="table1">
      <tr v-for="itemX in paramInfo.tables[0]">
        <td v-for="itemY in itemX">{{itemY}}</td>
      </tr>
    </table>
    <table class="table2">
      <tr v-for="item in paramInfo.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "detailParamInfo",
    props: {
      paramInfo: Object
    }
  }
</script>

<style scoped>
  .detail-param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    color: #333333;
  }
  .table1 {
    width: 100%;
    border-collapse: collapse;
  }
 .table1 tr{
   height: 42px;
 }
 .table1 tr td {
   border-bottom: 1px solid rgba(100,100,100,.1);
 }
  .table2 {
    width: 100%;
  }
  .table2 tr {
    height: 42px;
  }
  .table2 tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .table2 tr td:nth-of-type(2) {
    color: var(--color-high-text);
    width: 70%;
  }
</style>