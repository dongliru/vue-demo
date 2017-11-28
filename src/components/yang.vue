<template>
    <div class="ru " >
        <div class="head">
            <span class="col-md-3">日期</span>
            <span class="col-md-3">姓名</span>
            <span class="col-md-3">花销</span>
            <span class="col-md-3">价钱</span>
        </div>
        <div v-for="val in storageObj" class="row">
            <span class="col-md-3">{{time}}</span>
            <span class="col-md-3">{{val.name}}</span>
            <span class="col-md-3">{{val.spendname}}</span>
            <span class="col-md-3">{{val.price}}</span>
        </div>
    </div>
</template>
<script>
import App from '../App.vue'
export default   {
        name:'hello',
        data(){
            return {
                time:'',
                storageObj:[],
                dataObj:[{
                    time:'',
                    name:"",
                    spendname:'',
                    price:''
                }],
            }
        },
        mounted(){  // 加载生命周期
            //给storage初始化

            //  给dataObj初始化
             this.dataObj = JSON.parse(window.localStorage.getItem('data'));
             for(var i=0;i<this.dataObj.length;i++){
                 if(this.dataObj[i].name.indexOf('洋')!=-1){
                    this.storageObj.push(this.dataObj[i]);
                 }
             }
            this.get();
        },
        methods:{
            get:function(){
                var _this = this;
                Event.$on('date',function(time){
                    _this.time =time;  
                })
                Event.$on('name',function(name,spendname,price){
                    var obj = {};
                    obj.name=name;
                    obj.spendname = spendname;
                    obj.price = price;
                     _this.dataObj.push(obj);
                    if(name.indexOf('洋')!=-1){
                      
                         _this.storageObj.push(obj)
                    }
                     window.localStorage.setItem('data',JSON.stringify(_this.dataObj));
                  
            
                  
                })
            },
            getLocalStorage:function(){
                
            }
        }
}
</script>
<style>
    .ru {
        color:#42b983;
    }
</style>
