/* -------------------------------------------------------------------- */
/* Module-Strings.js By Pol Flórez Viciana 12-10-2024 a 31-10-2024 ---- */
/* -------------------------------------------------------------------- */
/* Funciones de Números en Textos ------------------------------------- */
/* -------------------------------------------------------------------- */
/* RandomNumber(Minimo, Maximo) --------------------------------------- */
/* TextIsNumber(Texto) ------------------------------------------------ */
/* TextIsNumberFloat(Texto) ------------------------------------------- */
/* TextNumbersCount(Texto) -------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* Funciones de Textos y Palabras ------------------------------------- */
/* -------------------------------------------------------------------- */
/* TextCharsLeft(Texto, Longitud) ------------------------------------- */
/* TextCharsRight(Texto, Longitud) ------------------------------------ */
/* TextCharsCount(Texto) ---------------------------------------------- */
/* TextWordCount(Texto, Palabra) -------------------------------------- */
/* TextWordsCount(Texto) ---------------------------------------------- */
/* TextMinuscula(Texto) ----------------------------------------------- */
/* TextMayuscula(Texto) ----------------------------------------------- */
/* RemplazarSaltosPorBR(Texto) ---------------------------------------- */
/* TextDeleteHTML(Texto) ---------------------------------------------- */
/* TextoLetraCapital(Texto) ------------------------------------------- */
/* TextoReverso(Texto) ------------------------------------------------ */
/* CrearListadoEtiquetado(Texto) -------------------------------------- */
/* CrearListadoEtiquetadoEnumerados(Texto) ---------------------------- */
/* OrdenarLineasTexto(Texto) ------------------------------------------ */
/* OrdenarPalabrasTexto(Texto,CaracterSplit) -------------------------- */
/* ContarSimbolosTexto(Texto) ----------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* Funciones de Fecha ------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* TraerFechaAhora() -------------------------------------------------- */
/* DiaSemana(Fecha) --------------------------------------------------- */
/* Dia(Fecha) --------------------------------------------------------- */
/* Mes(Fecha) --------------------------------------------------------- */
/* Ano(Fecha) --------------------------------------------------------- */
/* Hora(Fecha) -------------------------------------------------------- */
/* Minuto(Fecha) ------------------------------------------------------ */
/* Segundo(Fecha) ----------------------------------------------------- */
/* AgregarFecha(Texto) ------------------------------------------------ */
/* AgregarFechaConLabel(Texto) ---------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */

/* Constantes para resumir la app */
const JSNullString = "";
const JSStringComa = ".";
const JSEspacioBlanco = " ";
const JSSaltoLinea = "\n ";
const JSCero = 0;
const JSUno = 1;
const JSDos = 2;
const JSTres = 3;
const JSCuatro = 4;
const JSCinco = 5;
const JSSeis = 6;
const JSSiete = 7;
const JSOcho = 8;
const JSNueve = 9;

const NumCero = 0;
const NumUno = 1;
const NumDos = 2;
const NumTres = 3;
const NumCuatro = 4;
const NumCinco = 5;
const NumSeis = 6;
const NumSiete = 7;
const NumOcho = 8;
const NumNueve = 9;

const CeroString = "0";
const UnoString = "1";
const DosString = "2";
const TresString = "3";
const CuatroString = "4";
const CincoString = "5";
const SeisString = "6";
const SieteString = "7";
const OchoString = "8";
const NueveString = "9";

const TextoNull = "";
const NumNumero = "number";
const SaltodeLinea = "\n"; 
const TextoEspacio = " ";
const TextoComa = ",";
const TextoPunto = ".";
const TextoDosPuntos = ":";
const TextoIgual = "=";
const TextoComillasDobles = '"';
const TextoComillas = "'";
const TextoParentesis1 = "(";
const TextoParentesis2 = ")";
const TextoInterrogante1 = "¿";
const TextoInterrogante2 = "?";
const TextoExclamacion1 = "¡";
const TextoExclamacion2 = "!";
const TextoAnd = "&";
const TextoPorcentaje = "%";
const TextoDolar = "$";
const TextoMultiplicar = "·";
const TextoSuma = "+";
const TextoAsterisco = "*";
const TextoPleka = "|";
const TextoGuion = "-";
const TextoBarra = "/";
const TextoContraBarra = "\\";

