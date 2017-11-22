<template>
    <div class="ru " >
        <div class="head">
            <span class="col-md-3">日期</span>
            <span class="col-md-3">姓名</span>
            <span class="col-md-3">花销</span>
            <span class="col-md-3">价钱</span>
        </div>
        <div v-for="val in dataObj" class="row">
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
                dataObj:[{
                    time:'',
                    name:"",
                    spendname:'',
                    price:''
                }],
            }
        },
        created(){
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
                    if(name.indexOf('茹')!=-1){
                       _this.dataObj.push(obj)
                    }
                })
            }
        }
}
</script>
<style>
    .ru {
        color:#42b983;
    }
</style>
