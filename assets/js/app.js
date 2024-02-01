
let texto_entrada = document.getElementById("texto_entrada");
let texto_saida = document.getElementById("texto_saida");
let btnCriptografar = document.getElementById("btnCriptografar");
let btnDescriptografar = document.getElementById("btnDescriptografar");

function encripta(){

    let texto = texto_entrada.value;

    if( texto === "" ){
        alert("O campo texto precisa ter algum texto para criptografar.");
        return; 
    } else {

        let regex = /[^a-zA-Z 0-9]+/g;
        
        // testa se há caracteres especiais no texto
        if(regex.test(texto)){
            alert("Remova os caracteres especiais do tetxo para encriptar.");
            return;
        }

        // passa texto para caixa baixa
        let novoTexto = textoCaixaBaixa(texto);        

        let msg = "";
        let l;
        let i;
        let j = 0;
        let ch;
        ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";

        for ( i = 0; i < novoTexto.length; i++ ){

            j++;
            l = (asc(novoTexto.substr(i,1))+(asc(ch.substr(j,1))));

            if ( j == 50 ){
                j = 1;
            }

            if ( l > 255){
                l -= 256;
            }

            msg += (chr(l));
        }

        
        texto_entrada.value = '';
        texto_saida.value = msg;

        btnCriptografar.setAttribute('disabled', true);
        btnDescriptografar.removeAttribute('disabled');
        btnCopiar.style.display = "block";
    }
}

function desencripta(){

    let texto = texto_saida.value;
	
    let msg = "";
	var l;
	var i;
	var j = 0;
	var ch;
	ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";

	for ( i = 0; i < texto.length; i++){
		j++;
		l = (asc(texto.substr(i,1))-(asc(ch.substr(j,1))));
		
        if ( j == 50){
			j=1;
		}
		if ( l < 0){
			l += 256;
		}
		msg += (chr(l));
	}
    texto_saida.value = '';
	texto_entrada.value = msg;

    btnCriptografar.removeAttribute('disabled');
    btnDescriptografar.setAttribute('disabled', true);
    btnCopiar.style.display = "none";
}

function asc(String){
	return String.charCodeAt(0);
}

function chr(AsciiNum){
	return String.fromCharCode(AsciiNum)
}

function entradaParaSaida(){

    let valor = texto_entrada.value

    if(valor === ''){
        alert("Insira um texto para encriptar.");
    }

    texto_saida.value = valor;
    texto_entrada.value = '';
}

function saidaParaEntrada(){
    let valor = texto_saida.value
    texto_entrada.value = valor;
    texto_saida.value = '';
}

let btnCopiar = document.querySelector("#btnCopiar");

btnCopiar.addEventListener("click",function(){        
    let textoCopiado = document.querySelector("#texto_saida").value;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado para a área de transferência.");
});

function textoCaixaBaixa(str){
    return str.toLowerCase();
}