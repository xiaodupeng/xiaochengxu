// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    currentTab:1,
    list:[
      {id:1,name:"毒鸡汤"},
      {id:2,name:"历史上的今天"},
      {id:3,name:"二维码生成"},
      {id:4,name:"热门视频"},
    ]
  },
  swichNav(e){
    var cur = e.target.dataset.current;
    if(this.data.currentTab==cur){
      return
    }else{
      if(cur==1){
        //触发子组件方法
        this.selectComponent('.dutangTag').getData()
      }else if(cur == 2){
        this.selectComponent('.todayTag').getData()
      }else if(cur == 4){
        wx.navigateTo({
          url:"../hotVideo/hotVideo"
        })
      }
     this.setData({
      currentTab:cur
     })
    }
  },
  onLoad() {
    this.selectComponent('.dutangTag').getData()
  },
})
