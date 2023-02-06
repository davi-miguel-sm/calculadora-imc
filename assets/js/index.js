const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const inputPeso = e.target.querySelector('#GET-peso');
	const inputAltura = e.target.querySelector('#GET-altura');

	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	if (!peso) {
		setResultado('Peso Inválido', false);
		return;
	}

	if (!altura) {
		setResultado('Altura Inválida', false);
		return;
	}

	const imc = calculaImc(peso, altura);

	classificaImc(imc);
});

function criaElemento(elem) {
	return document.createElement(elem);
}

function calculaImc(peso, altura) {
	return (peso / altura ** 2).toFixed(2);
}

function setResultado(msg, ehValido = true) {
	const resultado = document.querySelector('#resultado');
	resultado.innerHTML = '';
	console.log(msg);
	const p = criaElemento('p');
	p.innerHTML = msg;

	resultado.appendChild(p);
}

function classificaImc(imc) {
	console.log(imc);
	const classificacao = [
		'Abaixo do peso',
		'Peso normal',
		'Excesso de peso',
		'Obesidade classe 1',
		'Obesidade classe 2',
		'Obesidade classe 3',
	];

	switch (true) {
		case imc <= 18.5:
			setResultado(classificacao[0]);
			break;
		case imc > 18.5 && imc <= 24.99:
			setResultado(classificacao[1]);
			break;
		case imc > 25.0 && imc <= 29.99:
			setResultado(classificacao[2]);
			break;
		case imc > 30.0 && imc <= 34.99:
			setResultado(classificacao[3]);
			break;
		case imc > 35.0 && imc <= 39.99:
			setResultado(classificacao[4]);
			break;
		case imc >= 40.0:
			setResultado(classificacao[5]);
			break;
	}
}
