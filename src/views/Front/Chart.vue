<template>
    <section>
        <el-col :span="20" :offset="2" >
            <el-row>
            <el-col :span="24" class="toolbar" style="margin-top:20px;margin-left:-35px">
                    <el-form :inline="true" >
                        <el-form-item>
                            <el-select v-model="mac_id" filterable placeholder="设备号">
                                <el-option
                                v-for="item in devices"
                                :key="item.id"
                                :label="item.mac_id"
                                :value="item.mac_id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-select clearable  placeholder="参数1" v-model="para1" size="medium">
                            <el-option
                                v-for="item in paraName"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select clearable  placeholder="参数2" v-model="para2" size="medium">
                            <el-option
                                v-for="item in paraName"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-date-picker
                        v-model="timeRange"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                        <el-form-item>
                            <el-button type="primary"  size="small" @click="handleSearch">查询</el-button>
                        </el-form-item>
                    </el-form>
            </el-col>
            </el-row>
            <el-row>
                <div :class="className" :id="id" :style="{height:height,width:width,overflow:'hidden',border:'1px solid #000', margin:'0 0 0 10px'}" ref="myEchart">
                </div>
            </el-row>
        </el-col>
    </section>
</template>

<script>
import { format } from "@/utils/datetime"
//import echarts from 'echarts'
import Cookies from "js-cookie";
 export default {
        props:{
            className:{
                type: String,
                default: 'echart'
            },
            id:{
                type:String,
                default:'container'
            },
            width: {
            type: String,
            default: '95%'
            },
            width2: {
            type: String,
            default: '80%'
            },
            height: {
                type: String,
                default: '450px'
            }
        },
      data() {
        return {
                mac_id:'',
                para1:'',
                para2:'',
                timeRange: [],
                paraName: [{
                        value: 'fanSpeed',
                        label: '风机转速'
                    }, {
                        value: 'walkSpeed',
                        label: '行走速度'
                    },{
                        value: 'waterPressure',
                        label: '水压'
                    },{
                        value:'area',
                        label:'小计面积'
                    },{
                        value:'areaInAll',
                        label:'总计面积'
                    }],
                devices: [],
                option:'',
                chartData:'',
                chart:''
          }
      },
      methods:{
                //初始化界面
                initial: function(){
                    let Info = {
                        mac_id:this.mac_id,
                        para1:this.para1,
                        para2:this.para2,
                        timeStart:this.timeRange[0],
                        timeEnd:this.timeRange[1]
                    }
                    this.$api.device.getChartData(Info).then((res) => {
                        console.log(res);
                        this.chartData = res.data
                        this.initChart();
                    }).catch(function(res) {
                        alert(res);
                    });
                },
                initChart(){
                    this.chart = echarts.init(this.$refs.myEchart);
this.option = {
    title : {
        text: '参数折线图',
        x: 'center',
        align: 'right'
    },
    grid: {
        bottom: 80
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    legend: {
        data:[this.chartData.para1Name,this.chartData.para2Name],
        x: 'left'
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 65,
            end: 85
        },
        {
            type: 'inside',
            realtime: true,
            start: 65,
            end: 85
        }
    ],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: false},
            data : this.chartData.times.map(function (str) {
                return str.replace(' ', '\n')
            })
        }
    ],
    yAxis: [
        {
            name: this.chartData.para1Name+"("+this.chartData.para1Unit+")",
            type: 'value',
           // max: this.chartData.para1Max
        },
        {
            name: this.chartData.para2Name+"("+this.chartData.para2Unit+")",
            nameLocation: 'end',
           // max:  this.chartData.para2Max,
            type: 'value',
            inverse: false
        }
    ],
    series: [
        {
            name:this.chartData.para1Name,
            type:'line',
            animation: false,
            areaStyle: {
            },
            lineStyle: {
                width: 2
            },
            markArea: {
                silent: true,
                data: [[{
                    xAxis: '2009/9/12\n7:00'
                }, {
                    xAxis: '2009/9/22\n7:00'
                }]]
            },
            data:this.chartData.para1
        },
        {
            name:this.chartData.para2Name,
            type:'line',
            yAxisIndex:1,
            animation: false,
            areaStyle: {
            },
            lineStyle: {
                width: 2
            },
            markArea: {
                silent: true,
                data: [[{
                    xAxis: '2009/9/10\n7:00'
                }, {
                    xAxis: '2009/9/20\n7:00'
                }]]
            },
            data:this.chartData.para2
        }
    ]
};
;
if (this.option && typeof this.option === "object") {
    this.chart.setOption(this.option, true);
}
                },
                getDeviceList(){
                    this.$api.device.getSimpleDeviceList().then((res) =>{
                        this.devices = res.data
                    }).catch(function(res) {
                        alert(res);
                    });
                },


                //搜索
                handleSearch(){
                    console.log(this.timeRange)
                    this.initial();
                },

                //查看设备详细信息
                detail: function (index, row) {
                    console.log("index:"+index)
                    console.log("row:"+row.mac_id)
                    this.$router.push({
                                name: '设备监控',   
                                query: {   
                                    mac_id: row.mac_id,   
                                } 
                            })  
                },
			},
			mounted(){
                this.getDeviceList();
			}
    }
</script>

