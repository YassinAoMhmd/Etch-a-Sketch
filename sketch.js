let num = 50;
let Bsize = document.querySelector(".Size");

Bsize.addEventListener('click', resize);

function resize() {
    num = window.prompt("Enter the size: ", 0);

    if (num >= 100) {
        num = 100;
    }

    reset();
}


function reset() {
    while (Bgrid.firstChild) {
        Bgrid.removeChild(Bgrid.firstChild);
    }

    originate(num);
}

function color(final) {
    final.target.style.backgroundColor = 'red';
};


let Bgrid = document.querySelector(".grid");

originate(num);

function originate(Bsize) {
    let total = Bsize * Bsize;

    for (let j = 0; j < total; ++j) {
        let gridDiv = document.createElement('div');
        gridDiv.className = 'square';
        gridDiv.addEventListener('mouseover', color);
        Bgrid.appendChild(gridDiv);
    }

    Bgrid.style.gridTemplateColumns = `repeat(${Bsize}, 1fr)`
    Bgrid.style.gridTemplateRows = `repeat(${Bsize}, 1fr)`
}