/* Función de Arranque en el módulo */
function Load(){
	//alert("Hola Mundo");
	//alert(RandomNumber(1,10));
	//alert(TextCharsCount("Hola Mundo"));
	//alert(TextCharsLeft("Hola Mundo",4));
	//alert(TextCharsRight("Hola Mundo",5));
	//alert(TextWordCount("Hola Pol Como Andas Pol Adios Pol son 4 P","P"));
	//alert(TextIsNumber("123"));
	//alert(TextIsNumberFloat("123.5"));
	//alert(TextNumbersCount("Hola 1,2 es igual a \n Prueba Nº 3"));
	//alert(TextWordsCount("Hola \n Prueba Nº 4"));
}

/* Mayusculas y Minusculas */
function TextMinuscula(Texto){
	return Texto.toLowerCase();
}

function TextMayuscula(Texto){
	return Texto.toUpperCase();
}

/* Funciones de Reemplazo HTML */
function RemplazarSaltosPorBR(Texto){
	var ResultadoFinal = Texto;
	if (Texto != TextoNull ){
		ResultadoFinal = TextoNull;
		var Temporal = Texto;
		var i = NumCero;
		var Caracter = TextoNull;
		ResultadoFinal = TextoNull; 
		for ( i = 1 ; i <= Texto.length; i++ ){
			Caracter = TextCharsLeft(Temporal, NumUno);
			if (Caracter.charCodeAt() == SaltodeLinea.charCodeAt()){
				ResultadoFinal = ResultadoFinal + "<br>" + Caracter;
			}else{
				ResultadoFinal = ResultadoFinal + Caracter;
			}
			Temporal = TextCharsRight(Texto, Texto.length - i);
		}
		ResultadoFinal = ResultadoFinal + "<br>" + SaltodeLinea;
	}
	return ResultadoFinal;
}
function TextDeleteHTML(Texto){
	var Resultado = Texto;
	if (Texto != TextoNull ){
		var Temporal = Texto;
		var i = NumCero;
		var EstaenMayus = true;
		var EstaenPausa = false;
		var Caracter = TextoNull;
		var Palabra = TextoNull;
		Resultado = TextoNull; 
		for ( i = 1 ; i <= Texto.length; i++ ){
			var CaracterAnterior = Caracter;
			Caracter = TextCharsLeft(Temporal, NumUno);
			var SiguienteCaracter = TextCharsLeft(Temporal, NumDos);
			if (EstaenPausa == false){
				if ( Caracter.charCodeAt() == 60 && TextoEspacio + SiguienteCaracter != TextoEspacio + "<" + TextoEspacio ){
					EstaenPausa = true;
				}else{ 
					if ( Caracter.charCodeAt() == 62 ){
						EstaenPausa = false;
					}		
				}
				if ( Caracter.charCodeAt() == 46 || Caracter.charCodeAt() == 58){
					EstaenMayus = true;
					if (EstaenPausa == false ){ 
						Resultado = Resultado + Caracter; 
					}
				}else{
					if ( Caracter.charCodeAt() >=  65 && Caracter.charCodeAt() <=  90 || Caracter.charCodeAt() >=  97 && Caracter.charCodeAt() <=  122 || Caracter.charCodeAt() >=  192 && Caracter.charCodeAt() <=  255 ){
						if (EstaenMayus == true ){
							if (EstaenPausa == false ){ 
								Resultado = Resultado + Caracter; 
							}
							EstaenMayus = false;
						}else{
							if (EstaenPausa == false ){ 
								Resultado = Resultado + Caracter; 
							}
						}
					}else{
						if (EstaenPausa == false ){ 
							Resultado = Resultado + Caracter; 
						}
					}
				}
				
			}else{
				if ( Caracter.charCodeAt() == 60 && TextoEspacio + SiguienteCaracter != TextoEspacio + "<" + TextoEspacio ){
					EstaenPausa = true;
				}else{ 
					if ( Caracter.charCodeAt() == 62 ){
						EstaenPausa = false;
					}		
				}
				if (EstaenPausa == false && Caracter.charCodeAt() != 62 ){ 
					Resultado = Resultado + Caracter; 
				}	
			}	
			Temporal = TextCharsRight(Texto, Texto.length - i);	
		}
	}
	return Resultado;
}
function TextoLetraCapital(Texto){
	var Resultado = Texto;
	if (Texto != TextoNull ){
		var Temporal = Texto;
		var i = NumCero;
		var EstaenMayus = true;
		var EstaenPausa = false;
		var Caracter = TextoNull;
		var Palabra = TextoNull;
		Resultado = TextoNull; 
		for ( i = 1 ; i <= Texto.length; i++ ){
			var CaracterAnterior = Caracter;
			Caracter = TextCharsLeft(Temporal, NumUno);
			var SiguienteCaracter = TextCharsLeft(Temporal, NumDos);
			if (EstaenPausa == false){
				if ( Caracter.charCodeAt() == 60 && TextoEspacio + SiguienteCaracter != TextoEspacio + "<" + TextoEspacio ){
					EstaenPausa = true;
				}else{ 
					if ( Caracter.charCodeAt() == 62 ){
						EstaenPausa = false;
					}		
				}
				if ( Caracter.charCodeAt() == 46 || Caracter.charCodeAt() == 58){
					EstaenMayus = true;
					Resultado = Resultado + Caracter;
				}else{
					if ( Caracter.charCodeAt() >=  65 && Caracter.charCodeAt() <=  90 || Caracter.charCodeAt() >=  97 && Caracter.charCodeAt() <=  122 || Caracter.charCodeAt() >=  192 && Caracter.charCodeAt() <=  255 ){
						if (EstaenMayus == true ){
							Resultado = Resultado + TextMayuscula(Caracter);
							EstaenMayus = false;
						}else{
							Resultado = Resultado + Caracter;	
						}
					}else{
						Resultado = Resultado + Caracter;	
					}
				}
				
			}else{
				if ( Caracter.charCodeAt() == 60 && TextoEspacio + SiguienteCaracter != TextoEspacio + "<" + TextoEspacio ){
					EstaenPausa = true;
				}else{ 
					if ( Caracter.charCodeAt() == 62 ){
						EstaenPausa = false;
					}		
				}	
				Resultado = Resultado + Caracter;
			}	
			Temporal = TextCharsRight(Texto, Texto.length - i);	
		}
	}
	return Resultado;
}
function TextoReverso(Texto){
	var Resultado = Texto;
	if (Texto != TextoNull){
		var i;
		Resultado = TextoNull;
		var Tempo = Texto;
		var Caracter = TextoNull;
		for (i = Texto.length - NumUno; i >= NumCero; i--){
			Caracter = TextCharsRight(Tempo, NumUno);
			Resultado = Resultado + Caracter;
			Tempo = TextCharsLeft(Texto, i);
		}
	}
	return Resultado;
}
function CrearListadoEtiquetado(Texto){
	var ResultadoFinal = Texto;
	if (Texto != TextoNull ){
		ResultadoFinal = TextoNull;
		var Temporal = Texto;
		var i = NumCero;
		var Caracter = TextoNull;
		var Linea = TextoNull;
		ResultadoFinal = '<ul style="color: white; background-color: rgba(0,0,0,0.7); padding: 30px;">\n'; 
		for ( i = 1 ; i <= Texto.length; i++ ){
			Caracter = TextCharsLeft(Temporal, NumUno);
			if (Caracter.charCodeAt() == SaltodeLinea.charCodeAt()){
				if (Linea != TextoNull){
					ResultadoFinal = ResultadoFinal + "<li>" + Linea + "</li>" + Caracter;	
				}
				Linea = TextoNull;
			}else{
				Linea = Linea + Caracter;
			}
			Temporal = TextCharsRight(Texto, Texto.length - i);
		}
		if (Linea != TextoNull){
			ResultadoFinal = ResultadoFinal + "<li>" + Linea + "</li>\n</ul>";	
		}else{
			ResultadoFinal = ResultadoFinal + "</ul>";	
		}
	}
	return ResultadoFinal;
}

