// creating selecting elements

const btnOpen1El=document.getElementById('btnone');
const btnOpen2El=document.getElementById('btntwo');
const btnOpen3El=document.getElementById('btnthree');
const modelOneEl=document.getElementById('modalOne');
const modelTwoEl=document.getElementById('modalTwo');
const modelThreeEl=document.getElementById('modalThree');

const btnCloseOne=document.getElementById('btncloseOne');
const btnCloseTwo=document.getElementById('btncloseTwo');
const btnCloseThree=document.getElementById('btncloseThree');






btnOpen1El.addEventListener('click',function(){
    modelOneEl.classList.remove('close');
    modelOneEl.classList.add('show');
})

btnCloseOne.addEventListener('click',function(){
    modelOneEl.classList.remove('show');
    modelOneEl.classList.add('close');
})

btnOpen2El.addEventListener('click',function(){
    modelTwoEl.classList.remove('close');
    modelTwoEl.classList.add('show');
})

btnCloseTwo.addEventListener('click',function(){
    modelTwoEl.classList.remove('show');
    modelTwoEl.classList.add('close');
})
btnOpen3El.addEventListener('click',function(){
    modelThreeEl.classList.remove('close');
    modelThreeEl.classList.add('show');
})

btnCloseThree.addEventListener('click',function(){
    modelThreeEl.classList.remove('show');
    modelThreeEl.classList.add('close');
})
window.addEventListener('keydown',function(event){
    if(event.key==='Escape'){
    modelOneEl.classList.remove('show');
    modelOneEl.classList.add('close');
    modelTwoEl.classList.remove('show');
    modelTwoEl.classList.add('close');
    modelThreeEl.classList.remove('show');
    modelThreeEl.classList.add('close');
    }
})


































// const btnOpen=document.getElementById('btnone');
// const modelOpen=document.getElementById('modal');
// const btnClose=document.getElementById('btnclose');


// btnOpen.addEventListener('click',function(){
//     console.log(`hiii`);
//     modelOpen.classList.remove('close');
//     modelOpen.classList.add('show');
// })

// btnClose.addEventListener('click',function(){
//     modelOpen.classList.remove('show');
//     modelOpen.classList.add('close');
// })