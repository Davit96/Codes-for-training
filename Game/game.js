var aj=false;
var car_interval;
function bod_1(e){
	console.log(e.keyCode);
	if(e.keyCode==39){
		aj=true;
		if (parseInt(document.getElementById('car').style.left)!=685){
			document.getElementById('car').style.left=parseInt(document.getElementById('car').style.left)+105+'px';
	}
	}
	if(e.keyCode==37){
		aj=false;
		if (parseInt(document.getElementById('car').style.left)!=580 ){
			document.getElementById('car').style.left=parseInt(document.getElementById('car').style.left)-105+'px';
		}
		
	}
	if (e.keyCode==38){
	interval=	setInterval(floa, 2);
	car_interval= setInterval(car,1);
	console.log(interval);
	}
	if (e.keyCode==40){
		clearInterval(interval);
		interval--;
		if(car_interval>2){
			clearInterval(car_interval);
			car_interval--;
			}else {
			car_interval= setInterval(car,1);
			}
	}

}
var bod=0;
var bgpos=0;
function floa(){
	var t=parseInt(document.getElementById('div_3').style.top);
	var tt=parseInt(document.getElementById('div_3a').style.top);
	var dr=parseInt(document.getElementById('tree').style.top);
	var dra=parseInt(document.getElementById('treea').style.top);
	var drig1=parseInt(document.getElementById('divrig1').style.top);
	var drig2=parseInt(document.getElementById('divrig2').style.top);
	

	bod++;
	if (bod>1000){
		bod=0;
	}
		document.getElementById('bod').style.backgroundPositionY=bod+'px';
		
    bgpos++;
	if(bgpos>1000){
		bgpos=0;
	}
		document.getElementById('asphalt').style.backgroundPositionY=bgpos+'px';
	
	if (t!=700){
		document.getElementById('div_3').style.top=parseInt(document.getElementById('div_3').style.top)+1+'px';
	}
	if (tt!=700){
		document.getElementById('div_3a').style.top=parseInt(document.getElementById('div_3a').style.top)+1+'px';
	}
	if (t>=700){
		document.getElementById('div_3').style.top=-700;
	}
	if (tt>=700){
		document.getElementById('div_3a').style.top=-700;
	}
	if (dr!=950){
		document.getElementById('tree').style.top=parseInt(document.getElementById('tree').style.top)+1+'px';
	}
	if (dr>=950){
		document.getElementById('tree').style.top=-800;
	}
	if (dra!=950){
		document.getElementById('treea').style.top=parseInt(document.getElementById('treea').style.top)+1+'px';
	}
	if (dra>=950){
		document.getElementById('treea').style.top=-800;
	}
	if (drig1!=950){
		document.getElementById('divrig1').style.top=parseInt(document.getElementById('divrig1').style.top)+1+'px';
	}
	if (drig1 >=950){
		document.getElementById('divrig1').style.top=-800;
	}
	if (drig2!=950){
		document.getElementById('divrig2').style.top=parseInt(document.getElementById('divrig2').style.top)+1+'px';
	}
	if (drig2>=950){
		document.getElementById('divrig2').style.top=-800;
	}
}
function car(){
	var cb=parseInt(document.getElementById('carbes').style.top);
	var cb1=parseInt(document.getElementById('carbes1').style.top);
		if (cb!=1250){
		document.getElementById('carbes').style.top=parseInt(document.getElementById('carbes').style.top)+2+'px';
	}
	if (cb>=1250){
		document.getElementById('carbes').style.top=-1000;
	}
	if (cb1!=750){
		document.getElementById('carbes1').style.top=parseInt(document.getElementById('carbes1').style.top)+2+'px';
	}
	if (cb1>=750){
		document.getElementById('carbes1').style.top=-1500;
	}
}
car_interval=setInterval(car, 2);

/*Math.round(Math.random()*10);
alert(Math.round(Math.random()*10));*/
	