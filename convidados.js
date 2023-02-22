let inputNome = document.querySelector('#inputNome');
let adicionarTarefa = document.querySelector('#adicionarTarefa');
let listaNome = document.querySelector('#listaNome');


inputNome.addEventListener('keypress', (e) =>{
    if(e.keyCode == 13){
        let nome = {
            nome: inputNome.value,
            id: gerarID(),
        }
        adicionarNome(nome);
    }
})

adicionarTarefa.addEventListener('click', (e) => {
    let nome = {
        nome: inputNome.value,
        id: gerarID(),
    }
    adicionarNome(nome);
    inputNome.value = '';
})


function gerarID(){
    return Math.floor(Math.random() * 3000);
}

function adicionarNome(nome){
    let li = criarLi(nome);
    listaNome.appendChild(li);

}

function criarLi(nome){
    let li = document.createElement('li')
    li.id = nome.id;

    let span = document.createElement('span')
    span.classList.add('nomes')
    span.innerHTML = nome.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao')
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'editar('+nome.id+')')

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao')
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+nome.id+')')


    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);


    li.appendChild(span)
    li.appendChild(div);

    return li;

}


function editar(idNome){
    
}

function excluir(idNome){
    let confirmacao = window.confirm ('Tem certeza que deseja excluir?');
    if(confirmacao){
        let li = document.getElementById("" + idNome + '');
        if(li){
            listaNome.removeChild(li);

        }
    }
}