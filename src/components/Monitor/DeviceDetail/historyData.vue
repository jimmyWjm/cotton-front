<template>
    <section>
            <el-row>
                <el-col :span="8" class="toolbar" style="margin-top:0px;">
                        <el-form :inline="true" >
                            <el-date-picker
                            v-model="timeRangeForDeviceHistory"
                            type="datetimerange"
                            :default-value="defaulttime"
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
                    <!-- 表格 -->
                    <el-table
                            :data="tableData" 
                            align="left" height="550" border stripe style="width: 100%;">

                            <el-table-column
                            width="155"
                            prop="time"
                            fixed
                            label="时间">
                            </el-table-column>

                            <el-table-column
                            prop="restart"
                            label="restart"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="lowerVer"
                            label="下位机版本"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="hostVer"
                            label="上位机版本"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="fanSpeed"
                            label="风机转速"
                            width="100"
                                    empty-text="暂无"
                                    >
                            </el-table-column>

                            <el-table-column
                            prop="walkSpeed"
                            label="行走速度"
                            width="100"
                            empty-text="暂无"
                            >
                            </el-table-column>

                            <el-table-column
                            prop="waterPressure"
                            label="水压"
                            empty-text="暂无"
                            >
                            </el-table-column>

                            <el-table-column
                            prop="area"
                            label="小计面积"
                                    empty-text="暂无"
                                    >
                            </el-table-column>
                            
                            <el-table-column
                            prop="areaInAll"
                            label="总计面积"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="motor"
                            label="发动机转速"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="waterPreWarn"
                            label="水压告警"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="fanWarn"
                            label="风机告警"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="oilTempWarn"
                            label="油温告警"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="waterTempWarn"
                            label="水温告警"
                            empty-text="暂无"
                            >
                            </el-table-column>
            
                            <el-table-column
                            prop="oilTempWarn"
                            label="油温告警"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="cottonHigh"
                            label="棉箱高位"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="cottonLow"
                            label="棉管地位"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="warnHigh"
                            label="警告高位"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="warnLow"
                            label="警告低位"
                            width="100"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="boxFull"
                            label="箱满"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="profileModeling"
                            label="仿形"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="middle"
                            label="中位"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="lubrication"
                            label="润滑"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="cluth_warn_mode"
                            label="离合器报警模式"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="cluth1"
                            label="离合器1"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="cluth2"
                            label="离合器2"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="cluth3"
                            label="离合器3"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="suck1"
                            label="吸入门1"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="suck2"
                            label="吸入门2"
                            empty-text="暂无"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="suck3"
                            label="吸入门3"
                            empty-text="暂无"
                            >
                            </el-table-column>
                    </el-table>
                    <!-- 分页 -->
                    <div class="block">
                        <el-pagination
                        
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="pageSize"
                            layout="total, prev, pager, next, jumper"
                            :total="total"> 
                        </el-pagination>
                    </div>
            </el-row>
    </section>
</template>

<style scoped>

</style>

<script>
export default {
    name:'historyData',
    props:['mac_id'],
    data(){
        return{
        //设备历史数据
        timeRangeForDeviceHistory:[],
		currentPage: 1,
        pageSize: 100,
        total:8,
        tableData:[],
        defaulttime:[],
        }
    },
    methods:{
      handleSearch(){
          this.currentPage = 1;
          this.initial();
      },
      //历史数据
      initial(){
          let Info = {
              mac_id:this.mac_id,
              timeStart:this.timeRangeForDeviceHistory[0],
              timeEnd:this.timeRangeForDeviceHistory[1],
              limit: this.pageSize, 
              offset:(this.currentPage-1)*this.pageSize}

          this.$api.device.getDeviceHistory(Info).then((res) => {
                   /*    console.log(res); */
                      this.total = res.data.total
                      this.tableData = res.data.data
          }).catch(function(res) {
              alert(res);
          });
      },
      //页面变化
      handleCurrentChange(val) {
          this.currentPage = val;
          console.log(this.currentPage)
          console.log(`当前页: ${val}`);
          this.initial();
      },
    },
    mounted(){
        //设置初始时间为前一天
        var curDate = new Date()
        var preDate = new Date(new Date() - 24*60*60*1000)
 
        this.timeRangeForDeviceHistory[0] = preDate.getFullYear()+"-"+(preDate.getUTCMonth()+1)+"-"+preDate.getDate()+" "+
        preDate.getHours()+":"+preDate.getMinutes()+":"+preDate.getSeconds()
        this.timeRangeForDeviceHistory[1] = curDate.getFullYear()+"-"+(curDate.getMonth()+1)+"-"+curDate.getDate()+" "+
        curDate.getHours()+":"+curDate.getMinutes()+":"+curDate.getSeconds()
        this.handleSearch();
    }
}
</script>