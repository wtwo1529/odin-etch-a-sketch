const grid = document.querySelector(".grid");

let createGrid = function(columns=16, rows=16) {
    
    for (let i = 0; i < columns; i++)
    {
        const row = document.createElement('div');
        row.setAttribute('style', 'display: flex; flex: auto; flex-wrap: wrap; width: 100%;');
        for (let j = 0; j < rows; j++)
        {
            const square = document.createElement('div');
            square.classList.add('square');
            square.value = 0;
            square.setAttribute('style', 'border: 1px black solid; flex: auto; background-color: white;')
            row.appendChild(square);
            square.addEventListener('mouseover', (event) => {
                // square.classList.add('hover');
                let red = Math.round(Math.random() * 255);
                let green = Math.round(Math.random() * 255);
                let blue = Math.round(Math.random() * 255);
                if (square.value < 1)
                {
                    square.value += 0.1;
                }
                square.setAttribute('style', `border: 1px black solid; flex: auto; background-color: rgba(${red}, ${green}, ${blue}, ${square.value});`);
                // square.setAttribute('style', `border: 1px black solid; flex: auto; background-color: rgba(80, 80, 80, ${square.value});`);

            })
        }
        grid.appendChild(row);
    }
}

let clearGrid = () => {
    grid.innerHTML = "";
}

createGrid();

const form = document.querySelector('.popup-form');
const openFormBtn = document.querySelector("#open-form-btn")
openFormBtn.addEventListener('click', () => {
    form.setAttribute('style', 'display: flex;');
})


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const returnValue = processForm();
    
    if (returnValue == false)
    {
        const formMessages = document.querySelectorAll('.popup-form p')
        if (formMessages.length == 1)
        {
            return;
        }
        const formMessage = document.createElement('p');
        formMessage.textContent = "Maximum of 100 columns and rows";
        form.appendChild(formMessage)
        return;
    }
    form.setAttribute('style', 'display: none;');
    clearGrid();
    createGrid(returnValue[0], returnValue[1]);
})

function processForm() {
    const columnInput = document.querySelector('.columns-input');
    const rowInput = document.querySelector('.rows-input');
    const columns = columnInput.value;
    const rows = rowInput.value;

    if (columns > 100 || rows > 100)
    {
        return false;
    }
    return [columnInput.value, rowInput.value];
}

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener('click', () => {
    const squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].setAttribute('style', 'border: 1px black solid; flex: auto; background-color: white;');
    }
})