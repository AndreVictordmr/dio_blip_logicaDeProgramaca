
let historico=[
    {nome:"XxHITxX", jogos:{v:10,d:40}},
    {nome:"Olha", jogos:{v:69,d:60}}
];

function calculadoraDeRanking(vitorias){
    let rank="";
    if(vitorias<10){
        rank="Ferro";
    }else if(vitorias<=20){
        rank="Bronze";
    }else if (vitorias<=50) {
        rank="Prata";
    }else if (vitorias<=70) {
        rank="Ouro";
    }else if (vitorias<=80) {
        rank="Platina";
    }else if (vitorias<=90) {
        rank="Ascendente";
    } else if(vitorias<=100) {
       rank="Imortal"; 
    }else{
        rank="Radiante";
    }

    return rank;
}

for(let i = 0;i<historico.length;i++){
    let rank =calculadoraDeRanking(historico[i].jogos.v);

    console.log(`O Herói tem de saldo de **${historico[i].jogos.v}** está no nível de **${rank}**`);
}