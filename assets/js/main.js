const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>{links?.classList.toggle('open');menu.setAttribute('aria-expanded',String(links?.classList.contains('open')));});
const modal=document.querySelector('.modal');
document.querySelectorAll('[data-open-modal]').forEach(button=>button.addEventListener('click',()=>{modal?.classList.add('open');document.body.style.overflow='hidden';}));
document.querySelectorAll('[data-close-modal]').forEach(button=>button.addEventListener('click',closeModal));
modal?.addEventListener('click',event=>{if(event.target===modal)closeModal();});
function closeModal(){modal?.classList.remove('open');document.body.style.overflow='';}
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal();});
document.querySelectorAll('[data-compare]').forEach(compare=>{
 const range=compare.querySelector('.compare-range');
 const update=()=>compare.style.setProperty('--split',range.value+'%');
 range?.addEventListener('input',update);
 update();
});
document.querySelectorAll('[data-lead-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const success=form.querySelector('.form-success');if(success)success.style.display='block';form.reset();}));
document.querySelectorAll('[data-year]').forEach(element=>element.textContent=new Date().getFullYear());
