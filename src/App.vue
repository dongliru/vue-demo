<template>
  <div id="app">
    <div>当前日期：{{this.date}}</div>
    输入名称：<input type="text" placeholder="username">
    输入价钱：<input type="text" placeholder="price">
    <button class="btn btn-primary">点击提交</button>
    <div>
      <ul class="nav nav-pills">
        <li role="presentation" :class="{'active':this.item==1}" @click="toggle(1)"><router-link to="/ru">小茹茹</router-link></li>
        <li role="presentation" @click="toggle(2)" :class="{'active':this.item==2}"> <router-link to="/yang" >小洋洋</router-link></li>
        <li role="presentation" :class="{'active':this.item==3}" @click="toggle(3)"><router-link to="/total">一起哦</router-link></li>
      </ul>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
          item:'1 ',
          date:''
    }
  },
   mounted() {
        this.today()
    },
  methods:{
    toggle:function(num){
      this.item=num
    },
    today:function(){
      var myDate = new Date();    
      this.date = myDate.toLocaleDateString();
      Event.$emit('date',this.date);
    }
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
input {
  border-radius:4px;
  outline:none;
}
</style>
