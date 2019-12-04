<template>
    <div>
        <div>
            <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">{{title}}</div>
        </div> 
        <div>
        <img v-show="value==0" src="../../../assets/bOn.png"  width="40" height="40"/>
        <img v-show="value==1" src="../../../assets/bWarn.png"  width="40" height="40"/> 
        <!-- <input type="text"  :value="value" readonly="true" class="textInput" > -->
        </div> 
    </div>
</template>
<style scoped>
        div.text-left
     {
        font-size:17px;
        font-family:"黑体";
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        display:inline-block
     }
</style>


<script>
export default {
    name:'dataShow',
    created(){

    },
    props:{
        value:{
            type:Number,
            require:true
        },
        title: String,
    }
}
</script>