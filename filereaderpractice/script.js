// const button = document.querySelector('.button')
// const img =  document.querySelector('img')

// button.addEventListener('click',()=>{
//     img.style.filter = "grayscale(100%)";
// })

const slider_value = 50


function myFunc(){
    var body = document.querySelector('body')
    var button = document.querySelector('.button')

    const maincontainer = document.createElement('div');
    maincontainer.classList.add('slider');

    const inputoption = document.createElement('input');
    inputoption.setAttribute('min',0)
    inputoption.setAttribute('type','range')
    inputoption.setAttribute('max',0)
    inputoption.value = slider_value
    inputoption.setAttribute("id", "slideractual")

    //add input option to maincontainewe
    maincontainer.appendChild(inputoption)
    body.appendChild(maincontainer)

    function onchangeValue(){
        inputoption.value = slider_value
        console.log(slider_value)
    }
    inputoption.onchangeValue

    

    
}



{/* <div class="slider">
<input type="range" min="0" max="255" value="50" id="r" >
<!-- <p id="rangeValue">100</p> -->

</div> */}