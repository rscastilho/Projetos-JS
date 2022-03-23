function informarIdade(anoNascimento){
    let data = new Date();
    const AnoAtual = data.getFullYear();
    let idade = AnoAtual - anoNascimento
    console.log(idade)
}


informarIdade(1981)