function CrearListadoEtiquetadoEnumerados(Texto){
	var ResultadoFinal = Texto;
	if (Texto != TextoNull ){
		ResultadoFinal = TextoNull;
		var Temporal = Texto;
		var i = NumCero;
		var Caracter = TextoNull;
		var Linea = TextoNull;
		ResultadoFinal = '<ol style="color: white; background-color: rgba(0,0,0,0.7); padding: 30px;">\n'; 
		for ( i = 1 ; i <= Texto.length; i++ ){
			Caracter = TextCharsLeft(Temporal, NumUno);
			if (Caracter.charCodeAt() == SaltodeLinea.charCodeAt()){
				if (Linea != TextoNull){
					ResultadoFinal = ResultadoFinal + "<li>" + Linea + "</li>" + Caracter;	
				}
				Linea = TextoNull;
			}else{
				Linea = Linea + Caracter;
			}
			Temporal = TextCharsRight(Texto, Texto.length - i);
		}
		if (Linea != TextoNull){
			ResultadoFinal = ResultadoFinal + "<li>" + Linea + "</li>\n</ol>";	
		}else{
			ResultadoFinal = ResultadoFinal + "</ol>";	
		}
	}
	return ResultadoFinal;
}

function OrdenarLineasTexto(Texto){
	return OrdenarPalabrasTexto(Texto, "\n");
}

