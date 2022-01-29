import { today } from '../../utils/api'

Component({
  properties: {
  },
  data: {
    // 这里是一些组件内部数据
    today:"",
    listArr: []
  },
  methods: { 
    getData(){
      today().then(res=>{
        this.setData({
          today:res.data.day,
          listArr:res.data.result
        })          
      })
    },
  }
})