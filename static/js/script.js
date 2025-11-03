function tablasMultiplicar() {
    let num = parseInt(prompt("Ingrese un número: "));
    let tabla = `tabla de ${num}: `;
    //Inicio de bucle
    for (let i = 1; i <= 10; i++) {
        tabla += `\n ${num} x ${i} = ${num * i}`
    }
    alert(tabla);
}

function numerosPares() {
    let num = parseInt(prompt("Ingresar un número: "));
    let resultado = `los numeros pares de ${num} son: `;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            resultado += ` ${i}`
        }
    }
    alert(resultado);
}

function conteoPalabras() {
    let word = prompt("Dime un numero");
    let cont = 0
    for (let i = 0; i < word.length; i++) {
        cont++
    }
    alert(`La palabra "${word} tiene ${cont} letras."`)
}

function factorial() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial"));
    let factori = 1;
    let largo = "1";
    for (let i = 2; i <= numero; i++) {
        largo += ` * ${i}`
        factori *= i;
    }
    alert(`El factorial de ${numero} es : ${largo} = ${factori}`)
}

function numeroImpares() {
    let numero = parseInt(prompt("Ingrese un número: "));
    let respuesta = 0;
    let largoImpar = "1"
    for (let i = 2; i <= numero; i++){
        if(i % 2 != 0){
            respuesta += i
            largoImpar += ` + ${i}`
        }
    }
    respuesta += 1
    alert(`Las suma de ${largoImpar} = ${respuesta}`)
}