function OrdenarPalabrasTexto(Texto,CaracterSplit){
	var Resultado = TextoNull + Texto;
	if (CaracterSplit != TextoNull ){
		var ListadoTemp = Texto.split(CaracterSplit);	
		var x = NumCero;
		ListadoTemp.sort();
		Resultado = TextoNull;
		for (x = 0 ; x < ListadoTemp.length ; x++){
			Resultado = Resultado + ListadoTemp[x] + CaracterSplit;
		}
	}
	return Resultado;
}

function ContarSimbolosTexto(Texto){
	var Resultado = NumCero;
	if (Texto != TextoNull ){
		var Temporal = Texto;
		var i = NumCero;
		var Caracter = TextoNull;
		Resultado = NumCero;
		for ( i = 1 ; i <= Texto.length; i++ ){
			Caracter = TextCharsLeft(Temporal, NumUno);
		  
			if ( Caracter.charCodeAt() >= 91 && Caracter.charCodeAt() <=  95 || Caracter.charCodeAt() >= 123 && Caracter.charCodeAt() <=  126 || Caracter.charCodeAt() >= 161 && Caracter.charCodeAt() <=  191 || Caracter.charCodeAt() >= 33 && Caracter.charCodeAt() <=  47 || Caracter.charCodeAt() >= 58 && Caracter.charCodeAt() <=  63 ){
			   Resultado++;
			}
			
			Temporal = TextCharsRight(Texto, Texto.length - i);	
		}	
	}
	return Resultado;
}


/* Funciones de Fecha Esenciales */
function AgregarFecha(Texto){
	var Fecha = new Date();
	var TDia = TextoNull + Dia(Fecha);
	var TMes = TextoNull + Mes(Fecha);
	var TAno = TextoNull + Ano(Fecha);
	var THora = TextoNull + Hora(Fecha);
	var TMinuto = TextoNull + Minuto(Fecha);
	var Resultado = Texto + TDia + TextoBarra + TMes + TextoBarra + TAno + TextoEspacio + THora + TextoDosPuntos + TMinuto + TextoDosPuntos + CeroString + CeroString;
	return Resultado;
} 


function AgregarFechaConLabel(Texto){
	var Fecha = new Date();
	var TDia = TextoNull + Dia(Fecha);
	var TMes = TextoNull + Mes(Fecha);
	var TAno = TextoNull + Ano(Fecha);
	var THora = TextoNull + Hora(Fecha);
	var TMinuto = TextoNull + Minuto(Fecha);
	var Resultado = TDia + TextoBarra + TMes + TextoBarra + TAno + TextoEspacio + THora + TextoDosPuntos + TMinuto + TextoDosPuntos + CeroString + CeroString;
	return Texto + '<label style="color: red;">' + Resultado + "</label><br>\n<br>";
}

function TraerFechaAhora(){
    var Traer = new Date();
    return Traer;
}
function DiaSemana( FechaTempo ) {
    var TemporalDate = FechaTempo.getDay();
    return TemporalDate;
}
function Dia( FechaTempo ) {
    var TemporalDate = TextoNull + FechaTempo.getDate();    
	if (TemporalDate.length == 1){ 
		TemporalDate = CeroString + TemporalDate; 
	}	
    return TemporalDate;		
}
function Mes( FechaTempo ) {
    var Retorno = FechaTempo.getMonth();
    Retorno++;
	var TemporalDate = TextoNull + Retorno;
	if (TemporalDate.length == 1){ 
		TemporalDate = CeroString + TemporalDate; 
	}	
    return TemporalDate;
}
function Ano( FechaTempo ) {
    var TemporalDate = TextoNull + FechaTempo.getFullYear();
	if (TemporalDate.length == 2){ 
		TemporalDate = CeroString + TemporalDate; 
	}
    return TemporalDate;
}
function Hora( FechaTempo ){
    var TemporalDate = TextoNull + FechaTempo.getHours();    
	if (TemporalDate.length == 1){ 
		TemporalDate = CeroString + TemporalDate; 
	}
    return TemporalDate;		
}
function Minuto( FechaTempo ){
    var TemporalDate = TextoNull + FechaTempo.getMinutes();  
	if (TemporalDate.length == 1){ 
		TemporalDate = CeroString + TemporalDate; 
	}
    return TemporalDate;		
}
function Segundo( FechaTempo ){
    var TemporalDate = TextoNull + FechaTempo.getSeconds(); 
	if (TemporalDate.length == 1){ 
		TemporalDate = CeroString + TemporalDate; 
	}
    return TemporalDate;		
}

