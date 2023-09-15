let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let geral = document.querySelector('#geral')
let res = document.querySelector('#res')
let a1 = 'a'
let b1 = 'b'
let c1 = 'c'
let d1 = 'd'

function clicou1(){
 res.innerHTML = 'RESPOSTA ERRADA'
 res.style.color = 'red'
 a.style.background = 'red'
       
}
function clicou2(){
 res.innerHTML = 'RESPOSTA ERRADA'
 res.style.color = 'red'
 b.style.background = 'red'
}


function clicou3(){
 res.innerHTML = 'RESPOSTA CORRETA'
 res.style.color = 'white'
 c.style.background = 'white'

    
}
function clicou4(){
 res.innerHTML = 'RESPOSTA ERRADA'
 res.style.color = 'red'
 d.style.background = 'red'
    

}

