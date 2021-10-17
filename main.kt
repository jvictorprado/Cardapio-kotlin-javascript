// Grupo : Eduarda Ottoni, Jean Coelho, João Victor Prado, Julia Araujo

import kotlin.browser.*
import org.w3c.dom.*

data class Alimentos(val nome:String,val preco:Float, val detalhe: String, var prox: Alimentos?)

val alimentosEncadeados = Alimentos("Hamburguer", 10f, "Pão Viena 60g, Carne Bovina 180g, Alface, Tomate, Cebola Caramelizada, Mostarda e Mel.",
Alimentos("Coxinha", 5.99f, "Peitos de frango desfiados a mão, misturados a um queijo do reino premium e envoltos numa camada crocante de massa Panko.", 
Alimentos("Empada", 7.5f, "Com um delicioso recheio de bacalhau refogado ao molho de tomate, ervas finas e azeitona preta.", 
Alimentos("Torta", 10f, "Deliciosa fatia de uma torta feita com bolo de chocolate, recheio de doce de leite e crocante de amendoim, coberto com raspas de chocolate ao leite." ,
Alimentos("Brigadeiro", 5f, "Brigadeiro branco com canela, polvilhado com mix de açúcar e canela e um toque de doce de leite.", null)))))


//Imprimir Alimentos Ordenados
@JsName("imprimirAlimentosOrdenados")
fun imprimirAlimentosOrdenados(){
  val divAlimento = document.getElementById("listaalimentos")
  if (divAlimento==null) {
		println("alimento não encontrado")
		return
	}

    divAlimento.innerHTML = ""
    val aux = ordenarAlimentos(alimentosEncadeados)
    forEach(aux,{ x,y,z -> divAlimento.innerHTML += """ 
    <li class="listaralimentos"> 
      <div class="alimentos">
        <span class="sAlimento" style="padding-left:10px;"> $x </span>
        <span class="sPreco" style="padding-left:10px;">RS $y </span>
      </div>
      <a href="./tipomodal.html/?$x?$z">
        <div class="index">Detalhes → </div>
      </a>
    </li>
    """ })
}


//Ordenar uma lista de alimentos
fun ordenarAlimentos(a : Alimentos?): Alimentos? = ordenarAlimentosAux(a,null)

fun ordenarAlimentosAux(alm1: Alimentos?, alm2: Alimentos?): Alimentos? {
  when(alm1){
      is Alimentos -> {
        return ordenarAlimentosAux(alm1.prox, insereOrdenado(alm2, alm1.nome,alm1.preco, alm1.detalhe))
      }
      else -> {
        return alm2
      } 
  }
}

//Inserir alimentos em ordem
fun insereOrdenado(alm: Alimentos?, n: String, novo:Float, novoDet:String): Alimentos{
  when(alm){
    is Alimentos-> {
      if(n > alm.nome){
        return Alimentos(alm.nome, alm.preco, alm.detalhe,insereOrdenado(alm.prox, n,novo,novoDet))
      }else{
        return Alimentos(n,novo,novoDet,alm)
      } 
    } else -> {
      return Alimentos(n,novo,novoDet,null)
    }
  }
}

@JsName("listarAlimentos")
fun listarAlimentos(){
  val divAlimento = document.getElementById("listaalimentos")
    if (divAlimento==null) {
        println("error elemento não encontrado")
        return
    }
divAlimento.innerHTML= ""
  forEach(alimentosEncadeados,{ x,y,z -> divAlimento.innerHTML += """ 
    <li class="listaralimentos"> 
      <div class="alimentos">
        <span class="sAlimento" style="padding-left:10px;"> $x </span>
        <span class="sPreco" style="padding-left:10px;">RS $y </span>
      </div>
      <a href="./tipomodal.html/?$x?$z">
        <div class="index">Detalhes → </div>
      </a>
    </li>
    """ })
}

/* Função que printa se um alimento estiver na lista */
@JsName("printPertence")
fun printPertence(){
  val divAlimento = document.getElementById("alimentosPertence")
   if (divAlimento==null) {
		println("error elemento não encontrado")
		return
	}
  val inputPertence = document.getElementById("nomePertence") as HTMLInputElement
  val auxiliar = pertence(alimentosEncadeados,inputPertence.value)
  divAlimento.innerHTML= ""

  if(auxiliar==true) divAlimento.innerHTML= """ 
  <div class="pertenceALista">
  <strong>${inputPertence.value}</strong> está no cardápio ✔️
  </div>
  """    
  else divAlimento.innerHTML= """
  <div class="pertenceALista">
  <strong>${inputPertence.value}</strong> não está no cardápio ✖️
  </div>
  """
}

/* Função que checa se um alimento está em uma lista */
fun pertence(lista:Alimentos?, nome:String):Boolean{
if(lista == null ) return false 
else if (lista.nome == nome ) return true 
else return pertence(lista.prox,nome)
}

// Aplica o forEach na lista de alimentos passando nome, preço e detalhe
fun forEach(lista : Alimentos?, comando: (String ,Float, String)->Unit ) { 
  if ( lista == null ) null
  else {
      comando(lista.nome,lista.preco, lista.detalhe)
      forEach(lista.prox, comando)
  }
} 

fun main() {

}

fun adicionar(lista:Alimentos?,nome:String, precoNovo:Float, detalheNovo:String):Alimentos?{
println(lista)
if(lista == null) return null
else if( lista.prox == null) {
  lista.prox = Alimentos(nome,precoNovo,detalheNovo,null)
}
else return Alimentos(lista.nome,lista.preco, lista.detalhe,adicionar(lista.prox,nome,precoNovo,detalheNovo) )
return null;
}

@JsName("adicionarLista")
fun adicionarLista(){
  val divAlimento = document.getElementById("listaalimentos")
 if (divAlimento==null) {
		println("error elemento não encontrado")
		return
	}

  val inputNome = document.getElementById("nome") as HTMLInputElement
  val inputPreco = document.getElementById("preco") as HTMLInputElement
  val inputDetalhe = document.getElementById("detalhe") as HTMLInputElement
  val auxiliar = adicionar(alimentosEncadeados, inputNome.value, inputPreco.value.toFloat(), inputDetalhe.value)

  divAlimento.innerHTML= ""

  forEach(auxiliar,{ x,y,z -> 
  divAlimento.innerHTML += """ 
  <li class="listaralimentos"> 
    <div class="alimentos">
      <span class="sAlimento" style="padding-left:10px;"> $x </span>
      <span class="sPreco" style="padding-left:10px;">RS $y </span>
    </div>
    <a href="./tipomodal.html/?$x?$z">
      <div class="index">Exibir Detalhes ➕ </div>
    </a>
  </li>
""" })

  imprimirAlimentosOrdenados()

}