let plus=document.querySelector('.plus');
let minus=document.querySelector('.minus');
num=1
let p=document.querySelector('p')
plus.addEventListener('click',()=>{
    num=num+1
    p.textContent=num
})
minus.addEventListener('click',()=>{
    if (num==1)
    {
        return
    }
    num=num-1
    p.textContent=num
})