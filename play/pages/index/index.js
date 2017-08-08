//index.js
//获取应用实例
var app = getApp()
console.log("getapp里的内容", app)
Page({
  data: {
    motto: 'Hello 黄重庆,这是传的参',
    userInfo: {},
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ]
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
    console.log("index页面onLoad中this里的内容", this)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log("userInfo里内容", userInfo)
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
  },
  getData: function () {
    var that = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      data: {
        id: 1,
        username: "toBeMN",
        age: 38
      },
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res)
        that.setData({
          id: res.data.id,
          username: res.data.username,
          age: res.data.age
        })
      }
    })
  },
})
