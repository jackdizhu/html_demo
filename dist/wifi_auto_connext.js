const wifi = require('node-wifi')
const exec = require('child_process').exec

// windows
// netsh wlan export profile key=clear（clear表示以明文方式显示密码）
// netsh wlan connect name="wifiName"
const ssid = 'wifiName'
wifi
.init({
  iface: null // network interface, choose a random wifi interface if set to null
})
let time = null
let loading = false

const connect = function () {
  switch (process.platform) {
    case "win32":
      time && clearInterval(time) && (time = null)
      exec(`netsh wlan connect name="${ssid}"`, function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log('--connected--')
        }
        setTimeout(function () {
          init()
        }, 1000)
      })
      break
    case "darwin":
    case "linux":
      time && clearInterval(time) && (time = null)
      wifi.connect({
        ssid: ssid
      }, function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log('--connected--')
        }
        setTimeout(function () {
          init()
        }, 1000)
      })
      // wifi.scan()
      // .then(function (networks) {
      //   for (let i = 0; i < networks.length; i++) {
      //     const item = networks[i]
      //     if (item.ssid === ssid) {
      //       clearInterval(time)
      //       wifi.connect({
      //         ssid: ssid
      //       }, function (err) {
      //         if (err) {
      //           console.log(err)
      //         } else {
      //           console.log('--connected--')
      //         }
      //         setTimeout(function () {
      //           init()
      //         }, 2000)
      //       })
      //     }
      //   }
      // })
      break
    default:
      break
  }
  loading = false
}

const init = function () {
  time && clearInterval(time) && (time = null)
  time = setInterval(function () {
    if (loading) {
      return false
    }
    loading = true
    console.log(new Date().getSeconds())
    wifi.getCurrentConnections(function (err, currentConnections) {
      if (err) {
        console.log(err)
      } else {
        let len = currentConnections.length
        let ssid = len === 1 ? currentConnections[0].ssid : '' // mac
        // console.log(!loading, len)
        // console.log(currentConnections, len)
        if ((!len || !ssid)) {
          console.log('-----not connect-----')
          loading = true
          setTimeout(function () {
            connect()
          }, 10)
        } else {
          loading = false
        }
      }
    })
  }, 1000)
}
init()
