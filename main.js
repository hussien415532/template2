let services = document.querySelector('.services');
let scrollBtn = document.querySelector('.scroll-top')

window.onscroll = function()
{
    if(services.offsetTop<=this.scrollY)
    {
        scrollBtn.style.visibility ='visible';
    }
    else
    {
        scrollBtn.style.visibility ='hidden';
    }
}
scrollBtn.onclick = ()=>{
    window.scrollTo(0,0);
}
