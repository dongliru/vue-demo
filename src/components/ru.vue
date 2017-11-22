<template>
    <div class="haha">
       姓名： {{msg}}
       日期： {{time}}
    </div>
</template>
<script>
import App from '../App.vue'
export default   {
        name:'hello',
        data(){
            return {
                msg:"小茹茹的本本",
                time:' '
            }
        },
        mounted(){
            this.get();
        },
        methods:{
            get:function(){
                Event.$on('date',function(ha){
                    this.time =ha;
                        console.log(this.time);
                })
            }
        }
}
</script>