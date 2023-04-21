// ***********************************************************************************************************
// ***********************************************************************************************************
// Autor: Pol Flórez Viciana
// Fecha Inicial: 17/09/2022 
// Fecha Final:   21/04/2023
// ***********************************************************************************************************
// ***********************************************************************************************************

// ***********************************************************************************************************
// ***** Funciones *******************************************************************************************
// ***********************************************************************************************************
// LongitudTexto(Texto); Devuelve la Longitud de Dígitos de un Texto  
// TextoIzquierda(Texto,Longitud); Devuelve el Texto desde el principio de la Izquierda hasta la Longitud en dígitos del texto
// TextoDerecha(Texto,Longitud); Devuelve el Texto desde el principio de la Derecha hasta la Longitud en dígitos del texto 
// TextoReverso(Texto); Devuelve el Texto al Reves
// TextoMinuscula(Texto); Convierte todo el Texto a letra minuscula
// TextoMayuscula(Texto); Convierte todo el Texto a letra mayuscula
// TextoLetraCapital(Texto); Pone en Mayuscula la Primera Letra del Texto y las palabras de después del punto (.) o los dos puntos (:) ignorando etiquetas
// RemplazarPrimerTexto(TextoOriginal, OrigenTexto, TextoFinal); Reemplaza en el TextoOriginal el primer texto que coincida con OrigenTexto y lo cambia por TextoFinal
// RemplazarUltimoTexto(TextoOriginal, OrigenTexto, TextoFinal); Reemplaza en el TextoOriginal el último texto que coincida con OrigenTexto y lo cambia por TextoFinal
// RemplazarTodoTexto(TextoOriginal, OrigenTexto, TextoFinal); Reemplaza en el TextoOriginal el todos los textos que coincidan con OrigenTexto y los cambia por TextoFinal
// CuentaLaPalabraTexto(Texto, Palabra); Cuenta las Palabras coincidentes con Palabra en el Texto
// ContarPalabrasTexto(Texto); Cuenta todas las palabras existentes en el Texto
// ContarNumerosTexto(Texto); Cuenta la cantidad de números escritos en el Texto
// ContarLineasTexto(Texto); Cuenta los Saltos de Línea Existentes en el Texto
// ContarEspaciosTexto(Texto); Devuelve el número de espacios que hay en un texto
// CambiarEspaciosPorSaltosTexto(Texto); Cambia los Espacios Por Saltos de Línea en el Texto
// CambiarSaltosPorEspaciosTexto(Texto); Cambia los Saltos de Línea Por Espacios en el Texto
// OrdenarLinesTexto(Texto); Ordena alfabeticamente las líneas del Texto
// OrdenarPalabrasTexto(Texto,CaracterSplit); Ordena alfabeticamente el Texto por registros separados por CaracterSplit  
// EliminarSimbolos(Texto); Elimina simbolos en el Texto
// ***********************************************************************************************************
// ***********************************************************************************************************

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

// Funciones de Fecha

function AgregarFecha(Texto){
	var Fecha = new Date();
	var TDia = TextoNull + Dia(Fecha);
	var TMes = TextoNull + Mes(Fecha);
	var TAno = TextoNull + Ano(Fecha);
	var THora = TextoNull + Hora(Fecha);
	var TMinuto = TextoNull + Minuto(Fecha);
	var Resultado = TDia + TextoBarra + TMes + TextoBarra + TAno + TextoEspacio + THora + TextoDosPuntos + TMinuto + TextoDosPuntos + CeroString + CeroString;
	return Resultado + "\n" + Texto;
}

