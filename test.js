function run() {
    console.log(123);
	input2.value = "do something222";
}
var temp = 0;
function plus() {
    console.log('plus!');
	input = document.getElementById('input').value;
	
	
	temp = temp + parseInt(input);
	console.log(temp);
	if(temp != NaN){
	trid.innerHTML = temp;
	}
		
}

function c() {
    console.log('clear!');
	temp = 0;
	trid.innerHTML , input.text = temp;
	
		
}

function check(obj){
	if((event.keyCode > 47) && (event.keyCode < 58)){
		
	}else{
		console.log("only number acceptable");
		document.getElementById('input').value = "";
		errmsg.innerHTML = "only number acceptable!";
		errmsg.transparent = false;
		disappear(errmsg);
	}
}



function disappear(x){
	document.getElementById(x).transparent = true; 
}

function minus() {
    console.log('minus!');
	input = document.getElementById('input').value;
	
		temp = temp - parseInt(input);
		trid.innerHTML = temp;
		
}