// pages/getData/getData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  getData: function () {
    var that = this;
    wx.request({
      url: 'http://43.241.220.166/tutor/api/tutor/getTutorInfo',
      data: {
        tutorId: 107,

      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log("post发出之后请求回来的数据：",res.data)
        that.setData({
          id: res.data.id,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log("getData中this内容：", this)
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      // data: {
      //   date: '',
      //   stories: [],
      // },
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log("请求回来的数据", res.data)
        that.setData({
          date: res.data.date,
          stories: res.data.stories,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})