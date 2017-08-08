//app.js
App({
  //当程序初始化的时候执行onLaunch里面的内容
  onLaunch: function (option) {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    console.log(option.path+"   log")
    // console.log(option.path)
    // console.log(logs)
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function (option) {
    console.log("onShow中的各个参数",option)

  },
  //全局的方法
  getUserInfo:function(cb){
    var that = this
    console.log("全局方法中的this,this,this",this)
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //全局的属性
  globalData:{
    userInfo:null,
  }
})