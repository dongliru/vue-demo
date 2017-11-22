<template>
  <div id="app">
    <div class="row">
      <span>Departure Date：</span>
      <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
    </div>
    <div>当前日期：{{date}}</div>
    输入名称：<input type="text" placeholder="username" v-model='name' >
    输入花销：<input type="text" placeholder="spendname" v-model='spendname' >
    输入价钱：<input type="text" placeholder="price" v-model='price' >
    <button class="btn btn-primary"  @click="commit(name,spendname,price)">点击提交</button>
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
          name:'',
          spendname:'',
          date:' ',
          price:'',
          starttime: '',
      endtime: '2016-01-19',
      testTime: '',
      multiTime: '',
 
      // for Vue 2.0 
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },
 
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: 'when?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default 
        dismissible: true // as true as default 
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2016-02-01',
        to: '2016-02-20'
      }]
    }
  },
   mounted() {
        this.LocaleDate()
    },
    components: {
    'date-picker': myDatepicker
  },
  methods:{
    toggle:function(num){
      this.item=num
    },
    LocaleDate:function(){
      var myDate = new Date();    
      this.date = myDate.toLocaleDateString();
      Event.$emit('date',this.date);
    },
    commit:function(name,spendname,price){
      Event.$emit('name',name,spendname,price);
      this.name =" ";
      this.spendname = " ";
      this.price=" ";
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
  padding-left:10px;
}
</style>
