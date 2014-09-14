
function read_file(){
	$.get( "data/data.txt", function( data ) {
		console.log(data);
		var splitted = data.split(',');
		var entrata = splitted[0];
		var bagno = splitted[1];
		var camera = splitted[2];
		var ritornoCasa = splitted[3];
		var attivo = splitted[4];
		if(attivo == 1){
			if(entrata == 0){
				$('#bulb-entrance').attr('src', 'img/bulb.png');
			}else{
				$('#bulb-entrance').attr('src', 'img/bulb_on.png');
			}
			if(bagno == 0){
				$('#bulb-bath').attr('src','img/bulb.png');
				$('#shower-icon').attr('src','img/shower-icon.png');
			}else{
				$('#bulb-bath').attr('src','img/bulg_on.png');
				$('#shower-icon').attr('src','img/shower-icon_on.png');
			}
			if(camera == 0){
				$('#bulb-one').attr('src', 'img/bulb.png');
			}else{
				$('#bulb-one').attr('src', 'img/bulb_on.png');
			}
			if(ritornoCasa == 0){
				$('.temperature-image').attr('src', 'img/temperature.png');
			}else{
				$('.temperature-image').attr('src', 'img/temperature_on.png');
			}
		}
	}).done(function(){
		read_file();
	});
}