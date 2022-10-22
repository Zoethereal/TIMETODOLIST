// pages/tz/tz.js
Page({
    data: {
        top: "../../img/1.jpg",
        total: '',
        btn: '.btnStart',
        texts:'Shake it!',
        flag: true,
        img:[
          "../../img/1.jpg",
          "../../img/2.jpg",
          "../../img/3.jpg",
          "../../img/4.jpg",
          "../../img/5.jpg",
          "../../img/6.jpg"
        ],
        inputt:""
      },
    
     click:function(){
       var self=this;
       if(this.data.flag){
         self.timer=setInterval(function(){
           var one = Math.floor(Math.random() * 6);
            self.setData({          
              top: self.data.img[one],
              total:one+1,
            })
         },50)
         self.setData({
           btn: ".btnEnd",
           texts: 'STOP',
           flag:false,
         })
         } 
       else {
         clearInterval(self.timer);
         self.setData({
           btn: ".btnStart",
           texts: 'SHAKE',
           flag: true,
    
         })
    
       }
       
     }
})