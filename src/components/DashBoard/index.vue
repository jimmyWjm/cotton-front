<template>
    <div>
          <center style="font-size:20px;font-family:'中易宋体';font-weight: bold;">{{ heading}}</center>
          <canvas height="110" width="200px" :id="ID" style="margin-left:-15px"></canvas>
          <center style="margin-top:-20px;font-size:20px;font-weight:bold;font-family:'黑体'">{{value}} r/min</center>
    </div>
</template>
<script>
  import {Gauge} from '../../utils/gauge.js'
  
  export default {
    data(){
      return{
        value:this.valueR,
        ID:this.seq,
        gauge:""
      } 
    },
    props:['heading','valueR','seq'],
    watch:{
      valueR(val){
        this.value = val
        this.gauge.set(val)
        console.log(val)
      },
      value(val){
        this.$emit('update:valueR',val)
      }
    },methods:{
        initGuage(){
          var opts = {
            angle: -0.08, // The span of the gauge arc
            lineWidth: 0.6, // The line thickness
            radiusScale: 1, // Relative radius
            pointer: {
              length: 0.57, // // Relative to gauge radius
              strokeWidth: 0.079, // The thickness
              color: '#000000' // Fill color
            },
            limitMax: false,     // If false, max value increases automatically if value > maxValue
            limitMin: false,     // If true, the min value of the gauge will be fixed
            colorStart: '#6FADCF',   // Colors
            colorStop: '#8FC0DA',    // just experiment with them
            strokeColor: '#E0E0E0',  // to see which ones work best for you
            generateGradient: true,
            highDpiSupport: true,     // High resolution support
            // renderTicks is Optional
            renderTicks: {
              divisions: 2,
              divWidth: 1.1,
              divLength: 0.7,
              divColor: '#333333',
              subDivisions: 3,
              subLength: 0.5,
              subWidth: 0.6,
              subColor: '#666666'
            },
            fontSize:40
            
          };
          var target = document.getElementById(this.ID); // your canvas element
          this.gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
          this.gauge.maxValue = 5500; // set max gauge value
          this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
          this.gauge.animationSpeed = 45; // set animation speed (32 is default value)
          
          this.gauge.set(this.value); // set actual value
      }
    },
    mounted(){
      this.initGuage();
    }
  }
</script>