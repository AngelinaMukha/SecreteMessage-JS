const {hash} = window.location;

const message = atob(hash.replace('#',''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML=message;
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('input');
    const encrypted=btoa(input.value);

    const linkInput=document.querySelector('#link-input')
    linkInput.value=`${window.location}#${encrypted}`;
    linkInput.select();
});