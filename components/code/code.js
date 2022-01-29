import { getCode } from '../../utils/api'
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

Component({
  properties: {
  },
  data: {
    text:"",
    size:100,
    imgUrl:"",
    show: false,
  },
  methods: {
    hadelInput(e){
      var obj = {}
      obj[e.target.dataset.input] = e.detail.value
      this.setData(obj)
    },
    shengchen(){
      if(!this.data.text){
        Notify({ type: 'warning', message: '请填写必填项' });
        return
      }
      this.getData(
        {text:this.data.text,size:this.data.size}
      )
    },
    getData(data){
      getCode(data).then(res=>{
        const base64String = wx.arrayBufferToBase64(new Uint8Array(res.data)) 
        this.setData({
          imgUrl:'data:image/jpeg;base64,'+ base64String,
          show: true
        }) 
      })
    },
    //保存base64图片到本地
    saveimg(){
      var _this=this
      //获取文件管理器对象
      const fs = wx.getFileSystemManager()
      //文件保存路径
      const Imgpath = wx.env.USER_DATA_PATH + '/qrcodeImg' + '.png'
      //_this.data.imgUrl   base64图片文件
      let imageSrc = _this.data.imgUrl.replace(/^data:image\/\w+;base64,/, '')
      //写入本地文件
      fs.writeFile({
        filePath: Imgpath,
        data: imageSrc,
        encoding: 'base64',
        success (res) {
          //保存到手机相册
          wx.saveImageToPhotosAlbum({
            filePath: Imgpath,
            success(res) {
              console.log(res)
              wx.showToast({
                title: '保存成功',
                icon: 'success'
              })
            },
            fail:function(err){
              console.log("失败了")
              console.log(err)
            }
          })
        }
      })
    },    
    onClickHide() {
      this.setData({ show: false });
    },    
  }
})