let teste = document.getElementById("teste");
let selecionado;

let pessoasAudio = [
    "Maria", "Henrique", "Daniele", "Graciele", "Ezequiel", "Mariana", "Mizael", "Jessiana", "Gileade", 
    "Vitória", "Josué", "Julie", "Ismael", "Jaqueline", "Gabriel"
]
let funcAudio = [
    "Zoom", "Áudio", "Vídeo", "Microfone 1", "Microfone 2"
]
let pessoasInd = [
    "Ronaldo", "Ismael", "Mizael", "Ezequiel", "Moisés", "Josué", "Gabriel"
]

let funcInd = [
    "Abertura/Fechamento", "Entrada", "Auditório", "Substituto"
]

function rodaroda(){
    selecionado = document.querySelector('input[name="funcoes"]:checked').value
    nome.innerHTML = ""
    funcao.innerHTML = ""
    if(selecionado =="audio"){

        for(let i=0; i<pessoasAudio.length; i++){
            let item = document.createElement('option');
                item.appendChild(document.createTextNode(pessoasAudio[i]));
                nome.appendChild(item);
        }

        for(let i=0; i<funcAudio.length; i++){
            let item = document.createElement('option');
                item.appendChild(document.createTextNode(funcAudio[i]));
                funcao.appendChild(item);
        }
       
    }else{
        if(selecionado =="indicadores"){        
            for(let i=0; i<pessoasInd.length; i++){
                let item = document.createElement('option');
                    item.appendChild(document.createTextNode(pessoasInd[i]));
                    nome.appendChild(item);
            }

            for(let i=0; i<funcInd.length; i++){
                let item = document.createElement('option');
                    item.appendChild(document.createTextNode(funcInd[i]));
                    funcao.appendChild(item);
            }

        }
    }
}


// let arrayFuncoes = [
//     "Indicador Zoom", 
//     "Vídeo", 
//     "Áudio", 
//     "Microfone 1", 
//     "Microfone 2"
// ]


// let arrayIndicadores = [
//     "Abertura/Fechamento", 
//     "Entrada",
//     "Auditório",
//     "Substituto"
// ]