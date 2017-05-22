<template>
  <div>
    <group-title>存款/个人/存款业务</group-title>
    <grid>
      <grid-item link="/component/cell" label="活期">
        <img slot="icon" src="../../assets/icon.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="定期">
        <img slot="icon" src="../../assets/icon.png">
      </grid-item>
      <grid-item link="/component/cell" label="益农存" @on-item-click="onItemClick">
        <img slot="icon" src="../../assets/icon.png">
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