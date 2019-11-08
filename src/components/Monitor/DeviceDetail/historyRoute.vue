<template>
    <section>
        <el-row style="margin-top:10px">
            <el-col :span="5">
                <el-date-picker
                v-model="timeRange"
                type="datetimerange"
                size = "mini"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right"
                value-format="yyyy-MM-dd HH:mm:ss">
                </el-date-picker>
            </el-col>
            <el-col :span="3">
                <el-button  type="primary" size="mini" @click="getHistory">查询</el-button>
            </el-col>
        </el-row>
        <div style="height:600px;margin-top:10px">
            <div id="containerForHistory" :style="{height:'595px',width:'100%',overflow:'hidden',margin:'2px',border:'1px solid #000', margin:'0 0 0 10px'}" ></div>
        </div>
    </section>
</template>

<style scoped>

</style>

<script>
export default {
    name:'historyRoute',
    props:['mac_id'],
    data(){
        return{
            mapForHistory:null,
            lineArr:[],
            polyline:'',
            pickerOptions: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近一个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近三个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
                }
            }]
            },
            //历史轨迹
            timeRange:[],
        }
    },
    methods:{
      initHistoryMap(){
        let that = this

        that.mapForHistory = new AMap.Map('containerForHistory', {
          resizeEnable: true,
          zoom: 4 //地图视图缩放级别
        })
      },
      getHistory(){
          let Info = {
              mac_id:this.mac_id,
              timeStart:this.timeRange[0],
              timeEnd:this.timeRange[1]
          }
          this.$api.device.getMarkerHistory(Info).then((res)=>{
            this.lineArr = res.data
            this.mapForHistory.remove(this.polyline)
            this.polyline = null
            this.polyline = new AMap.Polyline({
                map: this.mapForHistory,
                path: this.lineArr,
                showDir:true,
                strokeColor: "blue",  //线颜色
                // strokeOpacity: 1,     //线透明度
                strokeWeight: 4,      //线宽
                strokeStyle: "solid"  //线样式
            });
            this.mapForHistory.setFitView();
          })
      },
    },
    mounted(){
        this.initHistoryMap();
    }
}
</script>