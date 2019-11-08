<template>
       <div style="width:99%;height:100px;border:1px solid #000;margin-left:5px;margin-top:10px">
        <el-row>
            <el-col :span="4" style="text-align:left;" >
            <div style="display:inline-block;font-size:35px;font-weight:bold;margin-left:25px">
            {{mac_id}}
            </div>
            <div style="display:inline-block;text-align:center;">
                <h3 :style="{'border-radius':'5px','background-color':stateColor,color:'white',width:'45px','line-height':'35px'}">{{state}}</h3>
            </div>
            </el-col>
            <el-col :offset="12" :span="8">
              <el-row>

                <div style="line-height:35px;font-weight:bold">上位机版本号：{{markerDetail.hostVer}}</div>
              </el-row>
              <el-row>
                <div style="line-height:35px;font-weight:bold">下位机版本号：{{markerDetail.lowerVer}}</div>
              </el-row>
            </el-col>
        </el-row>
        <el-row style="text-align:left">
            <div style="margin-left:25px;font-weight:bolder">
            上一条消息发送时间：<div style="color:blue;display:inline">{{markerDetail.time}}</div>
            </div>
        </el-row>
      </div>
</template>

<style scoped>

</style>

<script>
export default {
    name:'infoCard',
    props:['mac_id','state','markerDetail','stateColor']
}
</script>