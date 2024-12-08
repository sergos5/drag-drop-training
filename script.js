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


dragdropItem.addEventListener('dragstart', dragstart)

dragdropItem.addEventListener('dragend', dragend)