/* Funciones sobre Palabras de un Texto */
function TextWordsCount(Texto){
	var Cuenta = JSCero;
	if (Texto == JSNullString){
		Cuenta = JSCero;
	}else{	
		var n = JSCero;
		Texto = Texto.replaceAll(JSSaltoLinea, JSEspacioBlanco);
		Texto = Texto.replaceAll(JSStringComa, JSNullString);
		Texto = Texto.replaceAll(",", JSEspacioBlanco);
		Texto = Texto.replaceAll(";", JSEspacioBlanco);
		Texto = Texto.replaceAll(":", JSEspacioBlanco);
		Texto = Texto.replaceAll("!", JSEspacioBlanco);
		Texto = Texto.replaceAll("-", JSEspacioBlanco);
		Texto = Texto.replaceAll("+", JSEspacioBlanco);
		Texto = Texto.replaceAll("(", JSEspacioBlanco);
		Texto = Texto.replaceAll(")", JSEspacioBlanco);
		Texto = Texto.replaceAll("[", JSEspacioBlanco);
		Texto = Texto.replaceAll("]", JSEspacioBlanco);
		Texto = Texto.replaceAll("¿", JSEspacioBlanco);
		Texto = Texto.replaceAll("?", JSEspacioBlanco);
		Texto = Texto.replaceAll("¡", JSEspacioBlanco);
		var SubTexto = Texto.split(" ");
		for (n = JSUno ; n <= SubTexto.length; n++){
			if (SubTexto[n - JSUno] != JSNullString){	
				Cuenta++;
			}			
		}	
	}
	return Cuenta;
}
function TextNumbersCount(Texto){
	var Cuenta = JSCero;
	if (Texto == JSNullString){
		Cuenta = JSCero;
	}else{	
		var n = JSCero;
		Texto = Texto.replaceAll(JSSaltoLinea, JSEspacioBlanco);
		Texto = Texto.replaceAll(JSStringComa, JSNullString);
		Texto = Texto.replaceAll(",", JSEspacioBlanco);
		Texto = Texto.replaceAll(";", JSEspacioBlanco);
		Texto = Texto.replaceAll(":", JSEspacioBlanco);
		Texto = Texto.replaceAll("!", JSEspacioBlanco);
		Texto = Texto.replaceAll("-", JSEspacioBlanco);
		Texto = Texto.replaceAll("+", JSEspacioBlanco);
		Texto = Texto.replaceAll("(", JSEspacioBlanco);
		Texto = Texto.replaceAll(")", JSEspacioBlanco);
		Texto = Texto.replaceAll("[", JSEspacioBlanco);
		Texto = Texto.replaceAll("]", JSEspacioBlanco);
		Texto = Texto.replaceAll("¿", JSEspacioBlanco);
		Texto = Texto.replaceAll("?", JSEspacioBlanco);
		Texto = Texto.replaceAll("¡", JSEspacioBlanco);
		Texto = Texto.replaceAll("/", JSEspacioBlanco);
		Texto = Texto.replaceAll("<", JSEspacioBlanco);
		Texto = Texto.replaceAll(">", JSEspacioBlanco);
		var SubTexto = Texto.split(JSEspacioBlanco);
		for (n = JSUno ; n <= SubTexto.length; n++){
			if (SubTexto[n - JSUno] != JSNullString){	
				if (TextIsNumber(SubTexto[n - JSUno]) == true) {
					Cuenta++;
				}
			}			
		}	
	}
	return Cuenta;
}

