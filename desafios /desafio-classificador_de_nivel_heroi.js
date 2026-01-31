
let herois=[
    {nome:"Lucas", xp:11000},
    {nome:"Hiro", xp:3000}
];

function classificacaoRankHeroi(nome,xp){
    let rank="";
    if(xp<1000){
        rank="Ferro";
    }else if(xp<=2000){
        rank="Bronze";
    }else if (xp<=5000) {
        rank="Prata";
    }else if (xp<=7000) {
        rank="Ouro";
    }else if (xp<=8000) {
        rank="Platina";
    }else if (xp<=9000) {
        rank="Ascendente";
    } else if(xp<=10000) {
       rank="Imortal"; 
    }else{
        rank="Radiante";
    }

    return `O Heroi de nome ${nome} esta no Nivel de ${rank}`;
}

for(let i = 0;i<herois.length;i++){
    console.log(classificacaoRankHeroi(herois[i].nome,herois[i].xp));
}