function cargar_clima(){
    var clima = new XMLHttpRequest();
    var ciudad = $("#txtNombre").val();

    clima.open('GET','http://api.openweathermap.org/data/2.5/weather?q='+ciudad+',cl&units=metric&appid=91c788a49db9caa24bac27d33cbea061',false);
    clima.send(null);

    var datos = JSON.parse(clima.response);

    var ciudad = datos.name;
    var temperatura = datos.main.temp;
    var humedad = datos.main.humidity;
    var icon = datos.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
    var clima = datos.weather.description;
	var main = datos.weather[0].main;
	
    $('#ubicacion').html(ciudad);
    $('#temperatura').html(temperatura);
    $('#humedad').html(humedad);
    $('#icon').attr("src",iconurl); //Manipulamos el atributo source del elemento
}