function AgregarFechaConLabel(Texto){
	var Fecha = new Date();
	var TDia = TextoNull + Dia(Fecha);
	var TMes = TextoNull + Mes(Fecha);
	var TAno = TextoNull + Ano(Fecha);
	var THora = TextoNull + Hora(Fecha);
	var TMinuto = TextoNull + Minuto(Fecha);
	var Resultado = TDia + TextoBarra + TMes + TextoBarra + TAno + TextoEspacio + THora + TextoDosPuntos + TMinuto + TextoDosPuntos + CeroString + CeroString;
	return '<label style="color: red;">' + Resultado + "</label>\n" + Texto;
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

// Funciones de Herramienta

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
			Caracter = TextoIzquierda(Temporal, NumUno);
			if (Caracter.charCodeAt() == SaltodeLinea.charCodeAt()){
				if (Linea != TextoNull){
					ResultadoFinal = ResultadoFinal + "<li>" + Linea + "</li>" + Caracter;	
				}
				Linea = TextoNull;
			}else{
				Linea = Linea + Caracter;
			}
			Temporal = TextoDerecha(Texto, Texto.length - i);
		}
		if (Linea != TextoNull){
			ResultadoFinal = ResultadoFinal + "<li>" + Linea + "</li>\n</ul>";	
		}else{
			ResultadoFinal = ResultadoFinal + "\n</ul>";	
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
			Caracter = TextoIzquierda(Temporal, NumUno);
			if (Caracter.charCodeAt() == SaltodeLinea.charCodeAt()){
				if (Linea != TextoNull){
					ResultadoFinal = ResultadoFinal + "<li>" + Linea + "</li>" + Caracter;	
				}
				Linea = TextoNull;
			}else{
				Linea = Linea + Caracter;
			}
			Temporal = TextoDerecha(Texto, Texto.length - i);
		}
		if (Linea != TextoNull){
			ResultadoFinal = ResultadoFinal + "<li>" + Linea + "</li>\n</ol>";	
		}else{
			ResultadoFinal = ResultadoFinal + "\n</ol>";	
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
			Caracter = TextoIzquierda(Temporal, NumUno);
		  
			if ( Caracter.charCodeAt() >= 91 && Caracter.charCodeAt() <=  95 || Caracter.charCodeAt() >= 123 && Caracter.charCodeAt() <=  126 || Caracter.charCodeAt() >= 161 && Caracter.charCodeAt() <=  191 || Caracter.charCodeAt() >= 33 && Caracter.charCodeAt() <=  47 || Caracter.charCodeAt() >= 58 && Caracter.charCodeAt() <=  63 ){
			   Resultado++;
			}
			
			Temporal = TextoDerecha(Texto, Texto.length - i);	
		}	
	}
	return Resultado;
}

function RemplazarSaltosPorBR(Texto){
	var ResultadoFinal = Texto;
	if (Texto != TextoNull ){
		ResultadoFinal = TextoNull;
		var Temporal = Texto;
		var i = NumCero;
		var Caracter = TextoNull;
		ResultadoFinal = TextoNull; 
		for ( i = 1 ; i <= Texto.length; i++ ){
			Caracter = TextoIzquierda(Temporal, NumUno);
			if (Caracter.charCodeAt() == SaltodeLinea.charCodeAt()){
				ResultadoFinal = ResultadoFinal + "<br>" + Caracter;
			}else{
				ResultadoFinal = ResultadoFinal + Caracter;
			}
			Temporal = TextoDerecha(Texto, Texto.length - i);
		}
		ResultadoFinal = ResultadoFinal + "<br>" + SaltodeLinea;
	}
	return ResultadoFinal;
}

function TextoEliminaHTML(Texto){
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
			Caracter = TextoIzquierda(Temporal, NumUno);
			var SiguienteCaracter = TextoIzquierda(Temporal, NumDos);
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
			Temporal = TextoDerecha(Texto, Texto.length - i);	
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
			Caracter = TextoIzquierda(Temporal, NumUno);
			var SiguienteCaracter = TextoIzquierda(Temporal, NumDos);
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
							Resultado = Resultado + TextoMayuscula(Caracter);
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
			Temporal = TextoDerecha(Texto, Texto.length - i);	
		}
	}
	return Resultado;
}

function ContarRepeticionesTexto(Texto){
	var Resultado = NumCero;
	if (Texto != TextoNull ){
		var Temporal = Texto;
		var i = NumCero;
		var EstaenPalabra = false;
		var ContoPalabra = false;
		var Caracter = TextoNull;
		var Palabra = TextoNull;
		var ListadoPalabras = [];
		for ( i = 1 ; i <= Texto.length; i++ ){
			Caracter = TextoIzquierda(Temporal, NumUno);		  
			if ( Caracter.charCodeAt() >=  65 && Caracter.charCodeAt() <=  90 || Caracter.charCodeAt() >=  97 && Caracter.charCodeAt() <=  122 || Caracter.charCodeAt() >=  192 && Caracter.charCodeAt() <=  255 ){
				EstaenPalabra = true;
				Palabra = Palabra + Caracter;
			}else{
				EstaenPalabra = false;
			}
			if (EstaenPalabra == true && ContoPalabra == false){
				ContoPalabra = true;
			}else{
				if (EstaenPalabra == false && ContoPalabra == true){
					ContoPalabra = false;
					var ExistePalabra = false;
					for ( m = 0 ; m < ListadoPalabras.length; m++ ){
						var PalabraTemporal1 = TextoMinuscula(Palabra);
						var PalabraTemporal2 = TextoMinuscula(ListadoPalabras[m]);
						
						if ( ExistePalabra == false && PalabraTemporal1.length > NumDos ){
							if (PalabraTemporal1 == PalabraTemporal2 ){
								ExistePalabra = true;
								Resultado++;
							}
						}		
					}
					if (ExistePalabra == false ){ 
						ListadoPalabras.push(Palabra); 
					}
					Palabra = TextoNull;
					
				}
			} 
			Temporal = TextoDerecha(Texto, Texto.length - i);	
		}
	}
	return Resultado;
}

