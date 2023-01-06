var botonEncriptar = document.querySelector("button#botonEncriptar");
var botonDesencriptar = document.querySelector("button#botonDesencriptar");
var entradaTexto = document.querySelector("textarea#entrada_Texto");
var salidaTexto = document.querySelector("textarea#salida_Texto");
var botonCopia = document.getElementById("button#boton_Copiar");
/*let text = entradaTexto.value;

function myFunction() {
  var x = document.getElementById('myDIV');
  if (/[A-Z-À-Ú-à-ù]/.test(text) || entradaTexto.value === '') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}*/

function encriptarTexto() {
  let text = entradaTexto.value;
    if (/[A-Z-À-Ú-à-ù]/.test(text)) {
      salidaTexto.innerHTML = '¡Uy! Algo salio mal....(No deben ser utilizados letras con acentos ni caracteres especiales)'
      document.getElementById("myDIV").style.display = "block";
      document.getElementById("myDIV").style.width = "14rem";
      document.getElementById("myDIV").style.height = "13rem";
      document.getElementById("myDIV").style.top = "14rem";
      document.getElementById("myDIV").style.left = "12rem";
    } else if (entradaTexto.value === '') {
      salidaTexto.innerHTML = '¿Seguro digitaste algo?, revisa nuevamente.'
      document.getElementById("myDIV").style.display = "block";
      document.getElementById("myDIV").style.width = "16rem";
      document.getElementById("myDIV").style.height = "15rem";
      document.getElementById("myDIV").style.top = "12rem";
      document.getElementById("myDIV").style.left = "11rem";
    } else {
      var txt = text.replace(/e/g, "enter");
      var txt = txt.replace(/i/g, "imes");
      var txt = txt.replace(/a/g, "ai");
      var txt = txt.replace(/o/g, "ober");
      var txt = txt.replace(/u/g, "ufat");
      document.getElementById("myDIV").style.display = 'none';

      salidaTexto.innerHTML = `${txt}`;
    }
}

function desencriptarTexto() {
    var text = entradaTexto.value;
    if (/[A-Z-À-Ú-à-ù]/.test(text)) {
      salidaTexto.innerHTML = '¡Uy! Algo salio mal....No deben ser utilizados letras con acentos ni caracteres especiales'
    } else if (entradaTexto.value === '') {
      salidaTexto.innerHTML = '¿Seguro digitaste algo?, revisa nuevamente.'
    } else {
      var txt = text.replace(/enter/g, "e");
      var txt = txt.replace(/imes/g, "i");
      var txt = txt.replace(/ai/g, "a");
      var txt = txt.replace(/ober/g, "o");
      var txt = txt.replace(/ufat/g, "u");
  
      salidaTexto.innerHTML = `${txt}`;
    }
}

function copiarTexto() {
    if (entradaTexto.value.length === 0) {
        salidaTexto.innerHTML = "¡Uy! Algo salio mal....Debes tener algun texto para copiar";
    } else {
        var copyText = salidaTexto.innerHTML;
        navigator.clipboard.writeText(copyText).then(() => {
            salidaTexto.innerHTML = "Excelente, copiaste el texto";
        });
    }
}