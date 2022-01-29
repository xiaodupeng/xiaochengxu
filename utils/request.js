export const request = (parmas)=>{
  return new Promise((reslove,reject)=>{
    wx.request({
      ...parmas,
      success(res){
        reslove(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}