/**@type {HTMLCanvasElement}**/
const canvas = document.getElementById('canvas1')
ctx = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight


 let drawing = false


class Root {
    constructor(x,y){
        this.x = x
        this.y = y
        this.speedX = Math.random()* 4-2
        this.speedY = Math.random()* 4-2
        this.size = Math.random()* 10
        this.angle = Math.random()*6.2
        this.va = Math.random() * 0.6 -0.3
    }
    update(){
        
        this.x = this.x + this.speedX + Math.sin(this.angle)
        this.y = this.y + this.speedY + Math.sin(this.angle)
        this.angle = this.angle + this.va

        
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fillStyle = 'hsl(140,100%,50%'
        ctx.fill()
        ctx.save()
        

        ctx.stroke()
        
        
        ctx.restore()
        
        requestAnimationFrame(this.update.bind(this))
        
    }
    
    
}
window.addEventListener('mousemove',function(e){

     if(drawing){
        for(let i = 0; i < 10; i++){
            const root = new Root(e.x,e.y)
        root.update()
        }
     }
    
    
});
window.addEventListener('mousedown',function(){
    drawing = true
})

window.addEventListener('mouseup',function(){
    drawing = false
})
