'use strict'

const placeholders = document.querySelectorAll('.placeholder')
const dragdropItem = document.querySelector('.item')

const dragstart = (e)=> {
    e.target.classList.add('hold')
    setTimeout(()=> {
        e.target.classList.add('hide')
    },0)
}

const dragend = (e)=> {
    e.target.classList.remove('hold', 'hide')
}

const dragenter = (e)=> {
    e.target.classList.add('hovered')   
}

const dragover = (e)=> {
    e.preventDefault()  
}
const dragleave = (e)=> {
    e.target.classList.remove('hovered') 
}

const drop = (e)=> {
    e.target.append(dragdropItem)    
    e.target.classList.remove('hovered') 
}
dragdropItem.addEventListener('dragstart', dragstart)
dragdropItem.addEventListener('dragend', dragend)

placeholders.forEach( (placeholder => {
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop', drop)
}) )