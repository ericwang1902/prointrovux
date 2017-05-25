<template>
    <div>
        <group-title>个人存款</group-title>
        <grid style="background-color:#fff">
            <grid-item link="/grhq" label="个人活期储蓄">
                <img slot="icon" src="../assets/grhq.png">
            </grid-item>
            <grid-item :link="{ path: '/grdq'}" label="个人定期储蓄">
                <img slot="icon" src="../assets/grdq.png">
            </grid-item>
            <grid-item  link="/grtz" label="个人通知存款" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/grtz.png">
            </grid-item>
            <grid-item link="/decd" label="大额存单" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/decd.png">
            </grid-item>
            <grid-item link="/ync" label="益农存" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/ync.png">
            </grid-item>
            <grid-item link="/dht" label="定活通" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/dht.png">
            </grid-item>
        </grid>
        <group-title>单位存款</group-title>
        <grid :rows="2" style="background-color:#fff">
            <grid-item link="/dwhq" label="单位活期存款">
                <img slot="icon" src="../assets/dwhq.png">
            </grid-item>
            <grid-item :link="{ path: '/dwdq'}" label="单位定期存款">
                <img slot="icon" src="../assets/dwdq.png">
            </grid-item>
            <grid-item link="/dwtz" label="单位通知存款" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/dwtz.png">
            </grid-item>
            <grid-item link="/dwxd" label="单位协定存款" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/xdck.png">
            </grid-item>
            
        </grid>
        <group-title>理财</group-title>
        <grid :rows="2" style="background-color:#fff">
            <grid-item link="/grlc" label="个人“汇富”理财">
                <img slot="icon" src="../assets/grlc.png">
            </grid-item>
            <grid-item :link="{ path: '/qylc'}" label="企业“汇富”理财">
                <img slot="icon" src="../assets/qylc.png">
            </grid-item>
        </grid>
        <group-title>中间业务</group-title>
        <grid :rows="2" style="background-color:#fff">
            <grid-item link="/dsf" label="代收付业务">
                <img slot="icon" src="../assets/dsdf.png">
            </grid-item>
            <grid-item :link="{ path: '/gjs'}" label="代理贵金属">
                <img slot="icon" src="../assets/gjs.png">
            </grid-item>
        </grid>
        <group-title>电子银行</group-title>
        <grid style="background-color:#fff">
            <grid-item link="/mobilebank" label="手机银行">
                <img slot="icon" src="../assets/mobilebank.png">
            </grid-item>
            <grid-item :link="{ path: '/wechat'}" label="微信绑定">
                <img slot="icon" src="../assets/wechat.png">
            </grid-item>
            <grid-item link="/disanfang" label="第三方支付" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/alipay.jpg">
            </grid-item>
            <grid-item link="/chefenqi" label="车分期">
                <img slot="icon" src="../assets/car.png">
            </grid-item>
            <grid-item :link="{ path: '/suixinfen'}" label="现金随心分">
                <img slot="icon" src="../assets/fenqi.png">
            </grid-item>
        </grid>
        <group-title>贷款</group-title>
        <grid style="background-color:#fff">
            <grid-item link="/zfaj" label="住房按揭贷款">
                <img slot="icon" src="../assets/fd.jpg">
            </grid-item>
            <grid-item :link="{ path: '/syaj'}" label="商用房按揭贷款">
                <img slot="icon" src="../assets/syfd.png">
            </grid-item>
            <grid-item link="/jzd" label="家装贷" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/jzd.png">
            </grid-item>
            <grid-item link="/cyd" label="车易贷" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/cheyidai.png">
            </grid-item>
            <grid-item link="/jyd" label="精英贷" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/jingyingdai.png">
            </grid-item>
            <grid-item link="/gjjd" label="公积金信用贷" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/gjjdk.png">
            </grid-item>
        </grid>
        <br>
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
        methods: {
            onItemClick() {

            }
        }
    }

</script>
<style>

</style>