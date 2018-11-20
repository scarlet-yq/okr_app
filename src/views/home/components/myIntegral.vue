<template>
    <div>
        <v-chart v-if="data.length>0"
                :data="data"
                :padding="[40, 'auto']" id="pieCharts">
            <v-tooltip disabled />
            <v-scale y :options="yOptions" />
            <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="['#3BA4FF','#737DDE']" />
            <v-legend :options="legendOptions" />
            <v-guide type="html" :options="htmlOptions" />
        </v-chart>
    </div>
</template>

<script>
    import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale } from 'vux';
    import {homeResource} from '../../../api';

   /* const data = [
        { name: '可用积分', percent: 80, a: '2' },
        { name: '使用积分', percent: 20, a: '1' }
    ];

    const map = {}
    data.map(obj => {
        map[obj.name] = obj.percent ;
    })*/
//    let _map = {}
    export default {
        components: {
            VChart,
            VLine,
            VArea,
            VTooltip,
            VLegend,
            VBar,
            VPie,
            VGuide,
            VScale
        },
        data() {
            return {
                htmlOptions: {},
                /*htmlOptions: {
                    position: [ '50%', '50%' ],
                    html: `
                      <div style="width: 250px;height: 40px;text-align: center;">
                        <div style="font-size: 16px;padding-bottom: 6px;">总积分</div>
                        <div style="font-size: 18px">${validScoreTotal}</div>
                      </div>`
                },*/
                legendOptions: {},
                /*legendOptions: {
                    position: 'bottom',
                    align: 'center',
                    padding: [100, 0, 0, 0],
                    height: '200',
                    itemFormatter (val) {
                        console.log(val, '-----', _map);
                        return  '   ' + val + '                               ' + _map[val] + '     '
                    }
                },*/
                yOptions: {
                    formatter (val) {
                        return val * 100 + '%'
                    }
                },
                map: {},
                data: [],
                validScoreTotal: 0
            }
        },
        mounted() {
            homeResource.queryCurrentUserScoreInfo()
                .then(response => {
                    let { code, data } = response;
                    if (code === 0) {
                        this.$nextTick(() => {
                            this.data = [
                                { name: '可用积分', percent: data.workabilityScoreTotal, a: '1' },
                                { name: '使用积分', percent: data.abatementScoreTotal, a: '1' }
                            ];
                            let map = {};
                            this.data.map(obj => {
                                map[obj.name] = obj.percent ;
                            });
                            this.map = map;
//                            console.log("this.map", map, + '-----')

//                            var _this = this;
                            this.legendOptions = {
                                position: 'bottom',
                                align: 'center',
                                padding: [100, 0, 0, 0],
                                height: '200',
                                itemFormatter: (val) => {
//                                    console.log("this", this === _this, "this.map" + this.map);
//                                    console.log(val, '-----', (this.map[val]));
                                    return  '   ' + val + '                               ' + (this.map[val]) + '     '
                                }
                            };
                            this.htmlOptions = {
                                position: [ '50%', '50%' ],
                                html: `
                                  <div style="width: 250px;height: 40px;text-align: center;">
                                    <div style="font-size: 16px;padding-bottom: 6px;">总积分</div>
                                    <div style="font-size: 18px">${data.validScoreTotal}</div>
                                  </div>`
                            };
//                            this.validScoreTotal = data.validScoreTotal;
//                            console.log('validScoreTotal',this.validScoreTotal)
//                            this.$set(this.$data, 'validScoreTotal', data.validScoreTotal);

//                            console.log("this.map------", this.map, '------------')
                            /*for (var key in this.map) {
                                console.log("map-key:" + key+'-----map-value:'+ this.map[key] )
                            }*/
//                            _map = this.map;
//                            this.$set(this.$data, 'map', map);
//                            _map = map;

                        });
                    }
                })
        }
    }
</script>

<style lang="less">

</style>