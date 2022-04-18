//Lógica de retribuição de valor das variavéis
// var a = 10;
// var b = 20;
// var c = null;



// document.write("A: " + a +"<br>");
// document.write("B: " + b +"<br>");
// document.write("C: " + c +"<br>");



// document.write("<hr>");


// c = a;
// a = b;
// b = c;
// c = null;


// document.write("A: " + a +"<br>");
// document.write("B: " + b +"<br>");
// document.write("C: " + c +"<br>");

/*

******Elementos*********
 -alert("Olá Mundo!") -  cria um pop-up
 -console.log("Ola Mundoooo") - exibe valores no console
 -prompt() - semelhante ao alert(), porém com uma caixa para inserção de texto


document.getElementById('nome').value = "eae";
    --seleciona um elemento no DOM
    --Atualiza o valor com uma string

document.write()
    --escreve na página.

parseInt() - "converte" uma string em valor numerico inteiro
parseFloat() - "converte" uma string em valor numerico fracionado
    --parseInt(variavel)

.toString() - "converte" um valor numerico em uma string
    --variavel.toString()





*****VARIAVES*****

string: Armazena um conjunto de caracteres.
    --sempre colocar entre aspas na declaração

number: armazena números, negativos ou positivos.
    --number Int: números inteiros.
    --number Float: números fracionados.

boolean: aceita apenas true or false.

*****REGRAS******

 -   não começar nome de variavel com número. Ex.: 1data.
 -   não utilizar caracteres especias e palavras com acento no nome. Ex.: dat@, área.
 -   não utilizar palvras reservadas da linguagem. Ex.: var const, var document
 -   declarar var no topo, do documento ou do método(function)


*****DECLARAÇÃO DE VARIÁVEIS******

 -   não é totalmente necessário que se use o *var* para declaração, mas é altamente recomendavel, pois ela explicita que estamos declarando a variável.
 -   não precisamos explicitar qual tipo de variavel estamos declarando, o javascript reconhece pelo tipo de valor atribuido a variavel

 -   o javascript é uma liguagem case sensitive, ou seja, diferencia letras maíusculas das minúsculas. Assim var Curso não é igual a var curso.

 -    ao nomear uma variavel com mais de uma palavra, usamos o padrão var  cursoDeProgramacao


*****OPERADORES DE COMPARAÇÃO*****
 -  == (igual) - verifica se dois valores são iguais
 -  === (idêntico) - verifica se dois valores são iguais e do mesmo tipo
 -  != (diferente) - verifica se dois valores são diferentes
 -  !== (não identico) - verifica se dois valores são diferentes e de tipos diferentes
 -  < (menor) - verifica se o valor da esquerda é menor que o da direita
 -  > (maior) - verifica se o valor da esquerda é maior que o da direita
 -  <= (menor igual) - verifica se o valor da esquedar é menor ou igual o da direita
 -  >= (maior igual) - verifica se o valor da esquedar é maior ou igual o da direita


*****OPERADORES LÓGICOS *****
 -   && (e, and) - só é verdadeiro se duas ou mais condiçoes forem verdadeiras

        **true && true = true
            if(2==2 && 3>=1){}

        **true && true && false = false
            if(2==2 && 3>=1 && 'a' = 'b'){} 


 -   || (ou, or) - é verdadeiro se apenas uma das condiçoes forem verdadeiras
        
         **true && true && false = true
            if(2==2 || 3>=1 || 'a' = 'b'){}

         **true && false && false = true
            if(2==2 || 3<=1 || 'a' = 'b'){}

         **false && false && false = false
            if(4==2 || 3<=1 || 'a' = 'b'){ }

 -   ! (negação) - inverte o valor da expressão de comparação

        **true = false false = true 
            if(!(5=2)){} - nesse caso sera verdadeiro, pois 5 não é igual a 2, mas o ! faz com que retorne o contrario.


******CONDICIONAIS*******
 - If Else
    --if (se) - usado com operadores lógicos e comparadores, manda executar um codigo caso condição seja atendida.

    --else if (então se) - usado com o if antes do else, manda exeuctar um código caso a primeira condição não seja atendida, e sua própria condição seja
    
    --else (então) - usado com o if, manda executar um código caso a primeira condição (if) nem a segunda (else if) não sejam atendidas.
  

 - switch 
    semelhante ao if else, apenas para dados identicos
        sintaxe:
            switch (parametro){
                
                case 1:
                    //se parametro ===1
                break -- faz com que o switch pare de ser executado, na ausência desse comando, todos os cases são executados

                case 2:
                    //se parametro ===2
                break

                default: -- opcional, no caso da ausencia, caso nenhum case seja executado, nada sera feito.
                //se parametro não for encontrado
            }

*****OPERADOR TERNARIO*****
    semelhante ao if porém é usado para quando existem apenas duas possibilidades

    lógica -- condição? valor se for verdareiro : valor se for falso
            sintaxe:  
                var salario = 1000
                var bonus = salario* (salario>1000 ? )0.10 : 0.15);

        nessa situação, perguntamos se o salario é maior que 1000, se sim, multiplique o salario por 0.10 e se não, multiplique por 0.15.





*****OPERADORES ARITMÉTICOS*****
 - + (soma)
 - - (subtração)
 - * (multiplicação)
 - / (divisão)
 - % (modulo) - resto existente de uma divisão. ex.: 7%3 =1
 - ++ (Incremento)  - pré/pós incremento
 - -- (decremento) - pré/pós decremento

*****FUNÇÕES*****

-é uma boa pratica, nomea-las com duas palavras, exemplo: calcularPeso
-podemos passar paramêtros para a função (entrada de dados)
 função tipo VOID, apenas processa alguma lógica, ou do tipo com retorno que processa e retorna o valor para a função que a chamou

    function calcularAreaTerreno (largura, comprimento){
        var area = largura*comprimento
        return area
    }
    calcularAreaTerreno(11,22)
*****FUNÇOES ANONIMAS*****
- seu fucionamento é o mesmo de uma função comum, porém, sem nome, não pode ser invocada. Para invoca-la, precisamos associa-la a uma variavel, ou a uma ação.
Exemplo:

    var exibirSaudação = function(){
        document.write('Ola, tudo bem?')
    }


    var botao = document.querySelector('button')

    botao.onclick = function() { --ao apertar determinado botão, a function é acionada
         alert('hello');
    }

*****ESCOPOS: GLOBAL, FUNÇÃO E BLOCO*****
 if é bloco
 function é função

 --if e função tem acessos as variaveis globais
 --quando declaramos uma variavel dentro de um bloco, ele é elevado à escopo global, se estiver dentro de uma function, sera elevado à escopo de função
 --variaveis declarada dentro de uma function, só são acessadas dentro da function

    Exemplo 1: -- o if consegue ler e modificar a variavel

        var serie = "The Walking Dead"

        if (true){
            var serie = "the good place"
        }
    Exemplo 2: -- o if não consegue ler e modificar a variavel let

        let serie = "The Walking Dead"

        if (true){
            let serie = "the good place"
        }
    Exemplo 3: -- o let não fica disponivel no escopo global

        
        if (true){
            let serie = "the good place"
        }
        document.write(serie)


        var serie = "got"
    Exemplo 4: --a function não troca o valor da var, e o escopo global não tem acesso ao var dentro da function, mas a function acessa a var global

        var serie = "got"

        function trocaSerie(){
            var serie = "twd"

        }
        trocaSerie()
        document.write(serie)

    Exemplo 5 : -- a function altera o valor e eu consigo recuperar o dado após a modificação

    
        var serie = "twd"

        function trocaSerie(){
             serie = "got"
            
        }
        trocaSerie()
        document.write(serie)
    

    Exemplor 6: --o let fica dentro do bloco, não sendo possivel acessa-lo no global
    
       if(true){
            let serie = "got"
       }

        document.write(serie)
    Exemplor 6: --o if não acessa a const, fuction sim
    
        const serie = "got"
     
        if(true){            
             document.write(serie)
        }

    Exemplo 7 : --function e if acessam a variavel

          function mostraStatus(){
            if (true){
                var status = "dentro do if"
                document.write(status)
            }
            document.write(status)
        }
        mostraStatus()

        --apenas o if acessa o let e const

        function mostraStatus(){
            if (true){
                let status = "dentro do if"
                document.write(status)
            }
            document.write(status)
        }
        mostraStatus()
        document.write(status)
     
        function mostraStatus(){
            if (true){
                const status = "dentro do if"
                document.write(status)
            }
            document.write(status)
        }
        mostraStatus()
        document.write(status)

******MANIPULAÇÃO DE STRINGS*********

<!-- strings são tratadas no js como array

 --propriedade/atributo length
    -retorna a quantidade de caracteres da string

     --
 --propriedade / atributo push



 --propriedade / atributo array.charAt()
  - nos retorna o caracter em determinada opção

 --propriedade / atributo array.indexOf()
  - nos retorna a posição da primeira ocorrencia de um caracter
 
 --propriedade / atributo array.replace("abacate", "goiaba")
  - substitui o primeiro parametro (caso exista na array), pelo segundo.
 
 --propriedade / atributo array.substr(6 , 4)
 - pega a partir do elemento 6, 4 caracteres, ou seja, chegando ate 9

 --propriedade / atributo array.toLowerCase()
  - transforma todos os caracteres em minusculo
    
 --propriedade / atributo array.toUpperCase()
  - transforma todos os caracteres em maisculo
 
 --propriedade / atributo array.trim()
  - remove espaços em branco nas extremidades da array
    

******TRABALHANDO COM NUMEROS*********
      - math.ceil(12.33) -- arrendonda para cima, retorna 13 no caso
      - math.floor(12.33) -- arredonda para baixo, retorna 12 no caso
      - math.round(12.33) -- arrendonda do jeito matematicamente correto
      - math.random() --gera um valor aleatorio entre 0 e 1

    
******TRABALHANDO COM DATAS*********
- precisa ser instanciado:
  var data = new Date();
      data -- se estiver vaazio (sem parametros) vai ser a data no momento da criação do objeto
- data.getDate() -- pega o dia da data
- data.getDay() -- pega o dia da semana de 0 a 6;
- data.getMonth() -- pega o mes de 0 a 11 (colocar +1 para exibir o mes da forma correta)
- data.getFullYear() --pega o ano

- data.setDate() -- altera a data 

-getTime() calcula a partir de 1/1/1970 a quantidade de milisegundos até a data que estamos trabalhando

   */