<template>
    <div>
        <group title="产品目录">
            <cell title="存款" is-link :border-intent="false" :arrow-direction="showContent001 ? 'up' : 'down'" @click.native="showContent001 = !showContent001"></cell>
            <template class="slide" :class="showContent001?'animate':''"  v-if="showContent001" >
                <cell-box :border-intent="false"  style="color:#888" is-link link="/ck_gr_catalog">个人</cell-box>
                <cell-box  style="color:#888"is-link link="/ck_qy_catalog">企业</cell-box>
            </template>

            <cell title="理财" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
            <template class="slide" :class="showContent002?'animate':''" v-if="showContent002">
                <cell-box :border-intent="false"  style="color:#888"is-link link="/lc_gr_catalog">个人</cell-box>
                <cell-box  style="color:#888"is-link link="/lc_qy_catalog">企业</cell-box>
            </template>



            <cell title="中间业务" is-link :border-intent="false" :arrow-direction="showContent003 ? 'up' : 'down'" @click.native="showContent003 = !showContent003"></cell>
            <template class="slide" :class="showContent003?'animate':''" v-if="showContent003">
                <cell-box :border-intent="false"  style="color:#888"is-link link="/zj_dj_catalog">代缴类</cell-box>
                <cell-box  style="color:#888"is-link link="/zj_gjs_catalog">贵金属</cell-box>
            </template>

            <cell title="电子银行(示例)" is-link :border-intent="false" :arrow-direction="showContent004 ? 'up' : 'down'" @click.native="showContent004 = !showContent004"></cell>
            <template class="slide" :class="showContent004?'animate':''" v-if="showContent004">
                <cell-box :border-intent="false"  style="color:#888"is-link link="/dzyh_gr_catalog">个人</cell-box>
                <cell-box  style="color:#888"is-link link="/dzyh_qy_catalog">企业</cell-box>
            </template>

            <cell title="贷款" is-link :border-intent="false" :arrow-direction="showContent005 ? 'up' : 'down'" @click.native="showContent005 = !showContent005"></cell>
            <template class="slide" :class="showContent005?'animate':''" v-if="showContent005">
                <cell-box :border-intent="false"  style="color:#888"is-link link="/dk_gr_catalog">个人</cell-box>
                <cell-box  style="color:#888"is-link link="/dk_qy_catalog">企业</cell-box>
            </template>

        </group>
    </div>
</template>
<script>
    import { Cell, CellBox, CellFormPreview, Group } from 'vux'
    export default {
        components: {
            Group,
            Cell,
            CellFormPreview,
            CellBox
        },
        data() {
            return {
                showContent001: false,
                showContent002: false,
                showContent003: false,
                showContent004: false,
                showContent005: false

            }
        },
        created () {
            console.log(this.showContent001)
        }
    }

</script>
<style>
    .sub-item {
        color: #888;
    }

    .slide {
        padding: 0 20px;
        overflow: hidden;
        max-height: 0;
        transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
    }

    .animate {
        max-height: 9999px;
        transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
        transition-delay: 0s;
    }
</style>