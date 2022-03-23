function calcularMediaDeAluno(nome, ...nota){
    try {
        if(nome === undefined) throw Error("Digite o nome do aluno")
        let media= (nota.reduce((x,y) => x +=y,0)) / nota.length
        AprovaOuReprova(media, nome)
        console.log(`Sua média é ${media}`)
        
    } catch (error) {
        console.log(error.message)
    }
}

function AprovaOuReprova(media, nome){
    if(media <=6){
        console.log(`${nome} você foi Reprovado`)
    }else{
        console.log(`${nome} você foi Aprovado`)
    }
}

calcularMediaDeAluno('rodrigo',7,6,4,8)