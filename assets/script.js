function aparecer(){
    
    document.getElementById('pesquisar').style.display = 'block';
    document.getElementById('pesquisar').addEventListener('click', ()=>{
        document.getElementById('pesquisar').style.transition = '0.5s';
    })

}

    
var e = document.getElementById('f1')
var q = document.getElementById('f2')
var x = document.getElementById('f3')



e.addEventListener('mouseover', e =>{
    
    e.target.style.transform = 'scale(1.1)'
    e.target.style.transition = '1s'
})

e.addEventListener('mouseout', e =>{
    e.target.style.transform = 'scale(1)'
    e.target.style.transition = '1s'
})


q.addEventListener('mouseover', e =>{
    
    e.target.style.transform = 'scale(1.1)'
    e.target.style.transition = '1s'
})

q.addEventListener('mouseout', e =>{
    e.target.style.transform = 'scale(1)'
    e.target.style.transition = '1s'
})

x.addEventListener('mouseover', e =>{
    
    e.target.style.transform = 'scale(1.1)'
    e.target.style.transition = '1s'
})

x.addEventListener('mouseout', e =>{
    e.target.style.transform = 'scale(1)'
    e.target.style.transition = '1s'
})