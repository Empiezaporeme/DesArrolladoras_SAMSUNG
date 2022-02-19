//  PRÁCTICA FINAL MARTA DE LUIS
//  ARCHIVO JS

var provincias = [[01, "Alava"], [02, "Albacete"], [03, "Alicante"], [04, "Almeria"], [05, "Avila"], [06, "Badajoz"], [07, "Islas Baleares"], [08, "Barcelona"], [09, "Burgos"], [10, "Caceres"], [11, "Cadiz"], [12, "Castellon"], [13, "Ciudad Real"], [14, "Cordoba"], [15, "La Coruna"], [16, "Cuenca"], [17, "Gerona"], [18, "Granada"], [19, "Guadalajara"], [20, "Guipuzcoa"], [21, "Huelva"], [22, "Huesca"], [23, "Jaen"], [24, "Leon"], [25, "Lerida"], [26, "La Rioja"], [27, "Lugo"], [28, "Madrid"], [29, "Malaga"], [30, "Murcia"], [31, "Navarra"], [32, "Orense"], [33, "Asturias"], [34, "Palencia"], [35, "Las Palmas"], [36, "Pontevedra"], [37, "Salamanca"], [38, "Santa Cruz de Tenerife"], [39, "Cantabria"], [40, "Segovia"], [41, "Sevilla"], [42, "Soria"], [43, "Tarragona"], [44, "Teruel"], [45, "Toledo"], [46, "Valencia"], [47, "Valladolid"], [48, "Vizcaya"], [49, "Zamora"], [50, "Zaragoza"], [51, "Ceuta"], [52, "Melilla"]];


function mostrarValoracion(){
    var valoracion = document.getElementById("valoracion").value;
    if(valoracion!=1){
        alert("Has valorado con " + valoracion + " puntos.");
    }else{
        alert("Has valorado con " + valoracion + " punto.");
    };
};

function mostrarCuenta(){
    var solucion = comprobarCuenta();
    if (solucion[0]==0){
        alert(solucion[1]);
    };
};
function comprobarCuenta(textoAlert,errores){
    var datosBancarios = ["pais", "iban", "entidad", "sucursal", "dc", "cuenta"];
    var textoAlert = "Le informamos que su número de cuenta es: {}{}-{}-{}-{}-{}";
    var errores = 0;
    for (i = 0; i < datosBancarios.length; i++) {
        var valor = document.getElementById(datosBancarios[i]).value;
        if (valor == "") {
            alert("Introduzca " + datosBancarios[i] + " de sus datos bancarios.");
            errores++;
        } else if (datosBancarios[i] != "pais" && isNaN(parseInt(valor))) {
            alert("El campo " + datosBancarios[i] + " de sus datos bancarios es incorrecto.");
            errores++;
        };
        textoAlert = textoAlert.replace("{}", valor);
    };
    return [errores,textoAlert]
};

function mostrarDia(){
    var semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
    var fecha = document.getElementById("fecha").value;
    var dia = new Date(fecha).getDate();
    alert("La fecha seleccionada en el elemento de fecha es un " + semana[dia-1] + ".");
};


function enviarForm(){
    var cp = document.getElementById("cp").value;
    var prov = document.getElementById("provincia").value;
    var check = [false, false, false];
    var posicion = [0,0];
    let regNum = /[0-9]/;
    
    // Comprueba el formato del campo CP
    if(cp == ""){
        alert("El campo código postal está vacío");
    }else if(!(regNum.test(cp))){
        alert("El código postal debe de estar formado por números");
    };

    // Comprueba el formato del campo prov
    if(prov==""){
        alert("El campo provincia está vacío")
    }

    // Comprueba que código y provincia existen
    for(i=0;i<provincias.length;i++){
        if(parseInt(String(cp).slice(0,2)) == provincias[i][0]){
            check[0] = true;
            posicion[0] = i;
        };
        if(prov.toUpperCase() == provincias[i][1].toUpperCase()){
            check[1] = true;
            posicion[1] = i;
        };
    };

    // Informa al usuario de los errores en el código postal y la provincia
    if (check[0] == false && cp != "" && regNum.test(cp)){
        alert("El número de código postal no existe");
    };
    if (check[1] == false && prov != ""){
        alert("El nombre de la provincia no es correcto");
    };

    // Comprueba que CP y provincia son coincidentes

    if (cp != "" && prov != "") {
        if (posicion[0] == posicion[1]) {
            check[2] = true;
        } else {
            alert("El código postal no coincide con la provincia");
        };
    } 

    // Motrar los resultados por pantalla
    var divResultado = document.getElementById("resultado");
    if (check[0] == true && check[1] == true && check[2] == true){
        divResultado.className = "correcto";
        divResultado.innerHTML = "Código postal: " + cp + "<br>Provincia: " + prov.toUpperCase();
    }else{
        divResultado.className = "incorrecto";
        divResultado.innerHTML = "Código postal: " + cp + " <br> Provincia: "+prov.toUpperCase();
    };
    // Comprobar el número de cuenta
    comprobarCuenta();
};

function borrarResultado(){
    document.getElementById("resultado").innerHTML = "";
};
