<template>
  <div>
    <group-title>电子银行/个人/借记卡</group-title>
    <grid>
      <grid-item  link="/mobilebank" label="手机银行">
        <img slot="icon" src="../../assets/mobilebank.png">
      </grid-item>
      <grid-item :link="{ path: '/wechat'}" label="微信绑定">
        <img slot="icon" src="../../assets/wechat.png">
      </grid-item>
      <grid-item link="/disanfang" label="第三方支付" @on-item-click="onItemClick">
        <img slot="icon" src="../../assets/alipay.jpg">
      </grid-item>
    </grid>
    <group-title>电子银行/个人/贷记卡</group-title>
    <grid :rows="2">
      <grid-item link="/chefenqi" label="车分期">
        <img slot="icon" src="../../assets/car.png">
      </grid-item>
      <grid-item :link="{ path: '/suixinfen'}" label="现金随心分">
        <img slot="icon" src="../../assets/fenqi.png">
      </grid-item>
    </grid>
  </div>
</template>
<script>
  import { Grid, GridItem, GroupTitle } from 'vux'

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods:{
      onItemClick(){

      }
    }
  }

</script>
<style>

</style>