class Toggable{
    constructor(el){
        //inicilaizar el estado interno
        this.el = el
        this.el.innerHTML = 'Off'
        this.activated = false
        this.el.addEventListener('click',this.onclick.bind(this))
        
    }
    
    onclick(ev){
        console.log(`Error`, this)
        this.activated = !this.activated
        this.toggleText()
        //Cambiar el estado interno
        //llamar a toggletext
    }

    toggleText(){
        //Cambiar texto
        this.el.innerHTML = this.activated ? 'On' : 'Off'
    }
}


const button = document.getElementById('boton')
const miboton = new Toggable(button)