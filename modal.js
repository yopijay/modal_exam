const modal = document.getElementById('mymodal');

document.getElementById('cancelbtn').addEventListener('click', () => modal.style.display= "block");
modal.querySelector('.nobtn').addEventListener('click', () => modal.style.display= "none");
modal.querySelector('.yesbtn').addEventListener('click', () => {
    modal.querySelector('.content').innerHTML= "Subscription successfully cancelled!";
    intervalId = setInterval(() => {
        modal.style.display= "none";

        document.getElementById('cancelled').style.display= "block";
        document.getElementById('cancelbtn').style.display= "none";
    }, 2000);
})