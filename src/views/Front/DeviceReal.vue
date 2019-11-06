<template>
    <div>
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

      <el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:5px 0 0 5px">
  <!--  设备实时数据 -->
        <el-tab-pane label="实时监控" name="first">
          <el-col :span="9"> 
               <div id="container" :style="{height:mapHeight,width:'95%',overflow:'hidden',margin:'2px',border:'1px solid #000', margin:'0 0 0 10px'}" ></div>
                <div class="button-group">
                  <input type="button" class="xbutton" value="位置分享" :data-clipboard-text="pos_share" @click="copy" style="font-family:华文楷体 !important;font-size:20px" />
                </div>  
          </el-col>

          <el-col :span="15" >
            <div  style="height:330px;border:1px solid #000;">
                <el-row >
                  <div style="text-align:left;margin:20px 0 0 20px;font-size:20px;font-family:'黑体';font-weight: bold;color:red">
                  运行参数
                  </div>
                </el-row>
                <el-row>
                        
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">采头状态</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.collectorState" readonly="true" class="textInput" i>
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">风机转速</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.fanSpeed" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">行走速度</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.walkSpeed" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">水压</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.waterPressure" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">小计面积</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.area" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">总计面积</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.areaInAll" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">发动机转速</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.motor" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">重启标志</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.restart" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">棉箱高位</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.cottonHigh" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">棉管低位</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.cottonLow" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">警告高位</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.warnHigh" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">警告低位</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.warnLow" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">箱满</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.boxFull" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">仿形</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.profileModeling" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">润滑</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.lubrication" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">锁定</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.lock" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">中位</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.middle" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">离合器报警模式</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.cluth_warn_mode" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">离合器1</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.cluth1" readonly="true" class="textInput">
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">离合器2</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.cluth2" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">离合器3</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.cluth3" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">吸入门1</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.suck1" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">吸入门2</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.suck2" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <div>
                                    <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">吸入门3</div>
                                </div>
                                <div>
                                    <input type="text" name="input1" :value="markerDetail.suck3" readonly="true" class="textInput" >
                                </div>
                        </el-row>
                </el-col>

                </el-row>
            </div>
                <div style="width:100%;height:140px;margin:5px 0 0 0px;border:1px solid #000;">
                  <el-row >
                    <div style="text-align:left;margin:10px 0 0 10px;font-size:20px;font-family:'黑体';font-weight: bold;color:red">
                    故障告警
                    </div>
                  </el-row>
                  <el-row style="margin-top:5px">

                          <el-col :span="6">
                              <div>
                                  <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">水压报警</div>
                              </div> 
                              <div>
                                  <input type="text" name="input1" :value="markerDetail.waterPreWarn" readonly="true" class="textInput" >
                              </div>   
                          </el-col>
                          <el-col :span="6">
                              <div>
                                  <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">风机报警</div>
                              </div> 
                              <div>
                                  <input type="text" name="input1" :value="markerDetail.fanWarn" readonly="true" class="textInput" >
                              </div>   
                          </el-col>
                          <el-col :span="6">
                              <div>
                                  <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">油温报警</div>
                              </div> 
                              <div>
                                  <input type="text" name="input1" :value="markerDetail.oilTempWarn" readonly="true" class="textInput" >
                              </div>   
                          </el-col>
                          <el-col :span="6">
                              <div>
                                  <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">水温报警</div>
                              </div> 
                              <div>
                                  <input type="text" name="input1" :value="markerDetail.waterTempWarn" readonly="true" class="textInput" >
                              </div>   
                          </el-col>
                  </el-row> 
                </div>


                <div style="width:100%;height:140px;margin:5px 0 0 0px;border:1px solid #000;">
                  <el-row >
                    <div style="text-align:left;margin:10px 0 0 10px;font-size:20px;font-family:'黑体';font-weight: bold;color:red">
                    设备健康状况
                    </div>
                  </el-row>
                  <el-row style="margin-top:5px">

                          <el-col :span="6">
                              <div>
                                  <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">故障码2</div>
                              </div> 
                              <div>
                                  <input type="text" name="input1" :value="markerDetail.err2" readonly="true" class="textInput" >
                              </div>   
                          </el-col>
                          <el-col :span="6">
                              <div>
                                  <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">故障码3</div>
                              </div> 
                              <div>
                                  <input type="text" name="input1" :value="markerDetail.err3" readonly="true" class="textInput" >
                              </div>   
                          </el-col>
                          <el-col :span="6">
                              <div>
                                  <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">故障码4</div>
                              </div> 
                              <div>
                                  <input type="text" name="input1" :value="markerDetail.err4" readonly="true" class="textInput" >
                              </div>   
                          </el-col>
                          <el-col :span="6">
                              <div>
                                  <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">故障码5</div>
                              </div> 
                              <div>
                                  <input type="text" name="input1" :value="markerDetail.err5" readonly="true" class="textInput" >
                              </div>   
                          </el-col>
                  </el-row> 
                </div>
          </el-col>
        </el-tab-pane>
      <!--    设备信息 -->
        <el-tab-pane label="设备信息" name="second">

        </el-tab-pane>
     <!--    设备故障日志 -->
        <el-tab-pane label="故障日志" name="third">

        </el-tab-pane>

        <el-tab-pane label="历史详细数据" name="forth">
                <div>
                  <section>
                          <el-row>
                              <el-col :span="8" class="toolbar" style="margin-top:0px;">
                                      <el-form :inline="true" >
                                          <el-date-picker
                                          v-model="timeRangeForDeviceHistory"
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
                </div>
                <!-- 分页 -->

        </el-tab-pane>
        <el-tab-pane label="历史原始数据" name="fifth">
                <div style="height:580px">
                    
                </div>
                <!-- 分页 -->

        </el-tab-pane>
        <el-tab-pane label="历史轨迹" name="sixth" >
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
                <!-- 分页 -->
        </el-tab-pane>
      </el-tabs>
      </el-row>

    </div>
