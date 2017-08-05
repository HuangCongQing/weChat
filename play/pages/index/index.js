//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello 黄重庆,这是传的参',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    // console.log(this);
    // console.log(this.data.motto);
    //页面跳转
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //当页面加载好之后执行的
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log("userInfo")
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // 设置分享
  onShareAppMessage: function () {
    var sharetitle,
      tid = this.data.tid,
      m = this.data.m,
      flag = this.data.lastflag,
      title = this.data.sharetitle;
    return {
      title: flag == true ? title : '默认title',
      desc: '分享描述，一句话。',
      path: '/page/component/index?tid=' + tid + '&m=' + m
    }
  }
})