/* Funciones sobre números en el texto */
function TextIsNumber(Texto){
	var EsNumero = false;
	var EsReal = false;
	var i = JSCero;
	var ElNumero = JSNullString + Texto;
	for (i = JSUno; i <= Texto.length; i++){
		var T = TextCharsRight(ElNumero, JSUno);
		if (parseInt(T) == JSCero || parseInt(T) == JSUno || parseInt(T) == JSDos || parseInt(T) == JSTres || parseInt(T) == JSCuatro || parseInt(T) == JSCinco || parseInt(T) == JSSeis || parseInt(T) == JSSiete || parseInt(T) == JSOcho || parseInt(T) == JSNueve ){
			EsNumero = true;
		}else{
			if (EsReal == false && T == JSStringComa) {
				EsNumero = true;
				EsReal = true;
			}else{
				EsNumero = false;
				EsReal = false;
				break;
			}
		}
		ElNumero = TextCharsLeft(Texto, Texto.length - i );
	}
	if (TextCharsLeft(Texto, JSUno) == JSStringComa || TextCharsRight(Texto, JSUno) == JSStringComa) {
		return false;
	}else{
		return EsNumero;
	}
}
function TextIsNumberFloat(Texto){
	var EsNumero = false;
	var EsReal = false;
	var i;
	var ElNumero = JSNullString + Texto;
	for (i = 1; i <= Texto.length; i++){
		var T = TextCharsRight(ElNumero, JSUno);
		if (parseInt(T) == JSCero || parseInt(T) == JSUno || parseInt(T) == JSDos || parseInt(T) == JSTres || parseInt(T) == JSCuatro || parseInt(T) == JSCinco || parseInt(T) == JSSeis || parseInt(T) == JSSiete || parseInt(T) == JSOcho || parseInt(T) == JSNueve ){
			EsNumero = true;
		}else{
			if (EsReal == false && T == JSStringComa) {
				EsNumero = true;
				EsReal = true;
			}else{
				EsNumero = false;
				EsReal = false;
				break;
			}
		}
		ElNumero = TextCharsLeft(Texto, Texto.length - i );
	}
	if (TextCharsLeft(Texto, JSUno) == JSStringComa || TextCharsRight(Texto, JSUno) == JSStringComa) {
		return false;
	}else{
		return EsReal;
	}
}

/* Funcion de cuenta de Palabras Exactas en el Texto */ 
function TextWordCount(Texto, Palabra){
	var Retorno = JSCero;
	if (Texto == JSNullString || Palabra == JSNullString){
		Retorno = JSCero;
	}else{
		var Longitud = Texto.length;
		var SubTexto = Texto.replaceAll(Palabra, JSNullString);
		var LongitudSinPalabra = SubTexto.length;
		if (SubTexto != JSNullString ){
			Retorno = (Longitud - LongitudSinPalabra) / Palabra.length;
		}
	}
	return Retorno;
}

/* Funcion esencial de cuenta de caracteres de un texto */ 
function TextCharsCount(Texto){
	if (Texto == JSNullString ){
		return JSCero;
	}else{
		return Texto.length;
	}
}

/* Funciones Left y Right Para Coger Caracteres de Izquierda y Derecha esenciales */
function TextCharsLeft(Texto, Longitud){
	if (Texto == JSNullString ){
		return JSNullString;
	}else{
		if (typeof(Longitud) != "number"){
			return JSNullString;
		}else{
			if ( Texto.length <= Longitud ){
				return Texto;
			}else{
				return Texto.substring(JSCero, Longitud);
			}	
		}	
	}
}
function TextCharsRight(Texto, Longitud){
	if (Texto == JSNullString ){
		return JSNullString;
	}else{
		if (typeof(Longitud) != "number"){
			return JSNullString;
		}else{
			if ( Texto.length <= Longitud ){
				return Texto;
			}else{
				return Texto.substring(Texto.length - Longitud, Texto.length);
			}
		}	
	}
}

/* Funcion de número natural aleatorio */
function RandomNumber(Minimo,Maximo){
	var Retorno = JSCero;
	if (typeof(Minimo) != "number"){
		Minimo = JSCero;
	}
	if (typeof(Maximo) != "number"){
		Maximo = JSCero;
	}
    if (Minimo != JSCero && Maximo != JSCero){
		if (Minimo < Maximo ){ 
			var posibilidades = Maximo - Minimo;
			var a = Math.random() * posibilidades;
			a = Math.floor(a);
			Retorno = parseInt(Minimo + a);
		}else{
			var posibilidades = Minimo - Maximo;
			var a = Math.random() * posibilidades;
			a = Math.floor(a);
			Retorno = parseInt(MAximo + a);
		}
	}else{
		Retorno = JSCero;
	}
	return Retorno;
}