</template>
<style scoped>

    .paraModule{
        margin:5px 0 0 0
    }
    th.key
    {
    min-width: 120px;
    text-align: left;
    color: #74777a;
    font-weight: 400;
    background: #fafafc;
    padding: 0 8px;
    border-right: 1px solid #ebecec;
    border-bottom: 1px solid #ebecec;
    height: 48px
    }
    td.value
    {
      border-right:1px solid #ebecec;
      border-bottom:1px solid #ebecec;
      padding:0 8px;
      width:22%;
      word-break:break-all;
          height: 48px
    }
        div.text-left
     {
        font-size:17px;
        font-family:"黑体";
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        display:inline-block
     }
     .textInput
     {
        border:1px solid;
        width:75px;
        height:40px;
        font-size: 17px;
        text-align:center;
        background-color:#63B8FF;
        color:white;
        display:inline-block
     }
     .dev_info_basic
     {
       margin:-10px 0 0 10px;
       display:inline-block;
       font-weight:bold;
     }
     .dev_info_basic_v
     {
        color:blue;
        font-weight:bold;
     }
     .cardTable
     { border: 1px solid #000;

       font-size:18px;

     }
     .el-tabs__item{
      font-size:18px !important;
      font-weight: bold !important;
     }
      .button-group 
     {
      position: absolute;
      bottom: 40px;
      left: 70px;
      padding: 10px;
     }
    .button-group .xbutton 
     {
      height: 28px;
      line-height: 28px;
      background-color: #0D9BF2;
      color: #FFF;
      border: 0;
      outline: none;
      padding-left: 5px;
      padding-right: 5px;
      border-radius: 3px;
      margin-bottom: 4px;
      cursor: pointer;
     }

</style>

