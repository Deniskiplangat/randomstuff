var redslider = document.getElementById('r')
var greenslider = document.getElementById('g')
var blueslider = document.getElementById('b')

//the above will take slider and have them as variables
const changebg = document.getElementById('rangeValue')

var red = '50'
var green ='50'
var blue = '50'



redslider.addEventListener('input',(e)=>{
    console.log(`the value of red is ${redslider.value}`)
    red = redslider.value; // here
    changebg.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
})
greenslider.addEventListener('input',(e)=>{
    console.log(`the value of green is ${greenslider.value}`)
    green = greenslider.value; // here
    changebg.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})
blueslider.addEventListener('input',(e)=>{
    console.log(`the value of blue is ${blueslider.value}`)
    blue = blueslider.value; // here
    changebg.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

// changebg.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

