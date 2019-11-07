<template>
            <div style="margin-top:30px;">
                <div style="text-align:left;font-size:18px;font-weight:bold;">
                  <el-row>
                  <el-col :span="4" :offset="1">设备号:</el-col> 
                  <el-col :span="7" style="margin-top:5px;color:blue;float:left">{{mac_id}}</el-col> 
                  </el-row>
                </div>
                <table class="table table-striped"  style="margin-top:30px;width:100%;border:0px solid black;border-collapse:collapse" >
                    <tbody>	
                      <tr>
                      <td height="50px" width="40%" class="tdleft">时间</td>
                      <td id="lon"  class="tdStyle" >{{realSimple.time}}</td>
                    </tr>
                    <tr>
                      <td height="50px" class="tdleft">行走速度</td>
                      <td id="x_speed"  width="208px" class="tdStyle" >{{realSimple.walkSpeed}}</td>
                    </tr>
                    <tr>
                      <td height="50px"  class="tdleft">作业面积</td>
                      <td id="y_speed"  width="208px"  class="tdStyle">{{realSimple.area}}</td>
                    </tr>
                
                    <tr>
                    <td height="50px" class="tdleft">风机转速</td>
                      <td id="yaw"  width="208px"  class="tdStyle" >{{realSimple.fanSpeed}}</td>
                    </tr>
                    <tr>
                      <td height="50px"  class="tdleft">水压告警</td>
                      <td id="x_pos"    width="208px"  class="tdStyle" >{{realSimple.waterPreWarn}}</td>
                    </tr>
                    <tr>
                      <td height="50px"  class="tdleft">风机告警</td>
                      <td id="y_pos"   width="208px" class="tdStyle" >{{realSimple.fanWarn}}</td>
                    </tr>
                    <tr>
                      <td height="50px"  class="tdleft">水温告警</td>
                      <td id="y_pos"   width="208px" class="tdStyle" >{{realSimple.waterTempWarn}}</td>
                    </tr>
                    <tr>
                      <td height="50px"  class="tdleft">油温告警</td>
                      <td id="y_pos"   width="208px" class="tdStyle" >{{realSimple.oilTempWarn}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
</template>

<style scoped>
     .tdStyle
     {
       vertical-align:middle;
       color:white;
       background-color:#1981c0;
       border-top:black solid 1px;
       border-bottom:black solid 1px;
       font-size: 18px
     }
     .tdleft
     {
       border-right:black solid 3px;
       border-bottom:black solid 1px;
       border-top:black solid 1px;
       background-color:white;
       font-weight: bold
     }
     th
     {
       color:grey
     }
     td
     {
       color:#1981c0
     }
     p{
       line-height: 5px;
       font-size: 14px;
       font-weight: bold;
       color:blue
     }
</style>

<script>
export default {
    name:'dataTable',
/*     data(){
        return{
            realSimple:'',
            mac_id:'',
            disable
        }
    }, */
    props:['mac_id','realSimple'],
/*     methods:{
        getRealSimple(mac_id){
          this.$api.device.getRealDataValue(mac_id).then((res)=>{
            let data = res.data;
            this.realSimple = data;
          })
        }
    }, */

}
</script>