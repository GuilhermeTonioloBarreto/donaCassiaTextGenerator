// adicionar tamanhos de marmita no html
const tamanhoArray = [
	"Pequeno", 
	"Médio",
	"Grande"
];
let divTamanho = document.getElementById("divTamanho");
adicionarRadioButton(tamanhoArray, divTamanho, "tamanho");




// adicionar misturas no html
const misturaArray = [
	"Feijoada",
	"Bife Grelhado",
	"Lasanha",
	"Frango Assado",
	"Costelinha Suina Assada",
	"File Frango Grelhado",
	"Linguiça Frita",
	"Omelete Presunto Queijo",
	"Omelete Queijo",
	"Ovo Frito"
];
let divMistura = document.getElementById("divMistura");
adicionarCheckBox(misturaArray, divMistura, "mistura");




const acompanhamentoArray = [
	"Farofa",
	"Couve Refogado",
	"Torresmo",
	"Batata Frita"
];
let divAcompanhamento = document.getElementById("divAcompanhamento");
adicionarCheckBox(acompanhamentoArray, divAcompanhamento, "acompanhamento");



const sucoDeLaranjaArray = [
	"Sim",
	"Não"
];
let divSucoDeLaranja = document.getElementById("divSucoDeLaranja");
adicionarRadioButton(sucoDeLaranjaArray, divSucoDeLaranja, "sucoDeLaranja");




/* funcao que cria sequencia de radio buttons
	array = é um array com a sequencia a ser exibida nos radio buttons
	div = é a div os radio buttons serão adicionados
	nome = é o nome que a sequência de radio buttons terão. Também ajuda a saber qual a classe de cada radioButton
*/
function adicionarRadioButton(array, div, nome){
	let form = document.createElement("form");
		
	for(element of array){
		let divRadio = document.createElement("div");
		divRadio.classList.add("form-check");
		
		// criação do radio button
		let input = document.createElement("input");
		input.classList.add("form-check-input");
		input.type = "radio";
		input.id = element;
		input.name = nome;
		input.value = element;
		
		// atribui a classe do radiobutton
		if(nome == "tamanho"){
			input.classList.add("tamanhos");		
		}
		else if(nome == "sucoDeLaranja"){
			input.classList.add("sucoDeLaranjas");		
		}
		
		// quando clicado, o radiobutton ativará a geraçõa de texto
		input.addEventListener("click", escreverTexto);
		
		let label = document.createElement("label");
		label.classList.add("form-check-label");
		label.for = element;
		label.innerHTML = element;
		
		divRadio.appendChild(input);
		divRadio.appendChild(label);
		
		form.appendChild(divRadio);
	}
	
	div.appendChild(form);	
}




/* funcao que cria sequencia de checkbox
	array = é um array com a sequencia a ser exibida nos checkbox
	div = é a div os checkbox serão adicionados
	nome = ajuda a saber qual classe de cada checkbox
*/
function adicionarCheckBox(array, div, nome){
	let form = document.createElement("form");
		
	for(element of array){
		let divCheckBox = document.createElement("div");
		divCheckBox.classList.add("form-check");
		
		// criação do checkbox
		let input = document.createElement("input");
		input.classList.add("form-check-input");
		input.type = "checkbox";
		input.id = element;
		input.name = element;
		input.value = element;
		
		// atribui a classe do checkbox
		if(nome == "mistura"){
			input.classList.add("misturas");		
		}
		else if(nome == "acompanhamento"){
			input.classList.add("acompanhamentos");		
		}
		
		// quando clicado, o checkbox ativará a geraçõa de texto
		input.addEventListener("click", escreverTexto);
		
		let label = document.createElement("label");
		label.classList.add("form-check-label");
		label.for = element;
		label.innerHTML = element;
		
		divCheckBox.appendChild(input);
		divCheckBox.appendChild(label);
		
		form.appendChild(divCheckBox);
	}
	
	div.appendChild(form);
}

/* -------------------------------------------------- */

/* escrever texto no textarea*/
let divTextArea = document.getElementById("divTextArea");

function escreverTexto() {
	let texto = "";
	
	// verifica qual tamanho de marmita foi selecionado
	texto += "Tamanho da marmita:    ";
	const tamanhos = document.getElementsByClassName("tamanhos");
	for (item of tamanhos){
		if(item.checked){
			texto += item.value;
			break;		
		}	
	}
	texto += "\n";
	
	
	
	// verifica qual mistura de marmita foi selecionado
	texto += "Mistura da marmita:    ";
	const misturas = document.getElementsByClassName("misturas");
	for (item of misturas){
		if(item.checked){
			texto += item.value + " / ";	
		}
	}
	// retirar a última barra de separação
	texto = texto.substring(0, texto.length - 3);
	texto += "\n";
	
	
	
	// verifica qual acompanhamento de marmita foi selecionado
	texto += "Acompanhamento da marmita:    ";
	const acompanhamentos = document.getElementsByClassName("acompanhamentos");
	for (item of acompanhamentos){
		if(item.checked){
			texto += item.value + " / ";	
		}
	}
	// retirar a última barra de separação
	texto = texto.substring(0, texto.length - 3);
	texto += "\n";
	
	
	
	// verifica se a pessoa irá querer o suco de laranja
	texto += "Suco de laranja:    ";
	const sucoDeLaranjas = document.getElementsByClassName("sucoDeLaranjas");
	for (item of sucoDeLaranjas){
		if(item.checked){
			texto += item.value;
			break;		
		}	
	}
	texto += "\n";
	
	// atribui o valor de texto ao textarea
	divTextArea.innerHTML = texto;
	
}

