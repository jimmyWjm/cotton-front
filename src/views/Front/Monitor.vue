<template>
  <div class="test" >
    <el-row style="margin-top:5px">

          <!--   <el-row style="margin:5px;">

                    <el-col :span="5">
                        <div style="width:90%;display:inline-block;" :style="{border:wheatBorder1}">
                            <div style="border:1px solid black;height:60px;line-height:60px;font-size:17px">
                                <el-col :span="16"><div style="float:right;font-size:20px"> 耕整机械</div> </el-col>
                                <el-col :span="8"><div  style="float:left;font-size:30px;color:blue;font-weight:bold"> 2</div> </el-col>
                            </div>
                            <el-col :span="12">
                                <div style="border:1px solid black;height:45px;color:green;">
                                    <el-col :span="8">
                                        <div>运行</div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div style="line-height:45px;font-size:30px;">2</div>
                                    </el-col>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div style="border:1px solid black;height:45px;color:red;">
                                    <el-col :span="8">
                                        <div>故障</div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div style="line-height:45px;font-size:30px;">0</div>
                                    </el-col>
                                </div>
                            </el-col>  
                        </div>                  
                    </el-col>
                    <el-col :span="5">
                        <div style="width:90%;display:inline-block" :style="{border:wheatBorder2,}">
                            <div style="border:1px solid black;height:60px;line-height:60px;font-size:17px">
                                <el-col :span="16"><div style="float:right;font-size:20px"> 播种机械</div> </el-col>
                                <el-col :span="8"><div  style="float:left;font-size:30px;color:blue;font-weight:bold"> 10</div> </el-col>
                            </div>
                            <el-col :span="12">
                                <div style="border:1px solid black;height:45px;color:green;">
                                    <el-col :span="8">
                                        <div>运行</div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div style="line-height:45px;font-size:30px;">0</div>
                                    </el-col>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div style="border:1px solid black;height:45px;color:red;">
                                    <el-col :span="8">
                                        <div>故障</div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div style="line-height:45px;font-size:30px;">0</div>
                                    </el-col>
                                </div>
                            </el-col>  
                        </div>                  
                    </el-col>
                    <el-col :span="5">
                        <div style="width:90%;display:inline-block" :style="{border:wheatBorder3,}">
                            <div style="border:1px solid black;height:60px;line-height:60px;font-size:17px">
                                <el-col :span="16"><div style="float:right;font-size:20px"> 植保机械</div> </el-col>
                                <el-col :span="8"><div  style="float:left;font-size:30px;color:blue;font-weight:bold"> 10</div> </el-col>
                            </div>
                            <el-col :span="12">
                                <div style="border:1px solid black;height:45px;color:green;">
                                    <el-col :span="8">
                                        <div>运行</div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div style="line-height:45px;font-size:30px;">0</div>
                                    </el-col>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div style="border:1px solid black;height:45px;color:red;">
                                    <el-col :span="8">
                                        <div>故障</div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div style="line-height:45px;font-size:30px;">0</div>
                                    </el-col>
                                </div>
                            </el-col>  
                        </div>                  
                    </el-col>
                    <el-col :span="5">
                        <div style="width:90%;display:inline-block" :style="{border:wheatBorder4,}">
                            <div style="border:1px solid black;height:60px;line-height:60px;font-size:17px">
                                <el-col :span="16"><div style="float:right;font-size:20px"> 收获机械</div> </el-col>
                                <el-col :span="8"><div  style="float:left;font-size:30px;color:blue;font-weight:bold"> 10</div> </el-col>
                            </div>
                            <el-col :span="12">
                                <div style="border:1px solid black;height:45px;color:green;">
                                    <el-col :span="8">
                                        <div>运行</div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div style="line-height:45px;font-size:30px;">0</div>
                                    </el-col>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div style="border:1px solid black;height:45px;color:red;">
                                    <el-col :span="8">
                                        <div>故障</div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div style="line-height:45px;font-size:30px;">0</div>
                                    </el-col>
                                </div>
                            </el-col>  
                        </div>                  
                    </el-col>
    </el-row> -->

    <el-row>
        <el-col :span="left">
        <div id="container" style="height:630px;margin:5px"></div>
        <div class="button-group">
          <input type="button" class="button" :value="online" v-on:click="hide" style="font-family:华文楷体 !important;font-size:20px" />
          <input type="button" class="button" :value="isCluster"  v-on:click="addCluster" style="font-family:华文楷体 !important;font-size:20px" />
        </div>  
        <div class = "weather-card">
          <div style="font-size:10px"><h2 style="margin-top:0px">实时天气</h2><p>位置:{{data.city}}</p><p>气温:{{data.temperature}}℃</p><p>天气:{{data.weather}}</p><p>湿度:{{data.humidity}}</p><p>风向:{{data.windDirection}}</p></div>
        </div> 
        </el-col>
        <el-col :span="right" style="background-color:white;height:635px;border:1px solid black;"> 
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
        </el-col>
    </el-row>
    </el-row>
  </div>
