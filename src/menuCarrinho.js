import { catalago } from "./ultilidades"


const idsProdutosCarrinhoComQuantidade = {

}
function incrementarQuantidadeProduto(idProduto){

}

function abrirCarrinho(){
    document.getElementById('carrinho').classList.add('right-[0px]')
    document.getElementById('carrinho').classList.remove('right-[-360px]')
}

function fecharCarrinho(){
    document.getElementById('carrinho').classList.remove('right-[0px]')
    document.getElementById('carrinho').classList.add('right-[-360px]')
}

export function inicializarCarrinho(){
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')
  botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
}
export function adicionarProdutoCarrinho(idProduto){
  if(idProduto in idsProdutosCarrinhoComQuantidade){
    incrementarQuantidadeProduto(idProduto)
  }
  idsProdutosCarrinhoComQuantidade[idProduto] = 1
  const produto = catalago.find(p => p.id === idProduto)
  const containerProdutoCarrinho = document.getElementById('produtos-carrinho')
  const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
  <button id="fechar-carrinho" class="absolute top-0 right-2">
    <i class="fa-sharp fa-solid fa-circle-xmark fa-shake text-slate-500 absolute top-0 right-2 p-2 hover:text-slate-900"></i>
  </button>
    <img 
      src="./assets/img/${produto.imagem}" alt="carrinho: ${produto.nome}" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-s">${produto.nome}</p>
    <p class="text-slate-400 text-xm">Tamanho: M</p>
    <p class="text-green-700 text-lg">$${produto.preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <button>-</button>
    <p id="quantidade-${produto.id}"class='ml-2'>${idsProdutosCarrinhoComQuantidade[produto.id]}</p>
    <button class='ml-2'>+</button>
  </div>
  </article>`
  
  containerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho
}