<template>
    <section>
            <el-row>
                <el-col :span="8" class="toolbar" style="margin-top:0px;">
                        <el-form :inline="true" >
                            <el-date-picker
                            v-model="timeRangeForDeviceRawData"
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
                           :show-overflow-tooltip="true"
                            width="2030"
                            prop="raw_data"
                            
                            label="原始数据">
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
    name:'rawData',
    props:['mac_id'],
    data(){
        return{
        //设备历史数据
        timeRangeForDeviceRawData:[],
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
              timeStart:this.timeRangeForDeviceRawData[0],
              timeEnd:this.timeRangeForDeviceRawData[1],
              limit: this.pageSize, 
              offset:(this.currentPage-1)*this.pageSize}

          this.$api.device.getDeviceRawData(Info).then((res) => {
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
        //设置初始时间为13天前
        var curDate = new Date()
        var preDate = new Date(new Date() - 13*24*60*60*1000)
 
        this.timeRangeForDeviceRawData[0] = preDate.getFullYear()+"-"+(preDate.getUTCMonth()+1)+"-"+preDate.getDate()+" "+
        preDate.getHours()+":"+preDate.getMinutes()+":"+preDate.getSeconds()
        this.timeRangeForDeviceRawData[1] = curDate.getFullYear()+"-"+(curDate.getMonth()+1)+"-"+curDate.getDate()+" "+
        curDate.getHours()+":"+curDate.getMinutes()+":"+curDate.getSeconds()
        this.handleSearch();
    }
}
</script>