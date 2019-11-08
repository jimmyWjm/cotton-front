<template>
    <div>
      <!-- 设备信息卡片 -->
      <infocard :mac_id="mac_id" :markerDetail="markerDetail" :state="state" :stateColor="stateColor"></infocard>

      <el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:5px 0 0 5px">
        <el-tab-pane label="实时监控" name="first">
          <el-col :span="9"> 
               <div id="container" :style="{height:'625px',width:'95%',overflow:'hidden',margin:'2px',border:'1px solid #000', margin:'0 0 0 10px'}" ></div>
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
                                <datacolumn :value="markerDetail.collectorState" title="采头状态"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.fanSpeed" title="风机转速"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.walkSpeed" title="行走速度"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.waterPressure" title="水压"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.area" title="小计面积"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.areaInAll" title="总计面积"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.motor" title="发动机转速"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.restart" title="重启标志"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.cottonHigh" title="棉箱高位"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.cottonLow" title="棉管低位"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.warnHigh" title="警告高位"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.warnLow" title="警告低位"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.boxFull" title="箱满"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.profileModeling" title="仿形"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.lubrication" title="润滑"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.lock" title="锁定"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.middle" title="中位"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.cluth_warn_mode" title="离合器报警模式"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.cluth1" title="离合器1"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.cluth2" title="离合器2"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.cluth3" title="离合器3"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.suck1" title="吸入门1"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.suck2" title="吸入门2"></datacolumn> 
                        </el-row>
                </el-col>
                <el-col :span="3">
                        <el-row class="paraModule">
                                <datacolumn :value="markerDetail.suck3" title="吸入门3"></datacolumn> 
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
                            <datacolumn :value="markerDetail.waterPreWarn" title="水压报警"></datacolumn> 
                          </el-col>
                          <el-col :span="6">
                            <datacolumn :value="markerDetail.fanWarn" title="风机报警"></datacolumn>
                          </el-col>
                          <el-col :span="6">
                            <datacolumn :value="markerDetail.oilTempWarn" title="油温报警"></datacolumn>
                          </el-col>
                          <el-col :span="6">
                            <datacolumn :value="markerDetail.waterTempWarn" title="水温报警"></datacolumn>
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
                              <datacolumn :value="markerDetail.err2" title="故障码2"></datacolumn> 
                            </el-col>
                            <el-col :span="6">
                              <datacolumn :value="markerDetail.err3" title="故障码3"></datacolumn>
                            </el-col>
                            <el-col :span="6">
                              <datacolumn :value="markerDetail.err4" title="故障码4"></datacolumn>
                            </el-col>
                            <el-col :span="6">
                              <datacolumn :value="markerDetail.err5" title="故障码5"></datacolumn>
                            </el-col>
                    </el-row> 
                </div>
          </el-col>
        </el-tab-pane>


        <el-tab-pane label="设备信息" name="second">

        </el-tab-pane>

        <el-tab-pane label="故障日志" name="third">

        </el-tab-pane>

        <el-tab-pane label="历史详细数据" name="forth">
          <historydata :mac_id="mac_id"></historydata>
        </el-tab-pane>

        <el-tab-pane label="历史原始数据" name="fifth">
                <div style="height:580px">
                </div>
        </el-tab-pane>

        <el-tab-pane label="历史轨迹" name="sixth" >
            <historyroute :mac_id="mac_id"></historyroute>
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
  //引入组件
  import infocard from '@/components/Monitor/DeviceDetail/infoCard'
  import datacolumn from '@/components/Monitor/DeviceDetail/dataColumn'
  import historydata from '@/components/Monitor/DeviceDetail/historyData'
  import historyroute from '@/components/Monitor/DeviceDetail/historyRoute'
  export default {
      components:{
        infocard,
        datacolumn,
        historydata,
        historyroute,
      },
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
        //地图部分
        zoom: 10,
        center: [121.5273285, 31.21515044],
        markerDetail: '',
        marker: null,
        infoWindow: null,
        window: '',
        map: null,
        runningStatus:'',
        pos_share:'这台设备没有位置信息',


 
        //设备信息
        state:'',
        stateColor:'',
        mac_id:'',


        //timer
        timerforPosData:'',
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
/*         if(tab.name == 'fifth'){
          //加载历史轨迹的地图
          this.initHistoryMap();
        } */
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
              /* console.log("markerDetail"+this.markerDetail) */
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
        this.timerForPosData = setInterval(this.markerUpdate,5000)
    },
    beforeDestroy(){
        clearInterval(this.timerForPosData)
        this.timerForPosData = null
    },
    destroyed(){
        console.log("destoryed");
    }
  };
</script>