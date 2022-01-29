import { gethot } from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start:1,//开始页数
    num:5,//单个页面个数
    hotArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gethotArr()
  },

  gethotArr(){
    let data = {
      start:this.data.start,
      num:this.data.num
    }
    gethot(data).then(res=>{
      this.setData({
        hotArr:this.data.hotArr.concat(res.data.itemList)
      })
      wx.stopPullDownRefresh();
    })
  },
  //预览
  previewImage(e){
    wx.previewImage({
      urls: [
        e.target.dataset.header
      ]
    })    
  },

  goDetail(e){
    let playUrl = e.target.dataset.detail
    wx.setStorage({
      key:"playUrl",
      data:playUrl
    })
    wx.navigateTo({
      url: '../videoDetail/videoDetail'
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
    this.setData({
      start:1,
      hotArr:[]
    })
    this.gethotArr()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      start:this.data.start + 5
    })
    this.gethotArr()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})