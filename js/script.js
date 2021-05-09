let operador = "";

function insert(num){
    if(num === "+" || num === "-" || num === "*" || num === "/" ){
        operador = num;  
    }

    let number = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = number + num;
}


function clean(){
    document.getElementById('resultado').innerHTML ="";
}


function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


}
const somar = (number, num) => parseInt(number) + parseInt(num);

const subtrair = ( number, num ) => number - num; 

const multiplicar = ( number, num) =>  number * num; 

function dividir(number, num){
    if(num == 0){
        return "Erro"
    }else{
    return number / num;
    }
}


function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    let texto = resultado.split(operador);
    if(operador === "+"){
        const calculo = somar(texto[0], texto[1]);
        return clean(), insert(calculo);
    }else if(operador === "-"){
        const calculo = subtrair(texto[0], texto[1]);
        return clean(), insert(calculo);
    }else if(operador === "*"){
        const calculo = multiplicar(texto[0], texto[1]);
        return clean(), insert(calculo);
    }else if(operador === "/"){
        const calculo = dividir(texto[0], texto[1]);
        return clean(), insert(calculo);
    }
}
