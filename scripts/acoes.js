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