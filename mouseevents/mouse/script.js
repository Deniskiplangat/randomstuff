const mousee = document.querySelector('.mousecontainer')

mousee.addEventListener('click',(e)=>{
   if(e.altkey){
    console.log('alt key is pressed')
   }else{
    console.log("alt key has not been presssed")
   }
})