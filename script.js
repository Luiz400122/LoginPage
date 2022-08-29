var nome = prompt('Digite seu nome:')
var senha = document.getElementById('senha');
var user = document.getElementById('cpf');
var p = document.getElementById('p');
var bt = document.querySelector('.subt');
var modal = document.querySelector('.modal')
var janela = document.querySelector('.janela')



user.addEventListener('keypress', ()=>{
    let x = user.value.length

    if(x === 3 || x === 7){
        user.value += "."
    } else if(x === 11)
    {
        user.value += "-"
    }
})

var btnclose = document.querySelector('.p').addEventListener('click', ()=>{
    let modal = document.querySelector('.modal')
    let janela = document.querySelector('.janela')
    
    modal.style.display = 'none'
    janela.style.display = 'none'

    location.reload();
})

    bt.addEventListener('click', ()=>{
    if(senha.value != "" && user.value != ""){
       alert('Dados enviados!')
        modal.style.display ='block'
        janela.style.display = 'block'

    }else if (senha.value == "" || user.value == ""){
        alert('Completar formulário (user e senha).');
    }
})



var h4 = document.querySelector('h4')
var data = new Date()
var hora = data.getHours();
if(hora<12){
    h4.innerText = 'Bom dia, '+ nome + '!'
}
else if(hora<18)
{
    h4.innerText = 'Boa tarde, ' + nome+'!'
}else
{
    h4.innerText = 'Boa noite, '+ nome+'!'
}

var span = document.querySelector('span')
var x = document.getElementById('nome')
var p = document.getElementById('p')
bt.addEventListener('click', ()=>{

    span.innerHTML = user.value;
    p.innerHTML = senha.value
    p.style.backgroundColor = 'yellow'
  
})
    
function carregando(){
    bt.addEventListener('click'. salvar());
}


var db = openDatabase('dbtips', '1.0', 'banco', 2*1024*1024)
        db.transaction(function(c){
            c.executeSql('CREATE TABLE tips (Id INTEGER PRIMARY KEY,User TEXT, Senha TEXT)');

        });
    
        function salvar(){
            db.transaction(function (c){
                c.executeSql("INSERT INTO tips (User, Senha) VALUES(?,?)", [user, senha]);
            })
        }