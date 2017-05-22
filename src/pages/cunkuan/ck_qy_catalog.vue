<template>
  <div>
    <group-title>企业存款业务</group-title>
    <grid>
      <grid-item link="/component/cell" label="产品一">
        <img slot="icon" src="">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="产品二">
        <img slot="icon" src="">
      </grid-item>
      <grid-item link="/component/cell" label="产品三" @on-item-click="onItemClick">
        <img slot="icon" src="">
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