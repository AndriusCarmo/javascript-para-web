function tocarsom(idAudio){

    document.querySelector(idAudio).play();
}
const lista=document.querySelectorAll('.tecla');
/*let contador = 0;

while(contador < lista.length){
                                                  //  a funcionalidade ClassLista cria uma lista com as partes de cada class  exemplo: Class.List=[ 'tecla', 'tecla_pom']   //

    const tecla = lista[contador];
    const instrumento = tecla.classList[1];
    const idAudio =`#som_${instrumento}`;
    
    tecla.onclick = function(){

        tocarsom(idAudio);
    }
    contador=contador + 1;
}*/
for(let contador = 0;contador < lista.length;contador++){

    const tecla = lista[contador];
    const instrumento = tecla.classList[1];
    const idAudio =`#som_${instrumento}`;
    
    tecla.onclick = function(){

        tocarsom(idAudio);
    }
}