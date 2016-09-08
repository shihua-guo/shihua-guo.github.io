  /*检查手机号：*/
    function ckMobile(){
    	var mobile;
    	mobile=$("#mobile").val();
    	if(mobile.length==0){
    		document.getElementById("iphone_error").innerHTML="请输入手机号！";
    	}
    	if(mobile.length!=11){
    		document.getElementById("iphone_error").innerHTML="手机格式有误，请重新输入";
    	}
    	else{
    		document.getElementById("iphone_error").innerHTML="";
    	}
    }
    
    /*检验密码 */
    function check_pass(){
    	var pass;
    	pass=document.getElementById("pass").value;
    	pass=pass.trim();
    	_pass=pass;
    	if(pass==""){
    		document.getElementById("pass_error").innerHTML="6-14位字符，建议由字母，数字和符号两种以上组合";
    	}
    	else{
    		if(pass.length<4){
				document.getElementById("pass").focus();
    			document.getElementById("pass_error").innerHTML="<font color='red'><b>密码长度只能在6-14位字符之间</b></font>";
    		}
			else if(pass.length>16){
				document.getElementById("pass").focus();
				document.getElementById("pass_error").innerHTML="<font color='red'><b>密码长度只能在6-14位字符之间</b></font>";
			}
    		else{
    			document.getElementById("pass_error").innerHTML="";
    		}
    	}
    }
    
    /*检验rpass */
    function check_rpass(){
    	var rpass;
    	rpass=document.getElementById("rpass").value;
    	rpass=rpass.trim();
    	if(rpass==""){
    		document.getElementById("rpass_error").innerHTML="请输入确认密码";
    	}
    	else if(rpass!=_pass){
			document.getElementById("rpass").focus();
    		document.getElementById("rpass_error").innerHTML="密码不一致";
			return false;
    	}
    	else{
    		document.getElementById("rpass_error").innerHTML="";
			return true;
    	}
    }