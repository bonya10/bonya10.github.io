
var test = document.querySelector('.modal1');

function removeTest(e) {
    if(!e.target.matches('.modal1')) {
        test.remove();
        this.removeEventListener('click', removeTest);
    }
};

window.addEventListener('click', removeTest);
