function tocaSom(idElementoAudio){  
document.querySelector(idElementoAudio).play('');
}       


const listaDeTeclas = document.querySelectorAll('.tecla')    

for (contador = 0; contador < listaDeTeclas.legnth;){}

while(contador < 9, lista.legnth){
    listaDeTeclas [contador].classList[1];

    const instrumento = listaDeTeclas[contador];
    const tecla = listaDeTeclas[contador];
    const idAudio = `#som_${instrumento}`;

    tecla[contador].onclick = function(){
        tocaSom(idAudio);
    };
}
