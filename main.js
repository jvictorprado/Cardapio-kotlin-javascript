if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  function Alimentos(nome, preco, detalhe, prox) {
    this.nome = nome;
    this.preco = preco;
    this.detalhe = detalhe;
    this.prox = prox;
  }
  Alimentos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alimentos',
    interfaces: []
  };
  Alimentos.prototype.component1 = function () {
    return this.nome;
  };
  Alimentos.prototype.component2 = function () {
    return this.preco;
  };
  Alimentos.prototype.component3 = function () {
    return this.detalhe;
  };
  Alimentos.prototype.component4 = function () {
    return this.prox;
  };
  Alimentos.prototype.copy_e7j2yk$ = function (nome, preco, detalhe, prox) {
    return new Alimentos(nome === void 0 ? this.nome : nome, preco === void 0 ? this.preco : preco, detalhe === void 0 ? this.detalhe : detalhe, prox === void 0 ? this.prox : prox);
  };
  Alimentos.prototype.toString = function () {
    return 'Alimentos(nome=' + Kotlin.toString(this.nome) + (', preco=' + Kotlin.toString(this.preco)) + (', detalhe=' + Kotlin.toString(this.detalhe)) + (', prox=' + Kotlin.toString(this.prox)) + ')';
  };
  Alimentos.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nome) | 0;
    result = result * 31 + Kotlin.hashCode(this.preco) | 0;
    result = result * 31 + Kotlin.hashCode(this.detalhe) | 0;
    result = result * 31 + Kotlin.hashCode(this.prox) | 0;
    return result;
  };
  Alimentos.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nome, other.nome) && Kotlin.equals(this.preco, other.preco) && Kotlin.equals(this.detalhe, other.detalhe) && Kotlin.equals(this.prox, other.prox)))));
  };
  var alimentosEncadeados;
  function imprimirAlimentosOrdenados$lambda(closure$divAlimento) {
    return function (x, y, z) {
      closure$divAlimento.innerHTML = closure$divAlimento.innerHTML + (' ' + '\n' + '    <li class=' + '"' + 'listaralimentos' + '"' + '> ' + '\n' + '      <div class=' + '"' + 'alimentos' + '"' + '>' + '\n' + '        <span class=' + '"' + 'sAlimento' + '"' + ' style=' + '"' + 'padding-left:10px;' + '"' + '> ' + x + ' <\/span>' + '\n' + '        <span class=' + '"' + 'sPreco' + '"' + ' style=' + '"' + 'padding-left:10px;' + '"' + '>RS ' + y + ' <\/span>' + '\n' + '      <\/div>' + '\n' + '      <a href=' + '"' + './tipomodal.html/?' + x + '?' + z + '"' + '>' + '\n' + '        <div class=' + '"' + 'index' + '"' + '>Detalhes \u2192 <\/div>' + '\n' + '      <\/a>' + '\n' + '    <\/li>' + '\n' + '    ');
      return Unit;
    };
  }
  function imprimirAlimentosOrdenados() {
    var divAlimento = document.getElementById('listaalimentos');
    if (divAlimento == null) {
      println('alimento n\xE3o encontrado');
      return;
    }divAlimento.innerHTML = '';
    var aux = ordenarAlimentos(alimentosEncadeados);
    forEach(aux, imprimirAlimentosOrdenados$lambda(divAlimento));
  }
  function ordenarAlimentos(a) {
    return ordenarAlimentosAux(a, null);
  }
  function ordenarAlimentosAux(alm1, alm2) {
    if (Kotlin.isType(alm1, Alimentos))
      return ordenarAlimentosAux(alm1.prox, insereOrdenado(alm2, alm1.nome, alm1.preco, alm1.detalhe));
    else {
      return alm2;
    }
  }
  function insereOrdenado(alm, n, novo, novoDet) {
    if (Kotlin.isType(alm, Alimentos))
      if (Kotlin.compareTo(n, alm.nome) > 0) {
        return new Alimentos(alm.nome, alm.preco, alm.detalhe, insereOrdenado(alm.prox, n, novo, novoDet));
      } else {
        return new Alimentos(n, novo, novoDet, alm);
      }
     else {
      return new Alimentos(n, novo, novoDet, null);
    }
  }
  function listarAlimentos$lambda(closure$divAlimento) {
    return function (x, y, z) {
      closure$divAlimento.innerHTML = closure$divAlimento.innerHTML + (' ' + '\n' + '    <li class=' + '"' + 'listaralimentos' + '"' + '> ' + '\n' + '      <div class=' + '"' + 'alimentos' + '"' + '>' + '\n' + '        <span class=' + '"' + 'sAlimento' + '"' + ' style=' + '"' + 'padding-left:10px;' + '"' + '> ' + x + ' <\/span>' + '\n' + '        <span class=' + '"' + 'sPreco' + '"' + ' style=' + '"' + 'padding-left:10px;' + '"' + '>RS ' + y + ' <\/span>' + '\n' + '      <\/div>' + '\n' + '      <a href=' + '"' + './tipomodal.html/?' + x + '?' + z + '"' + '>' + '\n' + '        <div class=' + '"' + 'index' + '"' + '>Detalhes \u2192 <\/div>' + '\n' + '      <\/a>' + '\n' + '    <\/li>' + '\n' + '    ');
      return Unit;
    };
  }
  function listarAlimentos() {
    var divAlimento = document.getElementById('listaalimentos');
    if (divAlimento == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }divAlimento.innerHTML = '';
    forEach(alimentosEncadeados, listarAlimentos$lambda(divAlimento));
  }
  function printPertence() {
    var tmp$;
    var divAlimento = document.getElementById('alimentosPertence');
    if (divAlimento == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }var inputPertence = Kotlin.isType(tmp$ = document.getElementById('nomePertence'), HTMLInputElement) ? tmp$ : throwCCE();
    var auxiliar = pertence(alimentosEncadeados, inputPertence.value);
    divAlimento.innerHTML = '';
    if (auxiliar === true)
      divAlimento.innerHTML = ' ' + '\n' + '  <div class=' + '"' + 'pertenceALista' + '"' + '>' + '\n' + '  <strong>' + inputPertence.value + '<\/strong> est\xE1 no card\xE1pio \u2714\uFE0F' + '\n' + '  <\/div>' + '\n' + '  ';
    else
      divAlimento.innerHTML = '\n' + '  <div class=' + '"' + 'pertenceALista' + '"' + '>' + '\n' + '  <strong>' + inputPertence.value + '<\/strong> n\xE3o est\xE1 no card\xE1pio \u2716\uFE0F' + '\n' + '  <\/div>' + '\n' + '  ';
  }
  function pertence(lista, nome) {
    if (lista == null)
      return false;
    else if (equals(lista.nome, nome))
      return true;
    else
      return pertence(lista.prox, nome);
  }
  function forEach(lista, comando) {
    if (lista != null) {
      comando(lista.nome, lista.preco, lista.detalhe);
      forEach(lista.prox, comando);
    }}
  function main() {
  }
  function adicionar(lista, nome, precoNovo, detalheNovo) {
    println(lista);
    if (lista == null)
      return null;
    else if (lista.prox == null) {
      lista.prox = new Alimentos(nome, precoNovo, detalheNovo, null);
    } else
      return new Alimentos(lista.nome, lista.preco, lista.detalhe, adicionar(lista.prox, nome, precoNovo, detalheNovo));
    return null;
  }
  function adicionarLista$lambda(closure$divAlimento) {
    return function (x, y, z) {
      closure$divAlimento.innerHTML = closure$divAlimento.innerHTML + (' ' + '\n' + '  <li class=' + '"' + 'listaralimentos' + '"' + '> ' + '\n' + '    <div class=' + '"' + 'alimentos' + '"' + '>' + '\n' + '      <span class=' + '"' + 'sAlimento' + '"' + ' style=' + '"' + 'padding-left:10px;' + '"' + '> ' + x + ' <\/span>' + '\n' + '      <span class=' + '"' + 'sPreco' + '"' + ' style=' + '"' + 'padding-left:10px;' + '"' + '>RS ' + y + ' <\/span>' + '\n' + '    <\/div>' + '\n' + '    <a href=' + '"' + './tipomodal.html/?' + x + '?' + z + '"' + '>' + '\n' + '      <div class=' + '"' + 'index' + '"' + '>Exibir Detalhes \u2795 <\/div>' + '\n' + '    <\/a>' + '\n' + '  <\/li>' + '\n');
      return Unit;
    };
  }
  function adicionarLista() {
    var tmp$, tmp$_0, tmp$_1;
    var divAlimento = document.getElementById('listaalimentos');
    if (divAlimento == null) {
      println('error elemento n\xE3o encontrado');
      return;
    }var inputNome = Kotlin.isType(tmp$ = document.getElementById('nome'), HTMLInputElement) ? tmp$ : throwCCE();
    var inputPreco = Kotlin.isType(tmp$_0 = document.getElementById('preco'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var inputDetalhe = Kotlin.isType(tmp$_1 = document.getElementById('detalhe'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var auxiliar = adicionar(alimentosEncadeados, inputNome.value, toDouble(inputPreco.value), inputDetalhe.value);
    divAlimento.innerHTML = '';
    forEach(auxiliar, adicionarLista$lambda(divAlimento));
    imprimirAlimentosOrdenados();
  }
  _.Alimentos = Alimentos;
  Object.defineProperty(_, 'alimentosEncadeados', {
    get: function () {
      return alimentosEncadeados;
    }
  });
  _.imprimirAlimentosOrdenados = imprimirAlimentosOrdenados;
  _.ordenarAlimentos_sq185b$ = ordenarAlimentos;
  _.ordenarAlimentosAux_sitbyk$ = ordenarAlimentosAux;
  _.insereOrdenado_wcdlus$ = insereOrdenado;
  _.listarAlimentos = listarAlimentos;
  _.printPertence = printPertence;
  _.pertence_1i4q7j$ = pertence;
  _.forEach_efaent$ = forEach;
  _.main = main;
  _.adicionar_wcdlus$ = adicionar;
  _.adicionarLista = adicionarLista;
  alimentosEncadeados = new Alimentos('Hamburguer', 10.0, 'P\xE3o Viena 60g, Carne Bovina 180g, Alface, Tomate, Cebola Caramelizada, Mostarda e Mel.', new Alimentos('Coxinha', 5.99, 'Peitos de frango desfiados a m\xE3o, misturados a um queijo do reino premium e envoltos numa camada crocante de massa Panko.', new Alimentos('Empada', 7.5, 'Com um delicioso recheio de bacalhau refogado ao molho de tomate, ervas finas e azeitona preta.', new Alimentos('Torta', 10.0, 'Deliciosa fatia de uma torta feita com bolo de chocolate, recheio de doce de leite e crocante de amendoim, coberto com raspas de chocolate ao leite.', new Alimentos('Brigadeiro', 5.0, 'Brigadeiro branco com canela, polvilhado com mix de a\xE7\xFAcar e canela e um toque de doce de leite.', null)))));
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
