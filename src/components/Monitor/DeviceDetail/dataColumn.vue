<template>
    <div>
        <div>
            <div class="text-left" style="font-size:16px;font-family:'中易宋体';font-weight: bold;">{{title}}</div>
        </div> 
        <div>
            <input type="text"  :value="value" readonly="true" class="textInput" >
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
</style>

<script>
export default {
    name:'dataColumn',
    props:['value','title'],
}
</script>