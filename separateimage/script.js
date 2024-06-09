const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width= 500
canvas.height = 700

class Cell{
     constructor(effect,x,y){
        this.effect = effect
        this.y = y
        this.x = x
        this.width = this.effect.cellWidth
        this.height = this.effect.cellHeight
     }
     draw(context){
        console.log('working')
        context.strokeRect(this.x,this.y,this.width,this.height)
     }
}

class Effect{
    constructor(canvas){
        this.canvas = canvas
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.cellWidth = this.width/35
        this.cellHeight = this.height/25
        this.cell = new Cell(this,80,100)
        this.imageGrid = []
        this.createGrid()
        this.image = document.getElementById('image')
        

    }
    createGrid(){
        for (let y = 0; y < this.height; y+=this.cellHeight) {
            for (let x = 0; x < this.height; x+=this.cellWidth) {
               
                this.imageGrid.push(new Cell(this,x,y))
            
            }
            
        }
    }
    render(context){
        context.drawImage(this.image,0,0)
        this.imageGrid.forEach(cell =>{
            cell.draw(context)
        })
    }
}

const effect = new Effect(canvas)
console.log(effect)
effect.render(ctx)