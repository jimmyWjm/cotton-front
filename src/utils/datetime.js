/**
 * 时间日期相关操作
 */


/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * @param datetime 国际化日期格式
 */
export function format (datetime, param) {
  if(param=='D')
  return format2DWithSeperator(datetime, "-");
  else if(param=="T")
  return format2TWithSeperator(datetime, "-", ":");
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018-09-23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */
export function format2TWithSeperator (datetime, dateSeprator, timeSeprator) {
  if (datetime != null) {
    const dateMat = new Date(datetime);
    const year = dateMat.getFullYear();
    const month = dateMat.getMonth() + 1;
    const day = dateMat.getDate();
    const hh = dateMat.getHours();
    const mm = dateMat.getMinutes();
    const ss = dateMat.getSeconds();
    const timeFormat = year + dateSeprator + month + dateSeprator + day + " " + hh + timeSeprator + mm + timeSeprator + ss;
    return timeFormat;
  }
}



/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018-09-23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */
export function format2DWithSeperator (datetime, dateSeprator) {
  if (datetime != null) {
    const dateMat = new Date(datetime);
    const year = dateMat.getFullYear();
    const month = dateMat.getMonth() + 1;
    const day = dateMat.getDate();
    const timeFormat = year + dateSeprator + month + dateSeprator + day;
    return timeFormat;
  }
}