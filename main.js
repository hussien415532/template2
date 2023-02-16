let services = document.querySelector('.services');
let scrollBtn = document.querySelector('.scroll-top')

window.onscroll = function()
{
    if(services.offsetTop<=this.scrollY)
    {
        scrollBtn.style.display ='flex';
    }
    else
    {
        scrollBtn.style.display ='none';
    }
}
scrollBtn.onclick = ()=>{
    window.scrollTo(0,0);
}