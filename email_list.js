//join email list script file linked on html
//Zachary Murphy
//Modified: 10/21/2018

var $ = function (id){
	return document.getElementById(id);
}


var stateCodeLookup = function (stateCode){
	var states = ["CA", "WA", "OR", "NV", "NM", "AZ", "WY", "MT"];
	stateCode = stateCode.toUpperCase();
	//for (var i =0; i < states.length; i++){
		//if (states[i] == stateCode){
			//return true;
		//}
	//}
	
	
	//for in loop
	for (var i in states){
		if (states[i] == stateCode){
			return true;
		}
	}
		
	return false;
}

var joinList = function(){
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var isValid = true;
	
	//same code before validation of entries
	
	
	//validate state code
	var stateCode = $("state_code").value;
	if (!stateCodeLookup(stateCode)){
		$("state_code_error").firstChild.nodeValue = "State code is invalid...";
		isValid = false;
	}else{
		$("state_code_error").firstChild.nodeValue = "";
	}
	
	//submit the form if all validate
	if (isValid) {
		$("email_form").submit();
	}
}
window.onload = function (){
	$("join_list").onclick = joinList;
	$("email_address1").focus();
}