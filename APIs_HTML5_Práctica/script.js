function handleFileSelect(e) {
  	var file = e.target.files[0]; //archivo subido
    //Comprobar que el archivo es correcto
    if(!file.type.match('video.*')){
        alert("Fichero no soportado. El archivo debe ser un video en formato .webm, .mp4 o .ogv.")
    }else{
  	    var reader = new FileReader();

        reader.onload = function (e) {
            alert("Cargando video...")
            var src = document.createAttribute('src');
            src.value = e.target.result;
            console.log(src.value);
            var video;
            if(!document.getElementsByTagName("video")[0]){ //Comprobar que no hay un video previamente añadido
                video = document.createElement("video");
            }else{
                video = document.getElementsByTagName("video")[0];
            }
            video.setAttributeNode(src); // asignar src al video
            document.getElementById("salida").insertBefore(video,botones); //Insertar video
            document.getElementById("botones").style.display = "block"; // Activar botones
        }
        reader.readAsDataURL(file);
    }
}


