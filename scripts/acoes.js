/*
alert('Hello world!')

*/

var resp = window.document.getElementById('saida');

//lembre-se que toda variável declarada aqui fora possui 
// veja mais sobre escopo no seu material em pdf,

function acao1() {
    resp.innerHTML += '<p>clicou no primeiro botão</p>'
    let a = prompt( 'informe um número' );
    if (a == 6) {
          resp.innerHTML += '<h1>igual de 6</h1>';
    }else {
        resp.innerHTML += '<h1>diferente de 6</h1>';
    }
}

function acao2(){
    resp.innerHTML += '<p>clicou no segundo botão</p>'
    
    switch (prompt("como esta o tempo? use chuvoso, ensolarado ou nublado")){
        //switch("chuvoso"){
        case "ensolarado":
            resp.innerHTML +="<h1>vista roupas leves!</h1>";
            break;
        case "nublado":
             resp.innerHTML +='<h1>pode aproveitar!!!</h1>';
             break 
        case "chuvoso":
            resp.innerHTML +="<h1>vista roupas pra chuva!</h1>";
            break;
        default:
             resp.innerHTML +='<h1>Vá Lá fora!!!</h1>';
             break; 
    }
}

function acao3() {
    resp.innerHTML += '<p>clicou no terceiro botão</p>'

    
    
}