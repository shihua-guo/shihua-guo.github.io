// JavaScript Document
$(document).ready(function(e) {
    $("#reftmenu0>li").click(function(){
		var li_num=$(this).index();
		setTac(li_num);
		setTad(li_num);
		});
    $("#leftmenu0>li").click(function(){
		var li_num=$(this).index();
		setTab(li_num);
		});
	$("#zhanghu-dv-id").click(function(){
		setTac(3);
		setTad(3);
	});
});

function setTac(n){
 var mli=$("#mecont0>ul");//document.getElementById("mecont0").getElementsByTagName("ul");
 for(i=0;i<mli.length;i++){
  mli[i].style.display=i==n?"block":"none";

 }
 }
 
function setTad(n){
 var tli=$("#reftmenu0>li");//document.getElementById("reftmenu0").getElementsByTagName("li");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"hover":"";
 }

 }
 
function setTab(n){
 var tli=$("#leftmenu0>li");
 var mli=$("#mcont0>ul");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"hover1":"";
  mli[i].style.display=i==n?"block":"none";
 }
}

//------------------------------------------------------账户安全修改密码--------------------------------------------------------

	

//-------检查密码----

/*检验新密码 */
   function check_oldpass(){
    	var oldpass;
    	oldpass=document.getElementById("oldpass").value;
    	oldpass=oldpass.trim();
    	if(oldpass==""){
    		document.getElementById("oldpass_error").innerHTML="请输入确认密码";
    	}
    	else if(oldpass!=_pass){
			document.getElementById("oldpass").focus();
    		document.getElementById("oldpass_error").innerHTML="密码不一致，请重新输入";
			return false;
    	}
    	else{
    		document.getElementById("oldpass_error").innerHTML="<img src='D:\Temp\Hemerocallis-account management\images\security-yes.png'/>";
			return true;
    	}
    }
   
    /*检验新密码 */
    function check_pass(){
    	var pass;
    	pass=document.getElementById("pass").value;
    	pass=pass.trim();
    	_pass=pass;
    	if(pass==""){
    		document.getElementById("pass_error").innerHTML="请输入密码";
    	}
    	else{
    		if(pass.length<4){
				document.getElementById("pass").focus();
    			document.getElementById("pass_error").innerHTML="密码长度只能在6-14位字符之间";
    		}
			else if(pass.length>16){
				document.getElementById("pass").focus();
				document.getElementById("pass_error").innerHTML="密码长度只能在6-14位字符之间";
			}
    		else{
    			document.getElementById("pass_error").innerHTML="";
    		}
    	}
    }
    
    /*确认密码*/
    function check_rpass(){
    	var rpass;
    	rpass=document.getElementById("rpass").value;
    	rpass=rpass.trim();
    	if(rpass==""){
    		document.getElementById("rpass_error").innerHTML="请输入确认密码";
    	}
    	else if(rpass!=_pass){
			document.getElementById("rpass").focus();
    		document.getElementById("rpass_error").innerHTML="密码不一致，请重新输入";
			return false;
    	}
    	else{
    		document.getElementById("rpass_error").innerHTML="";
			return true;
    	}
    }


//-----检查邮箱格式-------

function mail(){
    	var mail;
    	mail=$("#mail").val();
		var myreg= /[^@]+@[^@]/;                     ///^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		isok=myreg.test(mail);

    	if(!isok){
            document.getElementById("mail").focus();
	   		document.getElementById("imail_error").innerHTML="请输入有效的E_mail！";
			return false;
    	}
		document.getElementById("imail_error").innerHTML="";
    }
	
function clear_mb(){
	$("#mail").val("");
	}
	//--------检查手机号------------
	/*检查手机号：*/
    function phone(){
    	var phone;
    	phone=$("#phone").val();
    	if(phone.length==0){
    		document.getElementById("iphone_error").innerHTML="请输入手机号！";
    	}
    	if(phone.length!=11){
    		document.getElementById("iphone_error").innerHTML="手机格式有误，请重新输入";
    	}
    	else{
    		document.getElementById("iphone_error").innerHTML="";
    	}
    }