let time=600
let display=document.querySelector('.time')
console.log(10)
function red()
{
    time=time-1
    let hour=Math.floor(time/60)
    let minute=Math.floor(time-hour*60)
    display.textContent=hour+':'+minute
    if(time==0)
    {
        clearInterval(setime)
        return
    }
}
let setime=setInterval(red,1000)
