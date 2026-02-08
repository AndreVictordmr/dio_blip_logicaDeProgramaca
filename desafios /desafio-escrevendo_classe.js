class Heroi{
    constructor(nome,tipo,idade){
        this.nome=nome;
        this.tipo=tipo;
        this.idade=idade;
    }

    atacar(){
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                    ataque = "magia";
                break;
            case "monje":
                    ataque = "artes marciais";
                break;
            case "guerreiro":
                    ataque = "espada";
                break;
            case "ninja":
                    ataque = "shuriken";
                break;
            
        }
        return `O ${this.tipo} atacou usando ${ataque}`;

    }
}

const grupo=[{nome:"leo", classe:"guerreiro",idade:20},{nome:'maria',classe:"mago",idade:20}];

for (let i = 0; i < grupo.length; i++) {
    let party= new Heroi(grupo[i].nome,grupo[i].classe,grupo[i].idade);
    
    console.log(party.atacar());
}