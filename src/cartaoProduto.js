import { adicionarProdutoCarrinho } from "./menuCarrinho";
import { catalago } from "./ultilidades";

export function renderizarCatalago(){
  for(const produtoCatalago of catalago){
    const cartaoProduto = `<div class="border-solid shadow-xl rouded-lg shadow-slate-400 w-40 m-2 flex flex-col p-2 justify-between" id="card-produto-${produtoCatalago.id}">
      <img src="./assets/img/${produtoCatalago.imagem}"class="group hover:scale-110 duration-300 my-3 rouded-lg ">
      <p class="text-slate-sm">${produtoCatalago.marca}</p>
      <p class="text-slate-sm">${produtoCatalago.nome}</p>
      <p class="text-slate-sm bg-slate-950>$${produtoCatalago.preco}"</p>
      <button id="adicionar-${produtoCatalago.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700"><i class="fa-solid fa-cart-plus"></i></button>
    </div>`
    
    document.getElementById('container-produto').innerHTML += cartaoProduto;
  }

  for(const produtoCatalago of catalago){
    document.getElementById(`adicionar-${produtoCatalago.id}`).addEventListener('click', () => adicionarProdutoCarrinho(produtoCatalago.id))
  }
}


