var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
const maximo=10;
const minimo=-10;


function increment() {
	if (currentNumber < maximo){
	currentNumber ++;
	currentNumberWrapper.innerHTML = currentNumber;
	return false;}
	else {
		alert("Contagem máxima atingida.");
		return true;}
}

function decrement() {
	if (currentNumber > minimo){
	currentNumber --;
	currentNumberWrapper.innerHTML = currentNumber;
	return false;}
	else {
		alert("Contagem mínima atingida.")
		return true;}
	}

		


	




