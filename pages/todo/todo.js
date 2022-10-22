Page({
    data: {
      input:"",
      todos:[
        {name:"Learning Computer graphics",completed:true},
        {name:"Learning AI",completed:false},
        {name:"Learning Writing",completed:false}
      ],
      leftcount:2,
      allcompleted:false
    },
    inputtodocontent:function(e){
      this.setData({
        input:e.detail.value
      })
    },
  
    todocontent:function(){
      if(!this.data.input) return
  
      var todos=this.data.todos
      todos.push({
        name:this.data.input,
        completed:false
      })
  
      this.setData({
        todos:todos,
        input:'',
        leftcount:this.data.leftcount+1
      })
    },
  
    toggleit:function(e){
      var item=this.data.todos[e.currentTarget.dataset.index]
      item.completed=!item.completed
      var leftcount = this.data.leftcount+ (item.completed ?-1:1)
      this.setData({
       todos:this.data.todos,
       leftcount:leftcount
      })
    },
  
    removeit:function(e){
      var todos=this.data.todos
      var item=todos.splice(e.currentTarget.dataset.index,1)[0]
      var leftcount = this.data.leftcount+ (item.completed? 0:-1)
      this.setData({
       todos:todos,
       leftcount:leftcount
      })
    },
  
    toggleitall:function(){
      this.data.allcompleted=!this.data.allcompleted
      var todos=this.data.todos
      var that=this
      
      todos.forEach(function(item){
        item.completed=that.data.allcompleted
      })
      var leftcount = this.data.allcompleted?0:this.data.todos.length
      this.setData({
        todos:todos,
        leftcount:leftcount
      })
    },
    clearit:function(){
      var todos=this.data.todos.filter(function(item){
        return !item.completed
      })
  
      this.setData({
        todos:todos
      })
    }
  })