function CuentaLaPalabraTexto(Texto, Palabra){
	var Resultado = NumCero;
	if ( Texto != TextoNull && Palabra != TextoNull && Texto.length > Palabra.length ){
		var LargadaTempo1 = Texto.length;
		var TextoRemplazado = RemplazarTodoTexto(Texto, Palabra, TextoNull);	
		var LargadaTempo2 = TextoRemplazado.length;
		var LargadaTempo3 = Palabra.length;
		Resultado = (LargadaTempo1 - LargadaTempo2) / LargadaTempo3;
	}
	return Resultado;
}

function EliminarSimbolos(Texto){
	var Resultado = TextoNull;
	if (Texto != TextoNull ){
		var Tempo1 = RemplazarTodoTexto(Texto, TextoComillasDobles, TextoEspacio);
		var Tempo2 = RemplazarTodoTexto(Tempo1, TextoComillas, TextoEspacio);
		var Tempo3 = RemplazarTodoTexto(Tempo2, TextoParentesis1, TextoEspacio);
		var Tempo4 = RemplazarTodoTexto(Tempo3, TextoParentesis2, TextoEspacio);
		var Tempo5 = RemplazarTodoTexto(Tempo4, TextoIgual, TextoEspacio);
		var Tempo6 = RemplazarTodoTexto(Tempo5, TextoInterrogante1, TextoEspacio);
		var Tempo7 = RemplazarTodoTexto(Tempo6, TextoInterrogante2, TextoEspacio);
		var Tempo8 = RemplazarTodoTexto(Tempo7, TextoExclamacion1, TextoEspacio);
		var Tempo9 = RemplazarTodoTexto(Tempo8, TextoExclamacion2, TextoEspacio);
		var Tempo10 = RemplazarTodoTexto(Tempo9, TextoAnd, TextoEspacio);
		var Tempo11 = RemplazarTodoTexto(Tempo10, TextoPorcentaje, TextoEspacio);
		var Tempo12 = RemplazarTodoTexto(Tempo11, TextoDolar, TextoEspacio);
		var Tempo13 = RemplazarTodoTexto(Tempo12, TextoMultiplicar, TextoEspacio);
		var Tempo14 = RemplazarTodoTexto(Tempo13, TextoSuma, TextoEspacio);
		var Tempo15 = RemplazarTodoTexto(Tempo14, TextoPleka, TextoEspacio);
		var Tempo16 = RemplazarTodoTexto(Tempo15, TextoAsterisco, TextoEspacio);
		var Tempo17 = RemplazarTodoTexto(Tempo16, TextoBarra, TextoEspacio);
		var Tempo18 = RemplazarTodoTexto(Tempo17, TextoContraBarra, TextoEspacio);
		Resultado = RemplazarTodoTexto(Tempo18, TextoEspacio + TextoEspacio, TextoEspacio);
	}
	//alert(Resultado);
	return Resultado;
}

function ContarNumerosTexto(Texto){
	var Resultado = NumCero;
	if (Texto != TextoNull ){
		var Temporal = Texto;
		var i = NumCero;
		var EstaenPalabra = false;
		var ContoPalabra = false;
		var Caracter = TextoNull;
		Resultado = NumCero;
		for ( i = 1 ; i <= Texto.length; i++ ){
			Caracter = TextoIzquierda(Temporal, NumUno);
		  
			if ( Caracter.charCodeAt() >=  48 && Caracter.charCodeAt() <=  57 || Caracter.charCodeAt() == 44 || Caracter.charCodeAt() == 46 ){
			   EstaenPalabra = true;	
			}else{
				EstaenPalabra = false;
			}
			if (EstaenPalabra == true && ContoPalabra == false){
				ContoPalabra = true;
			}else{
				if (EstaenPalabra == false && ContoPalabra == true){
					ContoPalabra = false;
					Resultado++;
				}
			}
			Temporal = TextoDerecha(Texto, Texto.length - i);	
		}	
	}		
	return Resultado;
}

