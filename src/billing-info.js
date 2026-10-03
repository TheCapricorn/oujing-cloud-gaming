// Replace unconfirmed entries only after the operator provides actual billing rules.
export const billingRules = [
  { title: '何时开始计费', text: '起计时点待确认。', detail: '需明确从云主机启动、连接成功还是进入游戏时起计。', confirmed: false },
  { title: '按什么单位扣费', text: '扣费单位与取整方式待确认。', detail: '需明确按秒或按分钟结算，以及不足一个单位的处理方式。', confirmed: false },
  { title: '关机停止计费', text: '云主机关机后停止计费。', detail: '停费生效时点、断线或关闭客户端的处理方式待确认。', confirmed: true },
  { title: '余额不足怎么办', text: '余额不足处理规则待确认。', detail: '需明确提醒时机、是否自动关机，以及存档与续费处理。', confirmed: false },
]
