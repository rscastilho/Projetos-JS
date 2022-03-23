(function calcularTabuada(num){
    try {
        let resultado =0;
        for (let i = 0; i <= 10; i++){
            if(num === undefined) throw Error ("Erro!: Digite numeros validos para calcular a tabuada")
            if(typeof num !== 'number') throw Error ("Erro!: Digite somente numeros");
            resultado = `${num} x ${i} = ${num * i}`;
            console.log(resultado);
        }
        validaNumero(num)
    } catch (error) {
        console.log(error.message)
    }
})(3)


function validaNumero(resultado){
    if(resultado%2===0){
        console.log(`${resultado} é numero par.`)
    } else{
        console.log(`${resultado} é numero impar.`)
    }
}

