/* 
 * 接口统一集成模块
 */
import * as login from './moudules/login'
import * as user from './moudules/user'
import * as menu from './moudules/menu'
import * as product from './moudules/product'
import * as device from './moudules/device'

// 默认全部导出
export default {
    login,
    user,
    menu,
    product,
    device
}