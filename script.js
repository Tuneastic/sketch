
document.addEventListener("DOMContentLoaded", () => {
let gridSize;
let container = document.getElementById('gridContainerDiv');
let button = document.getElementById('button');

button.addEventListener('click', ()=>{
    gridSize = prompt('Enter grid size');
    gridSize = parseInt(gridSize);
    if (gridSize>100){alert('Choose a number lower than 100')}
    else {
    
        let gridNumber = gridSize * gridSize;
        let percentage = 100/gridSize;
        container.innerHTML = '';
    
        for (let i=0;i<gridNumber;i++){
            let newDiv = document.createElement('div');
            container.appendChild(newDiv);
            newDiv.style.flex = `1 0 ${percentage}%`;;
        
            newDiv.addEventListener('mouseenter', ()=>{
               const randomColor = () => {
                let r = Math.floor(Math.random() * 256); // Random between 0-255
                let g = Math.floor(Math.random() * 256); // Random between 0-255
                let b = Math.floor(Math.random() * 256); // Random between 0-255
                return 'rgb(' + r + ',' + g + ',' + b + ')';    
               
            }
             newDiv.style.backgroundColor = randomColor();
            })
        }
    }
})

for (let i=0;i<16;i++){
    
   let newDiv = document.createElement('div');
   container.appendChild(newDiv);
   newDiv.style.flex = `1 0 25%`;;
   newDiv.addEventListener('mouseenter', ()=>{
               const randomColor = () => {
                let r = Math.floor(Math.random() * 256); // Random between 0-255
                let g = Math.floor(Math.random() * 256); // Random between 0-255
                let b = Math.floor(Math.random() * 256); // Random between 0-255
                return 'rgb(' + r + ',' + g + ',' + b + ')';
                 
            }
             newDiv.style.backgroundColor = randomColor();
            })
}


})