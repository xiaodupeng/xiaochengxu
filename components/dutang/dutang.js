import { dutang } from '../../utils/api'

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    // innerText: {
    //   type: String,
    //   value: '',
    // }
  },
  data: {
    // 这里是一些组件内部数据
    innerText: ""
  },
  methods: {
    getData(){
      dutang().then(res=>{
        if(res.statusCode==200){
          this.setData({
            innerText:res.data
           })          
        }
      })
    },
  }
})