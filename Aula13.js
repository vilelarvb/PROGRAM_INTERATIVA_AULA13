/*RAFAEL VILELA BALBINO*/

let contas = {
    numeroConta : 5486273622,
    tipoConta : "CC",
    saldo : 27771,
    titular : "Abigael Natte",
}

console.log(contas)


function novaConta(nCont, tipConta, salCont, nTitular){
    this.nuConta = nCont;
    this.tipConta = tipConta;
    this.saldoCont = salCont;
    this.titular = nTitular
}

let cont1 = new novaConta(5486273622,	"Conta Corrente",	27771,	"Abigael Natte")
let cont2 = new novaConta(1183971869,	"Conta Poupança",	8675,	"Ramon Connell")
let cont3 = new novaConta(9582019689,	"Conta Poupança",	27363,	"Jarret Lafuente")
let cont4 = new novaConta(1761924656,	"Conta Poupança",	32415,	"Ansel Ardley")
let cont5 = new novaConta(7401971607,	"Conta Poupança",	18789,	"Jacki Shurmer")
let cont6 = new novaConta(630841470,	"Conta Corrente",	28776,	"Jobi Mawtus")
let cont7 = new novaConta(4223508636,	"Conta Corrente",	2177,	"Thomasin Latour")
let cont8 = new novaConta(185979521,	"Conta Poupança",	25994,	"Lonnie Verheijden")
let cont9 = new novaConta(3151956165,	"Conta Corrente",	7601,	"Alonso Wannan")
let cont10 = new novaConta(2138105881,	"Conta Poupança",	33196,	"Bendite Huggett")

let listaClientes = [cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10]

let banco = {
    clientes = listaClientes
}

console.log(banco.listaClientes)