</template>
<style scoped>
      .tag
      {
        height:80px;margin:5px
      }
      .tag-icon{
        color:white;
        line-height: 80px;
      }
      .tag-header1
      { 
        font-family: "华文楷体";
        margin-top:10px
      }
      .tag-header
      {
        color:white;text-align:left
      }
      .tag-value
      {
        font-size:40px
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
        width:70px;
        height:40px;
        font-size: 17px;
        text-align:center;
        background-color:#63B8FF;
        color:white;
        display:inline-block
     }
      .button-group 
     {
      position: absolute;
      bottom: 20px;
      left: -1300px;
      padding: 10px;
     }
    .button-group .button 
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
     .weather-card
     { 
       border:1px solid black;
       height:120px;
       width: 160px;
       position: absolute;
       top: 20px;
       left: 20px;
       padding: 10px;
       background-color: white;

     }
     .deviceCard
     {
      height:140px;
      border:1px solid #000;
      background-color:#fbecd5;
      margin: 10px
     }
     .cardHeader
     {
       height:138px;
       line-height: 138px;
       font-size: 20px;
       margin-left:5px ;
     }
     .cardTable
     { border-left: 1px solid #000;
       display:inline-block;
       font-size:20px;
       padding: 5px 0 5px 10px 
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
     .columnStyle
     {
         width:95%;
         font-size:17px;
         background-color:#409EFF
         ;text-align:center;
         box-sizing: border-box;
         color:white;
         height:43px;
         line-height:43px;
         margin:0;
         display: inline-block;
     }
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
</style>

<script>
import AMap from 'AMap';
import AMapUI from 'AMapUI';
export default {
      name: 'amap-page',

      data() {
        return {

          zoom: 16,
          center: [121.5273285, 31.21515044],
          markersDetail: [],
          markers: [],
          infoWindow: null,
          window: '',
          map: null,
          online:'隐藏离线设备',
          isCluster:'点聚合',
          cluster:null,
          markersOnline:[],
          runningStatus:'',
          left:24,
          right:0,
          weatherInfo:'',
          data:{
            city:'',
            weather:'',
            temperature:'',
            windDirection:'',
            windPower:'',
            humidity:'',
            reportTime:''
          },
          //设备基本实时信息
          timerForRealData:'',
          realSimple:'',
          mac_id:'',
          dev_type:'',
          //阶段框选 样式
          cornBorder1:'5px solid #efefef',
          cornBorder2:'5px solid  #efefef',
          cornBorder3:'5px solid  #efefef',
          cornBorder4:'5px solid  yellow',
          wheatBorder1:'5px solid yellow',
          wheatBorder2:'5px solid  #efefef',
          wheatBorder3:'5px solid  #efefef',
          wheatBorder4:'5px solid  #efefef',

        };
      },
  methods: {
      getState(){
            this.$api.device.getRunningStatus().then((res) =>{
                this.runningStatus = res.data
               /*  console.log(this.runningStatus.cultbroke ) */
            })
      },
    // 获取高德地图api
      mapReq () {
        let that = this

          that.map = new AMap.Map('container', {
            resizeEnable: true,
          /*   center: [that.markersDetail[0].lnt,that.markersDetail[0].lat],//地图标记title */
            zoom: this.zoom //地图视图缩放级别
          })

          this.markerReq();
          var Options = {
              position: {top:'10px',right:'10px'},
              showZoomBar: true,

          }

          that.map.plugin(["AMap.ControlBar"],function(){
              var controlBar = new AMap.ControlBar(Options)
              that.map.addControl(controlBar)
          });
/*           var satelliteLayer = new AMap.TileLayer.Satellite();
          that.map.add(satelliteLayer); */
          that.map.on('click',that.hideRight);
      },
      //初始化marker
      markerReq(){
        let that = this 
          AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
              var iconTheme = 'default';	 
              var iconStyles = SimpleMarker.getBuiltInIconStyles(iconTheme);
              for(let i=0;i<that.markersDetail.length;i++){
                if(that.markersDetail[i].lon!=null){
                    var marker = null;
                    if(that.markersDetail[i].state == 1){
                      marker = new SimpleMarker({
                                iconTheme: iconTheme,
                                //使用内置的iconStyle
                                iconStyle: iconStyles[2],	   
                                map: that.map,
                                offset: new AMap.Pixel(-10, -20),
                                position:[that.markersDetail[i].lon,that.markersDetail[i].lat],
                                });
                    }else if(that.markersDetail[i].state == 0){
                      marker = new SimpleMarker({
                                iconTheme: iconTheme,
                                //使用内置的iconStyle
                                iconStyle: iconStyles[10],	   
                                map: that.map,
                                offset: new AMap.Pixel(-10, -20),
                                position:[that.markersDetail[i].lon,that.markersDetail[i].lat],
                                });
                    }else{
                      marker = new SimpleMarker({
                                iconTheme: iconTheme,
                                //使用内置的iconStyle
                                iconStyle: iconStyles[17],	   
                                map: that.map,
                                offset: new AMap.Pixel(-10, -20),
                                position:[that.markersDetail[i].lon,that.markersDetail[i].lat],
                                });
                    }
                    //存储内容
                    var pp = that.markersDetail[i].mac_id
                    var extData = [that.markersDetail[i].mac_id]
                    marker.extData = extData;
                  // marker.content='<h3><b>设备号:</b>'+that.markersDetail[i].mac_id+'</h3><button onclick="alert(\''+pp+'\')">详情</button>'
                    marker.content='<h3><b>设备号:</b>'+that.markersDetail[i].mac_id+'</h3><button onclick="location=\'./#/monitor?mac_id='+pp+'\'">详情</button>'
                    that.markers.push(marker)
                    AMap.event.addListener(marker, 'click', that.markerClick); 
                }
              }

              that.map.setFitView();

              //function 拿不到this 可以直接把方法传给变量再传进去，也可以 let that = this  更好！
              var getWeather = that.getWeather
              that.map.getCity(function(info){
    /*             console.log(info) */
                getWeather(info.province)
              })
              var infoWindow=new AMap.InfoWindow({offset: new AMap.Pixel(0, -30),closeWhenClickMap: true});
              infoWindow.setContent(marker.content);
              that.infoWindow = infoWindow
          })
      },
        //地图初始化
        getMarkersDetail(){
            this.$api.device.getMarkers().then((res) =>{
                this.markersDetail = res.data
                console.log(this.markersDetail)
                //调用初始化marker方法
                this.mapReq()
            })
        },
        getWeather1(){
            this.$api.device.getWeather().then((res)=>{
/*               console.log(res.results)
              console.log(res.results[0].now) */
            })
        },
        getWeather(place){
          let that = this
            AMap.plugin('AMap.Weather', function() {
                var weather = new AMap.Weather();
                //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
                weather.getLive(place, function(err, data) {
                    if (!err) {
                        that.data = data;
                    /*     console.log(that.data) */
                    }
                });
            });
        },
        //地图更新
        updateMap(){
            let that = this
            this.$api.device.getMarkers().then((res) =>{
            this.markersDetail = res.data;
            var now = new Date().getTime()
            this.markersOnline= []
            AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
              var iconTheme = 'default';	 
              var iconStyles = SimpleMarker.getBuiltInIconStyles(iconTheme);
              if(that.online=="隐藏离线设备"){
                    //目前是显示离线设备
                    if(that.infoWindow.getIsOpen()){
                        for(var i=0; i<that.markersDetail.length;i++){
                            //marker位置
                            that.markers[i].setPosition([that.markersDetail[i].lnt, that.markersDetail[i].lat])
                            //样式变化
                            if(that.markersDetail[i].state == 1){
                              that.markers[i].setIconStyle(iconStyles[2])
                              that.markersOnline.push(that.markers[i])
                            }else if(that.markersDetail[i].state == 0){
                              that.markers[i].setIconStyle(iconStyles[10])
                            }else{
                              that.markers[i].setIconStyle(iconStyles[17])
                            }
                            //窗体位置
                            if(that.infoWindow.getContent() == that.markers[i].content) {
                              that.infoWindow.setPosition([that.markersDetail[i].lnt, that.markersDetail[i].lat])
                            }
                            that.markers[i].show();
                        }
                    }
                    else{
                        for(var i=0; i<that.markersDetail.length;i++){
                            //marker位置
                            that.markers[i].setPosition([that.markersDetail[i].lnt, that.markersDetail[i].lat])
                            //样式变化
                            if(that.markersDetail[i].state == 1){
                              that.markers[i].setIconStyle(iconStyles[2])
                              that.markersOnline.push(that.markers[i])
                            }else if(that.markersDetail[i].state == 0){
                              that.markers[i].setIconStyle(iconStyles[10])
                            }else{
                              that.markers[i].setIconStyle(iconStyles[17])
                              that.markersOnline.push(that.markers[i])
                            }
                            that.markers[i].show();
                        }
                    }
              }else{
                    //目前是隐藏离线设备
                    if(that.infoWindow.getIsOpen()){
                        for(var i=0; i<that.markersDetail.length;i++){
                            //marker位置
                            that.markers[i].setPosition([that.markersDetail[i].lnt, that.markersDetail[i].lat])
                            //样式变化
                            if(that.markersDetail[i].state == 1){
                              that.markers[i].setIconStyle(iconStyles[2])
                              //在线设备要全部显示
                              //窗体位置
                              if(that.infoWindow.getContent() == that.markers[i].content) {
                                that.infoWindow.setPosition([that.markersDetail[i].lnt, that.markersDetail[i].lat])
                              }
                              that.markers[i].show();
                              that.markersOnline.push(that.markers[i])
                            }else if(that.markersDetail[i].state == 0){
                              that.markers[i].setIconStyle(iconStyles[10])
                              //离线设备要隐藏
                              that.markers[i].hide();
                              //窗体位置
                              if(that.infoWindow.getContent() == that.markers[i].content) {
                                that.infoWindow.close();
                              }
                            } else{
                               that.markers[i].setIconStyle(iconStyles[17])
                               that.markers[i].show();
                               that.markersOnline.push(that.markers[i])
                            }
                        }
                    }else{
                        for(var i=0; i<that.markersDetail.length;i++){
                            //marker位置
                            that.markers[i].setPosition([that.markersDetail[i].lnt, that.markersDetail[i].lat])
                            //样式变化
                            if(that.markersDetail[i].state == 1){
                              that.markers[i].setIconStyle(iconStyles[2])
                              that.markers[i].show();
                              that.markersOnline.push(that.markers[i])
                            }else if(that.markersDetail[i].state == 0){
                              that.markers[i].setIconStyle(iconStyles[10])
                              that.markers[i].hide();
                            } else{
                               that.markers[i].setIconStyle(iconStyles[17])
                               that.markers[i].show();
                               that.markersOnline.push(that.markers[i])
                            }
                        }
                    }

              }
            })
            })
        },
        markerClick(e) {
          clearInterval(this.timerForRealData)
          this.timerForRealData = null;
          this.mac_id = e.target.extData[0];
          /* this.dev_type = e.target.extData[1]; */
          this.timerForRealData = setInterval(this.getRealSimple,1200,this.mac_id)
          this.showRight();
          this.infoWindow.setContent(e.target.content);
          this.infoWindow.open(this.map, e.target.getPosition());

        },
        //是否隐藏离线设备
        hide(){
         if(this.online == "隐藏离线设备"){
           this.online = "显示离线设备"
         }else{
           this.online = "隐藏离线设备"
         }
         //切换的时候主动更新
         this.updateCluster()
        },
        //改变的是标志
        addCluster(){
          let that = this
          that.map.plugin(["AMap.MarkerClusterer"],function(){
          //原来是无聚合，转为点聚合
          if(that.isCluster == "点聚合"){
            that.isCluster = "无聚合"
            if(that.cluster) {     
                that.cluster.setMap(null);  
            }
            //说明目前为显示离线设备   
            if(that.online == "隐藏离线设备"){
              that.cluster = new AMap.MarkerClusterer(that.map,that.markers); 
            }else{
            //隐藏离线设备
              that.cluster = new AMap.MarkerClusterer(that.map,that.markersOnline); 
            }
          }else{
          //原来是点聚合，转为无聚合
            that.isCluster = "点聚合"
            if(that.cluster) {     
                that.cluster.setMap(null);  
            }
            for(let i=0;i<that.markers.length;i++){
              that.markers[i].setMap(that.map)
            }
          }
          })
        },
        //定期更新状态
        updateCluster(){
          let that = this
          that.map.plugin(["AMap.MarkerClusterer"],function(){
          //点聚合
          if(that.isCluster == "无聚合"){
            if(that.cluster) {     
              that.cluster.setMap(null);  
            }
            //说明目前为显示离线设备   
            if(that.online == "隐藏离线设备"){
              that.cluster = new AMap.MarkerClusterer(that.map,that.markers); 
            }else{
            //隐藏离线设备
              that.cluster = new AMap.MarkerClusterer(that.map,that.markersOnline); 
            }
          }/* else{
          //无聚合 似乎这个else里面的操作是多余的
            if(that.cluster) {     
                that.cluster.setMap(null);  
            }
            for(let i=0;i<that.markers.length;i++){
              that.markers[i].setMap(that.map)
            }
          } */
          })
        },
        click(e){
          console.log(e)
        },
        hideRight(){
          clearInterval(this.timerForRealData)
          this.left = 24;
          this.right = 0;
        },
        showRight(){
          this.left = 18;
          this.right = 6
        },
        getRealSimple(mac_id){
          this.$api.device.getRealDataValue(mac_id).then((res)=>{
            let data = res.data;
            this.realSimple = data;
            console.log("realSimple")
            console.log(data)
          })
        }

        //获取参数值
 
  },
  mounted(){

      //this.getState();
      //初始化页面
      this.getMarkersDetail(); 
/*       //更新地图，点位置
       setInterval(this.updateMap,1000)  
      //点聚合更新
      setInterval(this.updateCluster,60*1000)  */

  },
}
</script>