function ContarPalabrasTexto(Texto){
	var Resultado = NumCero;
	if (Texto != TextoNull ){
		var Temporal = Texto;
		var i = NumCero;
		var EstaenPalabra = false;
		var ContoPalabra = false;
		var Caracter = TextoNull;
		
		for ( i = 1 ; i <= Texto.length; i++ ){
			Caracter = TextoIzquierda(Temporal, NumUno);		  
			if ( Caracter.charCodeAt() >=  65 && Caracter.charCodeAt() <=  90 || Caracter.charCodeAt() >=  97 && Caracter.charCodeAt() <=  122 || Caracter.charCodeAt() >=  192 && Caracter.charCodeAt() <=  255 ){
				EstaenPalabra = true;
			}else{
				EstaenPalabra = false;
			}
			if (EstaenPalabra == true && ContoPalabra == false){
				ContoPalabra = true;
			}else{
				if (EstaenPalabra == false && ContoPalabra == true){
					ContoPalabra = false;
					Resultado++;
				}
			} 
			Temporal = TextoDerecha(Texto, Texto.length - i);	
		}
	}
	return Resultado;
}

function CambiarEspaciosPorSaltosTexto(Texto){
	var TextoFinal = RemplazarTodoTexto(Texto, TextoEspacio, SaltodeLinea);
	return TextoFinal;
}

function CambiarSaltosPorEspaciosTexto(Texto){
	var TextoFinal = RemplazarTodoTexto(Texto, SaltodeLinea, TextoEspacio);
	return TextoFinal;
}

function ContarEspaciosTexto(Texto){
	var LongitudOriginal = Texto.length;
	var TextoFinal = RemplazarTodoTexto(Texto, TextoEspacio, TextoNull);
	return (LongitudOriginal - TextoFinal.length) / TextoEspacio.length;
}
 
function ContarLineasTexto(Texto){
	var Resultado = NumCero;
	if ( Texto != TextoNull ){
		var LongitudOriginal = Texto.length;
		var TextoFinal = RemplazarTodoTexto(Texto, SaltodeLinea, TextoNull);
		Resultado = ((LongitudOriginal - TextoFinal.length) / SaltodeLinea.length) + NumUno;
	}
	return Resultado;
}

function TextoMinuscula(Texto){
	return Texto.toLowerCase();
}

function TextoMayuscula(Texto){
	return Texto.toUpperCase();
}

function TextoReverso(Texto){
	var Resultado = Texto;
	if (Texto != TextoNull){
		var i;
		Resultado = TextoNull;
		var Tempo = Texto;
		var Caracter = TextoNull;
		for (i = Texto.length - NumUno; i >= NumCero; i--){
			Caracter = TextoDerecha(Tempo, NumUno);
			Resultado = Resultado + Caracter;
			Tempo = TextoIzquierda(Texto, i);
		}
	}
	return Resultado;
}

function RemplazarPrimerTexto(TextoOriginal, OrigenTexto, TextoFinal){
	var Resultado = TextoOriginal;
	if (TextoOriginal != TextoNull && OrigenTexto != TextoNull){
		Resultado = TextoOriginal.replace(OrigenTexto,TextoFinal);
	}
	return Resultado;
}

function RemplazarUltimoTexto(TextoOriginal, OrigenTexto, TextoFinal){
	var Resultado = TextoOriginal;
	if (TextoOriginal != TextoNull && OrigenTexto != TextoNull){
		var Texto = TextoReverso(TextoOriginal);
		var Origen = TextoReverso(OrigenTexto);
		var Final = TextoReverso(TextoFinal);
		var Tempo = Texto.replace(Origen,Final);
		Resultado = TextoReverso(Tempo);
	}	
	return Resultado;
}

function RemplazarTodoTexto(TextoOriginal, OrigenTexto, TextoFinal){
	var Resultado = TextoOriginal;
	var Texto = TextoOriginal;
	if (TextoOriginal != TextoNull && OrigenTexto != TextoNull){
		var i;
		Resultado = TextoNull;
		for (i=0; i < TextoOriginal.length; i++){
			Resultado = Texto.replace(OrigenTexto,TextoFinal);
			Texto = Resultado;
		}
	}	
	return Resultado;
}

function LongitudTexto(Texto){
	return Texto.length;
}

function TextoIzquierda(Texto,Longitud){
	var Resultado = TextoNull;
	if (Texto == TextoNull ){
		Resultado = TextoNull;
	}else{
		if (typeof(Longitud) != NumNumero){
			Resultado = TextoNull;
		}else{
			if ( Texto.length <= Longitud ){
				Resultado = Texto;
			}else{
				Resultado = Texto.substring(NumCero, Longitud);
			}	
		}	
	}
	return Resultado;
}

function TextoDerecha(Texto,Longitud){
	var Resultado = TextoNull;
	if (Texto == TextoNull ){
		Resultado = TextoNull;
	}else{
		if (typeof(Longitud) != NumNumero){
			Resultado = TextoNull;
		}else{
			if ( Texto.length <= Longitud ){
				Resultado = Texto;
			}else{
				Resultado = Texto.substring(Texto.length - Longitud, Texto.length);
			}
		}	
	}
	return Resultado;
}