<script>
  import api from "@/http";
  //import echarts from 'echarts'

  import Vue from 'vue'
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
        default: '311px'
      }
    },
    data() {
      return {
        activeName: 'first',
        radio:'实时位置',
        mapHeight:'625px',
        //地图部分
        zoom: 10,
        center: [121.5273285, 31.21515044],
        markerDetail: '',
        marker: null,
        infoWindow: null,
        window: '',
        map: null,
        runningStatus:'',
        pos_share:'asda',


 
        //设备信息
        deviceInfo:'',
        state:'',
        stateColor:'',
        mac_id:'',


        //timer
        timerforPos:'',
        timerforData:'',

        //历史轨迹
        timeRange:[],
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
        mapForHistory:null,
        lineArr:[],
        polyline:'',
        //设备历史数据
        timeRangeForDeviceHistory:[],
				currentPage: 1,
        pageSize: 400,
        total:8,
        tableData:[]
      };
    },
    coumputed:{
/*       firstCol: function () {
        return this.paraKey.slice(0,5)
      } */
    },
    methods: {
      copy() {
            var clipboard = new ClipboardJS('.xbutton')
            clipboard.on('success', e => {
              alert("复制成功")
              // 释放内存
              clipboard.destroy()
            })
            clipboard.on('error', e => {
              // 不支持复制
              console.log('该浏览器不支持自动复制')
              // 释放内存
              clipboard.destroy()
            })
      },
      handleClick(tab, event) {
        console.log(tab.name)
        if(tab.name == 'fifth'){
          //加载历史轨迹的地图
          this.initHistoryMap();
        }
      },
    // 获取高德地图api
      mapReq () {
        let that = this

          that.map = new AMap.Map('container', {
            resizeEnable: true,

            zoom: this.zoom //地图视图缩放级别
          })

          var Options = {
              position: {top:'10px',right:'10px'},
              showZoomBar: true,

          }

          that.map.plugin(["AMap.ControlBar"],function(){
              var controlBar = new AMap.ControlBar(Options)
              that.map.addControl(controlBar)
          });
      },
        getMarker(mac_id){
            this.$api.device.getMarker(mac_id).then((res)=>{
              let data = res.data
              
              this.markerDetail = data
              console.log("markerDetail"+this.markerDetail)
              if(data.state==1){
                this.state = '在线'
                this.stateColor = 'green'
              }else if(data.state == 0){
                this.state = '离线'
                this.stateColor = 'grey'
              }else{
                this.state = '故障'
                this.stateColor = 'red'
              }
            })
        },
      markerReq(mac_id){
          let that = this 
          //初始化marker数据
            this.$api.device.getMarker(mac_id).then((res)=>{
              let data = res.data

              this.markerDetail = data
              console.log("markerDetail"+this.markerDetail.time)
              console.log(this.markerDetail)
              if(data.state==1){
                this.state = '在线'
                this.stateColor = 'green'
              }else if(data.state == 0){
                this.state = '离线'
                this.stateColor = 'grey'
              }else{
                this.state = '故障'
                this.stateColor = 'red'
              } 
            AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
              var iconTheme = 'default';	 
              var iconStyles = SimpleMarker.getBuiltInIconStyles(iconTheme);
                  var marker = null;
                  if(that.markerDetail.lon!=null&&that.markerDetail.lat!=null){
                      if(that.markerDetail.state == 1){
                        marker = new SimpleMarker({
                                  iconTheme: iconTheme,
                                  //使用内置的iconStyle
                                  iconStyle: iconStyles[2],	   
                                  map: that.map,
                                  offset: new AMap.Pixel(-10, -20),
                                  position:[that.markerDetail.lon,that.markerDetail.lat],
                                  });
                      }else if(that.markerDetail.state == 0){
                        marker = new SimpleMarker({
                                  iconTheme: iconTheme,
                                  //使用内置的iconStyle
                                  iconStyle: iconStyles[10],	   
                                  map: that.map,
                                  offset: new AMap.Pixel(-10, -20),
                                  position:[that.markerDetail.lon,that.markerDetail.lat],
                                  });
                      }else{
                        marker = new SimpleMarker({
                                  iconTheme: iconTheme,
                                  //使用内置的iconStyle
                                  iconStyle: iconStyles[17],	   
                                  map: that.map,
                                  offset: new AMap.Pixel(-10, -20),
                                  position:[that.markerDetail.lon,that.markerDetail.lat],
                                  });
                      }
                      that.pos_share = "https://uri.amap.com/marker?position="+that.markerDetail.lon+","+that.markerDetail.lat
                      //存储内容
                      marker.content='<h3><b style="color:grey">设备号:</b>'+that.markerDetail.mac_id+'</h3>'+'<h4><b style="color:grey">上一个位置时间:</b>'+that.markerDetail.gpsTime+'</h4>'
                      AMap.event.addListener(marker, 'click', that.markerClick); 
                      that.marker = marker
                      var infoWindow=new AMap.InfoWindow({offset: new AMap.Pixel(0, -30),closeWhenClickMap: true});
                      infoWindow.setContent(marker.content);
                      that.infoWindow = infoWindow
                  }
                  that.map.setFitView();
                  that.map.setZoom(that.zoom)
          })
            })          
      },
      markerUpdate(){
        let that = this
        if(that.marker==null){
          that.markerReq(that.mac_id)
        }else{
          this.$api.device.getMarker(that.mac_id).then((res)=>{
            let data = res.data
            that.markerDetail = data
            AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                  if(data.state==1){
                    that.state = '在线'
                    that.stateColor = 'green'
                  }else if(data.state == 0){
                    that.state = '离线'
                    that.stateColor = 'grey'
                  }else{
                    that.state = '故障'
                    that.stateColor = 'red'
                  }
                  if(that.markerDetail.lon!=null&&that.markerDetail.lat!=null){
                    var iconTheme = 'default';	 
                    var iconStyles = SimpleMarker.getBuiltInIconStyles(iconTheme);
                    that.pos_share = "https://uri.amap.com/marker?position="+that.markerDetail.lon+","+that.markerDetail.lat
                      //这句语句
                      that.marker.setPosition([that.markerDetail.lon,that.markerDetail.lat])
                      if(that.markerDetail.state == 1){
                              that.marker.setIconStyle(iconStyles[2])
                      }else if(that.markerDetail.state == 0){
                              that.marker.setIconStyle(iconStyles[10])
                      }else{
                              that.marker.setIconStyle(iconStyles[17])
                      }
                      if(that.infoWindow.getIsOpen()){
                        that.infoWindow.setPosition([that.markerDetail.lon,that.markerDetail.lat])
                      }
                  }

            })
          })
        }
      },

        markerClick(e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.map, e.target.getPosition());
        },

      getRealDataValue(mac_id){
          this.$api.device.getRealDataValue(mac_id).then((res)=>{
            let data = res.data;
            this.faultValue = data.faults
            this.paraValue = data.paras
           /*  console.log(data) */
          })
      },

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
      //历史数据
      initial(){
          let Info = {
              mac_id:this.mac_id,
              timeStart:this.timeRangeForDeviceHistory[0],
              timeEnd:this.timeRangeForDeviceHistory[1],
              limit: this.pageSize, 
              offset:(this.currentPage-1)*this.pageSize}

          this.$api.device.getDeviceHistory(Info).then((res) => {
                      console.log(res);
                      this.total = res.data.total
                      this.tableData = res.data.data
          }).catch(function(res) {
              alert(res);
          });
      },
      handleSearch(){
          this.currentPage = 1;
          this.initial();
      },
      //页面变化
      handleCurrentChange(val) {
          this.currentPage = val;
          console.log(this.currentPage)
          console.log(`当前页: ${val}`);
          this.initial();
      },
    },
    created(){
      if(this.$route.params.mac_id!=null){
        this.mac_id = this.$route.params.mac_id
      }
      if(this.$route.query.mac_id!=null){
        this.mac_id = this.$route.query.mac_id
      }
      if(this.$route.params.activeName!=null){
        this.activeName = this.$route.params.activeName
      }
      if(this.$route.query.activeName!=null){
        this.activeName = this.$route.query.activeName
      }
    },
    mounted(){
        this.mapReq();
        
        this.markerUpdate()
        this.timerForPos = setInterval(this.markerUpdate,5000)
   
        this.timerforData = setInterval(this.getRealDataValue,1000,this.mac_id)  

        this.handleSearch();
    },
    beforeDestroy(){
        clearInterval(this.timerforData)
        this.timerforData = null;
        clearInterval(this.timerForPos)
        this.timerForPos = null
        console.log("asdsadsa")
    },
    destroyed(){
        console.log("destoryed");
    }
  };
</script>