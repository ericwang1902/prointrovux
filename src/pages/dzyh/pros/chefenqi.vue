<template>
    <div>
        <article class="weui-article art-back">
            <h1>车分期</h1>
            <section>
                <!--<h2 class="title">手机银行个人业务</h2>-->
                <section>
                    <h2 class="sech">1 产品简介</h2>
                    <p>
                        “车分期”，是指我行圆鼎贷记卡持卡人在购买家用一手或二手汽车时原有的信用额度不够用，需专项大额资金而向本行营业网点申请，由本行对分期付款申请人的个人资信状况作出调查后，发放给申请人一定的分期付款信用额度，申请人在信用额度内，支付一定比例的手续费，按月还款的业务。
                    </p>
                </section>
                <section>
                    <h2 class="sech">2 产品特色</h2>
                    <h3>2.1 高</h3>
                    <p>
                        最高可贷50万元！
                    </p>

                    <h3>2.2 惠</h3>
                    <p>分期手续费率低;</p>

                    <h3>2.3 活</h3>
                    <p>分期期数最短6期，最长36期，担保方式灵活！</p>

                    <h3>2.4 快</h3>
                    <p>办理流程简便，最快第二天放款</p>

                    <h3>2.5 便</h3>
                    <p>可通过柜面、网上银行、手机银行、ATM机等多渠道还款，还款便捷！</p>

                </section>
                <section>
                    <h2 class="sech">3 申请条件</h2>
                    <p>
                        18周岁以上、60周岁以下，具有完全民事行为能力的自然人。
                    </p>
                    <p>1.有固定职业且收入稳定；</p>
                    <p>2.拥有本行圆鼎贷记卡的，无不良信用记录；</p>
                </section>

                <section>
                    <h2 class="sech">4 办理形式</h2>
                    <p>1、客户到汽车经销商处刷卡购车，支行网点协助客户办理抵押登记手续及相关保险合同，电子银行部进行分期账务处理；</p>
                    <p>2、客户至汽车经销商处付清首付款，支行网点协助客户办理抵押登记手续及相关保险合同，电子银行部将分期资金汇入客户在我行开设的借记卡账户；</p>
                    <p>3、客户至汽车经销商处付清首付款，支行网点协助客户办理抵押登记手续及相关保险合同，电子银行部将分期资金直接汇入合作汽车经销商账户。</p>
                </section>

                <section>
                    <h2 class="sech">5 还款方式</h2>
                    <p>1、柜面</p>
                    <p>2、绑定借记卡自助还款</p>
                    <p>3、ATM自助设备</p>
                    <p>4、我行或他行网上银行</p>
                    <p>5、我行或他行手机银行</p>
                </section>

                <section>
                    <h2 class="sech">6 办理流程</h2>
                    <img src="../../../assets/chefenqi.png" alt="">
                </section>

                <section>
                    <h2 class="sech">7 手续费与分期期数</h2>
                    <div style="padding:15px;">
                        <x-table full-bordered style="background-color:#fff;">
                            <thead>
                                <tr>
                                    <th>期限</th>
                                    <th>手续费率</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>6期</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>12期</td>
                                    <td>3%</td>
                                </tr>
                                <tr>
                                    <td>24期</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td>36期</td>
                                    <td>9%</td>
                                </tr>
                            </tbody>
                        </x-table>
                    </div>
                </section>


            </section>
        </article>
    </div>
</template>
<script>
    import { XTable, LoadMore } from 'vux'

    export default {
        components: {
            XTable,
            LoadMore
        }
    }

</script>
<style>
.art-back{
    background-color: #fff
}
</style>