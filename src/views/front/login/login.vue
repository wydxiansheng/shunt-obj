<template>
    <div id="mian_warper">
        <div id="mian_wh">
            <div class="main_center">
                 <div class="main_title">分流器配置平台</div>
                 <div class='mian_bottom'>
                     <div class="main_content">
                         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm inputTop">
                              <el-form-item  prop="username">
                                    <el-input  class="ks" placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
                              </el-form-item>
                              <el-form-item  prop="password">
                                    <el-input type="password" placeholder="请输入用户密码" v-model="ruleForm.password" class="ks"></el-input>
                              </el-form-item>
                         </el-form>
                        <div id="login">
                            <el-button type="primary" class="el-login" @click="login()">登录</el-button>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
 import '../login/login.css'
// import activate from '../login/loginActivate.vue'
// function cliceWh(){
//      var w = $(window).width();
//      var h = $(window).height();
// 　　 $("#mian_wh").css({"width":w,"height":h}); 
// }
// $(document).ready(function(){
//     cliceWh();
// }); 
// $(window).resize(function () { 
//     cliceWh();
// })
export default{
    name:'login',
    data(){
        return{
            ruleForm:{
                password:"",
                username:"",
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入用户密码', trigger: 'blur' }
                ]
            }
        }
    },
    mounted:function(){
        let that = this;
        $(document).keyup(function (evnet) {
            if (evnet.keyCode == '13') {
                that.login();
            }
        });
    },
    methods:{
        login:function(){
            this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    var obj = {
                        "username":this.ruleForm.username,
	                    "passwd":this.ruleForm.password
                    };
                    this.$this.post('/api/login',JSON.stringify(obj)).then((response)=>{
                        if(response.data.retCode==0){
                            var netword = {
                                "userName" : this.ruleForm.username, //用户id
                                "lastVisitTime" : new Date().getTime() //超时时间
                            };
                            sessionStorage.setItem("nxgx", JSON.stringify(netword) );
                            this.$router.push({path:'/consolePage'});
                        }
                    }).catch((error)=>{})
                } else {
                    console.log('error submit!!');
                    return false;
                }
         });
        }
    },
    
}
</script>