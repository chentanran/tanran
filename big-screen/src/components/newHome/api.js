import { get } from '@/common/request'

export default {
  // 通知公告
  workList:args=>get('/maintenance-api/info/sys-info/list',args),
  // 保养任务
  handleStatistics:args=>get('/maintenance-api/maintain/upkeep/report/home/handleStatistics',args),
  // 投诉建议
  handlerSqgdStatistics:args=>get('/maintenance-api/maintain/order/report/home/sqgd/handlerStatistics',args),
  // 每日新增统计
  dayIncreaseStatistic:args=>get('/inviteBusiness-api/customer-report/dayIncreaseStatistic',args),
  // 日、周、月增统计
  increaseStatistic:args=>get('/inviteBusiness-api/customer-report/increaseStatistic',args),
  // 工单分析
  handlerOrderStatistics:args=>get('/maintenance-api/maintain/order/report/home/handlerOrderStatistics',args),
  // 租赁分析
  leasedAndNotLeased:args=>get('/resource-api/lease/report/home/leasedAndNotLeased',args),
  // 通知公告
  sysInfoCustom:args=>get('/maintenance-api/info/sys-info-custom/list',args),
  // 成交情况
  customerStatistic:args=>get('/inviteBusiness-api/customer-report/customerStatistic',args),
  // 到期分布
  dayStatistic:args=>get('/agreement-api/contract-report/dayStatistic',args),
  // 代办中心
  taskTodoList:args=>get('/flow-api/flowable/task/todoList?pageNo=1&pageSize=100',args),
}
