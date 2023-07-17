// alert("EM CONSTRUÇÃO....")
//MANIPULAÇÃO DO DOM 
const modal = document.querySelector('dialog')
const comeceAqui = document.getElementById('comeceAqui')
const btnClose = document.querySelector('.btnClose')


//EVENTOS DO ESCULTA
comeceAqui.addEventListener('onclick',function(){
        modal.show()
})
btnClose.addEventListener("onclick",function(){
       modal.close()
})