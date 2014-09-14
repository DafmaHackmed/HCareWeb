
function read_file(){
	$.get( "data/data.txt", function( data ) {
		console.log(data);
		var splitted = data.split(',');
		var entrata = splitted[0];
		var bagno = splitted[1];
		var camera = splitted[2];
		var ritornoCasa = splitted[3];
		var attivo = splitted[4];
		var accendiLuce = splitted[5];
		if(attivo == 1){
			if(entrata == 1 && accendiLuce == 1){
				$('#bulb-entrance').attr('src', 'img/appliances/bulb.png');
			}else{
				$('#bulb-entrance').attr('src', 'img/appliances_on/bulb_on.png');
			}
			if(bagno == 0){
				$('#bulb-bath').attr('src','img/appliances/bulb.png');
				$('#shower-icon').attr('src','img/appliances/shower-icon.png');
			}else{
				$('#bulb-bath').attr('src','img/appliances_on/bulb_on.png');
				$('#shower-icon').attr('src','img/appliances_on/shower-icon_on.png');
			}
			if(camera == 0){
				$('#bulb-one').attr('src', 'img/appliances/bulb.png');
			}else{
				$('#bulb-one').attr('src', 'img/appliances_on/bulb_on.png');
			}
			if(ritornoCasa == 0){
				$('.temperature-image').attr('src', 'img/appliances/temperature.png');
			}else{
				$('.temperature-image').attr('src', 'img/appliances_on/temperature_on.png');
			}
		}
	}).done(function(){
		read_file();
	});
}