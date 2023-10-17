import { toDos } from '../Database/todos.js'
import { renderTodos } from './renderTodos.js'
export function deleteToDo(e){
    e.preventDefault()
    console.log('vrei sa stergi un task')
    console.log(e.target.parentElement.id)
    renderTodos()
}