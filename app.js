			//**********************************
			//THIS Function gets rid of the white overlay
			//**********************************
// const ok = function(){
// 				document.getElementById('#modal-textbox').style.display = 'none';
// 				document.getElementById('#modal').style.display = 'none';
// 			}
const userInput = $('input[type="text"]').val();
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
		//you can use.html or .text
		$('#color').html(data.color);
		$('#today').html(data.current_date);
		$('#description').html(data.description);
		$('#daterange').html(data.date_range);
if (`${userInput}` == 'aries') {
const modalpost = $('<dd>').text('Hey there Aries! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalpost)
}else if (`${userInput}` == 'taurus') {
const modalTaurus = $('<dd>').text('Hey there Taurus! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalTaurus)
}else if (`${userInput}` == 'gemini') {
	const modalGemini = $('<dd>').text('Hey there Gemini! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalGemini)
}else if (`${userInput}` == 'cancer') {
	const modalCancer = $('<dd>').text('Hey there Cancer! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalCancer)
}else if (`${userInput}` == 'leo') {
	const modalLeo = $('<dd>').text('Hey there Leo! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalLeo)
}else if (`${userInput}` == 'virgo') {
	const modalVirgo = $('<dd>').text('Hey there Virgo! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalVirgo)
}else if (`${userInput}` == 'libra') {
	const modalLibra = $('<dd>').text('Hey there Libra! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalLibra)
}else if (`${userInput}` == 'scorpio') {
	const modalScorpio = $('<dd>').text('Hey there Scorpio! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalScorpio)
}else if (`${userInput}` == 'sagittarius') {
	const modalSagittarius = $('<dd>').text('Hey there Sagittarius! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalSagittarius)
}else if (`${userInput}` == 'capricorn') {
	const modalCapricorn = $('<dd>').text('Hey there Capricorn! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalCapricorn)
}else if (`${userInput}` == 'aquarius') {
	const modalAquarius = $('<dd>').text('Hey there Aquarius! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalAquarius)
}else if (`${userInput}` == 'pisces') {
	const modalPisces = $('<dd>').text('Hey there Pisces! we are meditating on your info, click ok to transcend...')
	$('#modal').append(modalPisces)
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
		 	  $(  () => {


				const $openBtn = $('#openModal');

				const $modal = $('#modal');

				const $closeBtn = $('#close');

				const openModal = () => {
					$modal.css('display', 'block');

				}

				const closeModal = () => {
					$modal.css('display', 'none');
				}

				$('form').on('submit', openModal);

				
				$closeBtn.on('click', closeModal);
			
				// const modalpost = $('<dd>').text('Hey there Aries! we are meditating on your info, click ok to transcend...')
       			// $('#modal').append(modalpost)
			
		});








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
