function LimpiarHTML(){
	document.getElementById("TextoPrincipal").value = "";
	CambioenTextoPrincipal();
}
function LimpiarRemplazar(){
	document.getElementById("Palabra1").value = "";
	document.getElementById("Palabra2").value = "";
	document.getElementById("SaltoPalabra1").checked = false;
	document.getElementById("SaltoPalabra2").checked = false;
}
function ReemplazarTodo(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	if (Texto1 != ""){
	
		var CheckedProp1 = document.getElementById("SaltoPalabra1");
		var CheckedProp2 = document.getElementById("SaltoPalabra2");
		
		var Texto2 = document.getElementById("Palabra1").value;
		var Texto3 = "";
		
		
		if (CheckedProp1.checked == false ){
			Texto2 = document.getElementById("Palabra1").value;
		}else{
			Texto2 = "\n";
		}
		if (Texto2 != "") {
			if (CheckedProp2.checked == false ){
				Texto3 = document.getElementById("Palabra2").value;
				if (CheckedProp1.checked == false ){
					document.getElementById("TextoPrincipal").value = Texto1.replaceAll(Texto2,Texto3);
				}else{
					document.getElementById("TextoPrincipal").value = Texto1.replaceAll("\n",Texto3);
				}	
			}else{
				document.getElementById("TextoPrincipal").value = Texto1.replaceAll(Texto2,"\n");
				Texto3 = "\n";
			}
			CambioenTextoPrincipal();
			Ir1();
		}	
	}	
}
function EspaciosPorSaltos(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	if (Texto1 != ""){
		var Texto2 = " "; 
		var Texto3 = "\n"; 
		
		if (Texto2 != ""){
			document.getElementById("TextoPrincipal").value = Texto1.replaceAll(Texto2,Texto3);
		}	
	}	
}
function SaltosPorEspacios(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	if (Texto1 != ""){
		var Texto2 = "\n"; 
		var Texto3 = " " ; 
		
		if (Texto2 != ""){
			document.getElementById("TextoPrincipal").value = Texto1.replaceAll(Texto2,Texto3);
		}	
	}	
}
function MedidorSEO(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	
	var Resultado = 0;
	var SubResultado = 0;
	
	var Digitos = TextCharsCount(Texto1);
	var Palabras = TextWordsCount(Texto1) + 1; 
	var Numeros = TextNumbersCount(Texto1) + 1; 
	var Simbolos = ContarSimbolosTexto(Texto1);
	var Lineas = parseInt(TextWordCount(Texto1, "\n")) + 1;
	var Espacios = TextWordCount(Texto1, " ") + 1;
	var MediaDP = (Palabras + Numeros);
	var MediaEspacios = (Espacios * 100) / Digitos;
	var PorcentajePalabras = ((Palabras * 100) / MediaDP);
	var PorcentajeNumeros = ((Numeros * 100)/ MediaDP);
	var NotacionPalabras = (PorcentajePalabras + PorcentajeNumeros);
	SubResultado = "" + (NotacionPalabras - MediaEspacios); 
	
	Resultado = TextCharsLeft(SubResultado, 5);
		
	var TipoTexto = "Ninguno.";
	
	if (Digitos > 0 ){
		if (Digitos > 0){
			if (Lineas == 1){
				TipoTexto = "Título de Pagina.";
			}else{
				TipoTexto = "Post de Pagina.";
			}
		}
		if (Digitos > 60){
			if (Lineas == 1){
				TipoTexto = "Descripción de Pagina.";
			}else{
				TipoTexto = "Post de Pagina.";
			}
		}
		if (Digitos > 160){
			TipoTexto = "Post de Pagina.";
		}
		if (Digitos > 280){
			TipoTexto = "Texto Extenso de Pagina";
		}
		document.getElementById("Resultado2").innerHTML = "Nota Global: " + Resultado + "% Tipo de Texto: " + TipoTexto;
	}else{
		document.getElementById("Resultado2").innerHTML = "Nota Global: 0% Tipo de Texto: " + TipoTexto;
	}
}
function AgregarEnlace(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = Texto1 + '<a href="" target="_BLANK" style="color: limegreen;" >Texto</a>';
	CambioenTextoPrincipal();
}
function AgregarLabel(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = Texto1 + '<label style="color: white;" >Texto</label>';
	CambioenTextoPrincipal();
}
function AgregarH1(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = Texto1 + '<h1 style="color: blue;" >Texto</h1>';
	CambioenTextoPrincipal();
}
function MaximizarHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = TextMayuscula(Texto1);
	CambioenTextoPrincipal();
}
function MinimizarHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = TextMinuscula(Texto1);
	CambioenTextoPrincipal();
}
function AgregarFechaAhora(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = AgregarFecha(Texto1);
	CambioenTextoPrincipal();
}
function OrdenarFilasHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = OrdenarLineasTexto(Texto1);
	CambioenTextoPrincipal();
}
function ListadoEtiquetadoHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = CrearListadoEtiquetado(Texto1);
	CambioenTextoPrincipal();
}
function ListadoEnumeradoyEtiquetadoHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = CrearListadoEtiquetadoEnumerados(Texto1);
	CambioenTextoPrincipal();
}
function CambiarLetraCapitalHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = TextoLetraCapital(Texto1);
	CambioenTextoPrincipal();
}
function PostCompletoHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = AgregarFechaConLabel(Texto1) + "\n<b>\n\n</b>\n<br>\n<i>\n\n</i>\n<br>\n";
	CambioenTextoPrincipal();
}
function CambioSaltosPorBRHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = RemplazarSaltosPorBR(Texto1);
	CambioenTextoPrincipal();
}
function EliminarHTML(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	document.getElementById("TextoPrincipal").value = TextDeleteHTML(Texto1);
	CambioenTextoPrincipal();
}
function CambioenTextoPrincipal(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	var Digitos = TextCharsCount(Texto1);
	var Lineas = TextWordCount(Texto1, "\n");
	MedidorSEO();
	document.getElementById("ResultadoGeneral").innerHTML = TextWordsCount(Texto1) + " Palabras , " + TextNumbersCount(Texto1) + " Números , " + TextCharsCount(Texto1) + " Dígitos , " + ContarSimbolosTexto(Texto1) + " Símbolos , " + (TextWordCount(Texto1,"\n") + 1) + " Líneas.<br>" + document.getElementById("Resultado2").innerHTML;
}
function ContarPalabras(){
	var Texto1 = document.getElementById("TextoPrincipal").value;
	var Texto2 = document.getElementById("Palabra").value;
	document.getElementById("Resultado1").innerHTML = TextWordCount(Texto1,Texto2) + " Veces la Palabra " + Texto2 ;	
}
function Ir1(){
	document.getElementById("Pantalla1").style = "display: inline-block; background-color: rgb(16,16,128);";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: none;";
	document.getElementById("Pantalla4").style = "display: none;";
	document.getElementById("Pantalla5").style = "display: none;";
}
function Ir2(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: inline-block;";
	document.getElementById("Pantalla3").style = "display: none;";
	document.getElementById("Pantalla4").style = "display: none;";
	document.getElementById("Pantalla5").style = "display: none;";
}
function Ir3(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: inline-block;";
	document.getElementById("Pantalla4").style = "display: none;";
	document.getElementById("Pantalla5").style = "display: none;";
}
function Ir4(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: none;";
	document.getElementById("Pantalla4").style = "display: inline-block;";
	document.getElementById("Pantalla5").style = "display: none;";
}
function Ir5(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: none;";
	document.getElementById("Pantalla4").style = "display: none;";
	document.getElementById("Pantalla5").style = "display: inline-block;";
}