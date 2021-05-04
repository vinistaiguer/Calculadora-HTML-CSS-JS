function insert(num){
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

function calcular(){
    let calcular = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(resultado.length);
}


function calcular(){
    function somar(number, num){
        return number + num;
    }

    function subtrair(number, num){
        return number - num;
    }

    function multiplicar(number, num){
        return number * num;
    }

    function dividir(number, num){
        if(num == 0){
            return "Erro"
        }else{
        return number / num;
        }
    }
}



/*
document.addEventListener('keydown', handleKeydow)

function handleKeydow(event){
    const keyPressed = event.key
    if(keyPressed === Number){
        console.log("ok ok")
    }else{
        console.log("ERROU!")
    }
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
        if (resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        }else{
            document.getElementById('resultado').innerHTML = "Sem Valores";
        }
}*/