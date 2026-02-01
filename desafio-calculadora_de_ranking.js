
let historico=[
    {nome:"Lucas", xp:11000},
    {nome:"Hiro", xp:3000}
];

function calculadoraDeRanking(nome,vitorias){
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
    let rank =calculadoraDeRanking(historico[i].nome,historico[i].xp);

    console.log(` ${rank}`);
}