const ok = function(){
				document.getElementById('dialogbox').style.display = 'none';
				document.getElementById('dialogoverlay').style.display = 'none';
			}

//*********************************
//FUNCTION THAT CONTAINS EVERYTHING FROM THE API SO YOU CAN LOOK FOR IT ON THE PAGE
//*********************************
$('form').on('submit', (event) => {

	event.preventDefault();
//*************************************
//HERE IS THE USER INPUT TO SEARCH FOR THE DATA OF THE API
//*************************************
	const userInput = $('input[type="text"]').val();
//**************************************
//HERE IS THE AJAX TO GET/POST THE API INFO
//**************************************
$.ajax({
	type:'POST',
	//**********************************************
	//HERE I REPLACED THE SIGN= WITH ${USERINPUT}
	//SO THAT THE API WILL LOOK FOR THE SIGN YOU TYPE
	//**********************************************
	url:`https://aztro.sameerkumar.website?sign=${userInput}&day=today` ,
	success:function(data){
	//*************************
	//CONSOLE TO SEE WHATS IN THE API
	//**************************
     console.log(data);
     }
     //********************************
     //.THEN OR .DONE DEPENDING ON WHAT IS REQUIRED FOR THE API
     //ALLOWS YOU TO GET SPECIFIC DATA INFORMATION
     //**********************************
}).then(
	(data)=> {
		//*******************************
		//Created a custom Alert Box with a white overlay so you must click ok
		//*******************************
		function CustomAlert(){
			this.render = function(dialog){
				var winW = window.innerWidth;
				var winH = window.innerHeight;
				var dialogoverlay = document.getElementById('dialogoverlay');
				var dialogbox = document.getElementById('dialogbox');
				dialogoverlay.style.display = "block";
				dialogoverlay.style.height = winH+"px";
				dialogbox.style.left = (winW/2) - (550 * .5)+"px";
				dialogbox.style.top = "100px";
				dialogbox.style.display = "block";
				document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
				document.getElementById('dialogboxbody').innerHTML = dialog;
				document.getElementById('dialogboxfoot').innerHTML = '<button  onclick="ok()">OK</button>';
			}
			//**********************************
			//THIS Function gets rid of the white overlay
			//**********************************
			// this.ok = function(){
			// 	document.getElementById('dialogbox').style.display = 'none';
			// 	document.getElementById('dialogoverlay').style.display = 'none';
			// }
		}
				// console.log(Alert.ok())
			let Alert = new CustomAlert();
			// let Alert = this.ok()
			console.log(Alert)
		// let Alert = new CustomAlert();
		//you can use.html or .text
		$('#color').html(data.color);
		$('#today').html(data.current_date);
		$('#description').html(data.description);
		$('#daterange').html(data.date_range);
if (`${userInput}` == 'aries') {
	Alert.render('Hey there Aries! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'taurus') {
	Alert.render('Hey there Taurus! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'gemini') {
	Alert.render('Hey there Gemini! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'cancer') {
	Alert.render('Hey there Cancer! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'leo') {
	Alert.render('Hey there Leo! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'virgo') {
	Alert.render('Hey there Virgo! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'libra') {
	Alert.render('Hey there Libra! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'scorpio') {
	Alert.render('Hey there Scorpio! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'sagittarius') {
	Alert.render('Hey there Sagittarius! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'capricorn') {
	Alert.render('Hey there Capricorn! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'aquarius') {
	Alert.render('Hey there Aquarius! we are meditating on your info, click ok to transcend...')
}else if (`${userInput}` == 'pisces') {
	Alert.render('Hey there Pisces! we are meditating on your info, click ok to transcend...')
};
		(item) => { 
const newDiv = $('<dd>').text(item.description)
$('#description').append(newDiv)
       
};
	},
	//*****************************
	//HERE IS AN ERROR FUNCTION TO LET YOU KNOW
	//IF YOU TYPED IN WRONG INFORMATION OR
	//MADE AN INCORRECT REQUEST OF THE API INFO
	//*********************************
	(error) => {
		alert("oops! you mistyped your sign!")
		console.log('bad request');
	}

);


})








//another way to do this

// $.ajax(
// 	{
// 		url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Die Hard',
// 		success: (data) => {
// 			console.log(data);
// 		},
// 		error: (error) => {
// 			console.log('bad request');
// 			console.log(error);
// 		}
// 	}

// );
