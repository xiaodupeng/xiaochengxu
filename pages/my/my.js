// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserProfile()
  },
  getUserProfile(){
    var that = this;
    // 调用微信的接口获取当前用户的信息（传递的参数是字典）
    wx.getUserProfile({
      desc: '展示用户信息',
      // 调用成功后触发（回调函数）
      success: function(res) {
        console.log("成功：", res.userInfo);
        // 修改页面和后台数据
        that.setData({userInfo: res.userInfo});
      },
      // 调用失败后触发
      fall: function (res) {
        console.log("失败:", res);
      }
    });
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