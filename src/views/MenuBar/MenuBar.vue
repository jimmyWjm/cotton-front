<template>
	<div class="menu-bar-container">
    <!-- logo -->
    <div class="logo" :style="{'background-color':themeColor}" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'">
         <img src="@/assets/logo.png" :width="collapse?'40px':'100px'"/> <!-- <div>{{collapse?'':appName}}</div> -->
    </div>
    <!-- 导航菜单 -->
<!--     <el-menu default-active="1" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'"
      :collapse="collapse" @open="handleopen" @close="handleclose" @select="handleselect"> -->
      <!-- 导航菜单树组件，动态加载菜单 -->
<!--       <menu-tree v-for="item in navTree" :key="item.id" :menu="item"></menu-tree>
    </el-menu> -->
        <el-menu  :class="collapse?'menu-bar-collapse-width':'menu-bar-width'"
      :collapse="collapse" @open="handleopen" @close="handleclose" @select="handleselect"> 			
          <el-menu-item index="1" @click="$router.push('home')" >
            <i class="fa fa-tv iconn fa-fw"></i>
            <template slot="title">
              <span slot="title" style="font-size:15px">&nbsp;首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push('monitor')">
            <i class="fa fa-gears iconn fa-fw" ></i>
            <template slot="title">
              <span slot="title" style="font-size:15px">&nbsp;设备监控</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3" @click="$router.push('history')">
              <i class="fa fa-history iconn fa-fw" ></i>
            <template slot="title" >
              <span slot="title" style="font-size:15px">&nbsp;历史记录</span>
            </template>
          </el-menu-item>
          <el-menu-item index="4" @click="$router.push('userInfo')">
              <i class="fa fa-user iconn fa-fw" ></i>
            <template slot="title" >
              <span slot="title" style="font-size:15px">&nbsp;个人管理</span>
            </template>
          </el-menu-item>

    </el-menu>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import MenuTree from "@/components/MenuTree"
export default {
  components:{
        MenuTree
  },
  methods: {
    handleopen() {
      console.log('handleopen')
    },
    handleclose() {
      console.log('handleclose')
    },
    handleselect(a, b) {
      console.log('handleselect')
    }
  },
  computed: {
    ...mapState({
      appName: state=>state.app.appName,
      themeColor: state=>state.app.themeColor,
      collapse: state=>state.app.collapse,
      navTree: state=>state.menu.navTree
    })
  }
}
</script>

<style scoped lang="scss">
.menu-bar-container {
  .el-menu {
   
    position:absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
  }
  .logo {
    position:absolute;
    top: 0px;
    height: 60px;   
    line-height: 60px;
    background: #545c64;
    img {
        /* width: 100px; */
        height: 50px;
        border-radius: 0px;
        margin: 0px 10px 10px 10px;
        /* float: left; */
    }
    div {
      font-size: 22px;
      color: white;
      text-align: left;
    }
  }
  .menu-bar-width {
    width: 200px;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
}
.iconn{
  font-size:1.5em
}

</style>