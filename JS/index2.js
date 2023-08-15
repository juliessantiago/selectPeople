/*-----------------------------pegando valores-----------------------*/ 
let nome = document.getElementById("nome"); 
let funcao = document.getElementById("funcao"); 
let corpoTab = document.getElementById("corpoTabela");
let data = document.getElementById("data");
let inputData = document.getElementById("inputData");
let pessoas = [];

if(JSON.parse(sessionStorage.getItem("pessoas")) !== null){
    pessoas = JSON.parse(sessionStorage.getItem("pessoas"));
    montaTabela();
}
function criaArray() {
    if(nome.value!="" && funcao.value!=""){
        let pessoa = {
            nome: nome.value, 
            funcao: funcao.value
        }
        pessoas.push(pessoa)
        sessionStorage.setItem("pessoas",JSON.stringify(pessoas))
        // console.log(pessoas)
        montaTabela()
        limpaForm()
    }else{
        Swal.fire('Preencha os campos')
    }
    
}
function montaTabela(){
    if(data.value){
        let objData = new Date(data.value)
        const dataFormat = (objData.toLocaleDateString('pt-BR', {
            timeZone: 'UTC',
        }))
         let linha = `<tr>${dataFormat}</td>`
        inputData.innerHTML = linha;
    }
    
    let conteudo = `<tr><td>Nome</td><td>Função</td></tr>`;
    for(let i=0; i<pessoas.length; i++){
        conteudo+=`
        
        <tr> 
            <td>${pessoas[i].nome}</td>
            <td>${pessoas[i].funcao}</td>
        </tr>
    `
    }
   
    corpoTab.innerHTML = conteudo;
}
function limpaForm(){
    nome.value = ""
    funcao.value = ""
   
}
function limpar(){
    pessoas = [];
    corpoTab.innerHTML = "";
    sessionStorage.clear;
    localStorage.clear;
}

function criaPlanilha() {
  if(pessoas.length!="" && pessoas.length!=null){
    var csv_data = [];
    //seleciona cada linha de dado
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        //seleciona cada coluna de dado
        var cols = rows[i].querySelectorAll('td,th');
        //cria linha no csv 
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {
            csvrow.push(cols[j].innerHTML);
        }
        //separa coluna com vírgula
        csv_data.push(csvrow.join(","));
    }
    //faz separação de nova linha
    csv_data = csv_data.join('\n');

    downloadCSV(csv_data);
  }else{
    Swal.fire("Crie uma tabela primeiro");
  }
    
}

function downloadCSV(csv_data) {
 
    // Criar arquivo csv e colocar dados dentro

    arquivoCSV = new Blob([csv_data], {
        type: "text/csv"
    });

    //Cria link temporário para download
    var temp_link = document.createElement('a');

    //Baixa arquivo
    temp_link.download = "designacoes.csv";
    var url = window.URL.createObjectURL(arquivoCSV);
    temp_link.href = url;

    //Link não deve ficar visível
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    //Click automático pra iniciar download 
    temp_link.click();
    document.body.removeChild(temp_link);
}