let elem

function myFunc() { 
    var button = document.getElementById('button')
    

    const querry = button.classList.toggle("para"); 
    if(querry){
        elem = document.createElement('div')
        elem.classList.add('new')
        document.body.append(elem)
    }else{
        elem.remove()
    }
} 