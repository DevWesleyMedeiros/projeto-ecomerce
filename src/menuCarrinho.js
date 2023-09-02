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
export function adicionarProdutoCarrinho(){
    const containerProdutoCarrinho = document.getElementById('produtos-carrinho')
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button>
      <i class="fa-sharp fa-solid fa-circle-xmark fa-shake text-slate-500 absolute top-0 right-0 p-2 hover:text-slate-900"></i>
    </button>
    <img src="assets/img/product-1.jpg" alt="imagem-produto1" class="h-24 rounded-lg">
    <div class="py-2">
      <p class="text-slate-900 text-s">Camisa larga com bolsos</p>
      <p class="text-slate-400 text-xm">Tamanho: M</p>
      <p class="text-green-700 text-lg">$70</p>
    </div>
  </article>`
  
    containerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho
}