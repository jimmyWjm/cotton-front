<template>
    <section>
        <el-col :span="20" :offset="2" >
            <el-col :span="12" class="toolbar" style="margin-top:20px;margin-left:-35px">
                    <el-form :inline="true" >
                        <el-form-item>
                            <el-input  placeholder="设备编号" v-model="mac_id" size="medium"></el-input>
                        </el-form-item>
                        <el-select clearable  placeholder="在线状态" v-model="onlineType" size="medium">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-form-item>
                            <el-button type="primary"  size="small" @click="handleSearch">查询</el-button>
                        </el-form-item>
                    </el-form>
            </el-col>
            <!-- 表格 -->
            <el-table
                    :data="tableData" @selection-change="selectionChange"
                    align="left" border stripe style="width: 100%;margin-top:50px;height:600px">

                    <el-table-column
                    prop="mac_id"
                    label="设备编号">
                    </el-table-column>

                    <el-table-column
                    prop="online"
                    label="是否在线"
                    width="80"
                            empty-text="暂无"
                            >
                    </el-table-column>

                    <el-table-column
                    prop="lastLoginTime"
                    label="最后上线时间"
                    width="160"
                    empty-text="暂无"
                    >
                    </el-table-column>

                    <el-table-column
                    prop="lastPlace"
                    label="最后位置"
                    empty-text="暂无"
                    >
                    </el-table-column>

                    <el-table-column
                    prop="workArea"
                    label="累计工作面积(亩)"
                            empty-text="暂无"
                            >
                    </el-table-column>
                    
                    <el-table-column
                    prop="workTime"
                    label="累计工作时间(h)"
                    empty-text="暂无"
                    >
                    </el-table-column>

                    

                    <el-table-column label="操作" width="180"   header-align="center" align="center">
                        <template slot-scope="scope">
                            <el-button size="small" type="primary" @click="detail(scope.$index, scope.row)">详细</el-button> 
                        </template>
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
    </el-col>
    </section>
</template>

<script>
import { format } from "@/utils/datetime"
import Cookies from "js-cookie";
 export default {
      data() {
        return {
                //后端传来的表格数据
                tableData: [],
                //总条目数和当前页数
                total: 0,
                page: 1,
                mac_id:'',
                onlineType:'',
                options: [{
                        value: '1',
                        label: '在线'
                    }, {
                        value: '0',
                        label: '离线'
                    }],
                filters: {
                            name: ''
                        },
				//当前页码和每页显示条目数
				currentPage: 1,
				pageSize: 8,
				listLoading: false,
				sels: [],//列表选中列
          }
      },
      methods:{
                //初始化界面
                initial: function(){
                    let Info = {
                        mac_id:this.mac_id,
                        onlineType:this.onlineType,
                        limit: this.pageSize, 
                        offset:(this.currentPage-1)*this.pageSize}

                    this.$api.device.getDeviceList(Info).then((res) => {
                                console.log(res);
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
                // 选择切换
                selectionChange: function (selections) {
                    this.selections = selections
                },
                //搜索
                handleSearch(){
                    this.currentPage = 1;
                    this.initial();
                },
                selsChange: function (sels) {
                    this.sels = sels;
                },
                //查看设备详细信息
                detail: function (index, row) {
                    console.log("index:"+index)
                    console.log("row:"+row.mac_id)
                    this.$router.push({
                                name: '设备监控',   
                                query: {   
                                    mac_id: row.mac_id,   
                                } 
                            })  
                },
			},
			mounted(){
				this.initial()
			}
    }
</script>

