
import VConsole from 'vconsole'
let vConsole = window.vConsole = new VConsole({
  onReady: function () {
    vConsole.hideSwitch()
  }
})
let devLog = {
  install: function (Vue, options) {
    Vue.mixin({
      mounted() {
        ; ((window) => {
          if (window.isAddEventListenerVConsole) {
            return false
          }
          window.isAddEventListenerVConsole = true
          // 手势识别 ↗↙
          let body = document.body
          let height = body.clientHeight
          let width = body.clientWidth
          let touches = [] // 触摸的3个点位置
          let touchArr = [null, null, null] // 触摸的3个点
          let num = 30 // 偏移量
          let touchTouchArr0 = function (pageX, pageY) {
            // 重新初始化
            touches = []
            touchArr = [null, null, null]
            // 第1个点
            if (pageX < num && (height - pageY) < num) {
              touches.push({ pageX, pageY })
              touchArr[0] = true
            } else {
              touchArr[0] = null
            }
          }
          let touchTouchArr1 = function (pageX, pageY) {
            // 第2个点
            if (touchArr[0] && !touchArr[1]) {
              if (pageY < num && (width - pageX) < num) {
                touchArr[1] = true
                touches.push({ pageX, pageY })
              } else {
                touchArr[1] = null
              }
            }
            // 第3个点
            if (touchArr[0] && touchArr[1] && !touchArr[2]) {
              if (pageX < num && (height - pageY) < num) {
                touchArr[2] = true
                touches.push({ pageX, pageY })
              } else {
                touchArr[2] = null
              }
            }
          }

          body.addEventListener('touchstart', e => {
            let touch = e.targetTouches[0]
            // touches.push({ pageX: touch.pageX, pageY: touch.pageY })
            touchTouchArr0(touch.pageX, touch.pageY)
          })
          body.addEventListener('touchmove', e => {
            let touch = e.targetTouches[0]
            // touches.push({ pageX: touch.pageX, pageY: touch.pageY})
            touchTouchArr1(touch.pageX, touch.pageY)
          })
          body.addEventListener('touchend', e => {
            console.log({ width, height })
            console.log(touches)
            console.log(touchArr)
            if (touchArr[0] && touchArr[1] && touchArr[2]) {
              let el = document.querySelector('.vc-switch')
              if (el && el.style.display) {
                el.style.display === 'block' ? vConsole.hideSwitch() : vConsole.showSwitch()
              } else {
                vConsole.showSwitch()
              }
            }
          })
        })(window)
      }
    })
  }
}
export default devLog
