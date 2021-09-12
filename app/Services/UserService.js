import { ProxyState } from "../AppState.js"
import { TodoItem } from "../Models/TodoItem.js"


const todoApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})
class UserService {

    constructor() {

    }

    createAUser(user) {

        ProxyState.currentuser = user
        ProxyState.currentuser = ProxyState.currentuser

        console.log("testing current user proxy", ProxyState.currentuser)
    }
    async createATodo(newTodo) {

        const newtodoitem = new TodoItem(newTodo)
        let res = await todoApi.post(`${ProxyState.currentuser}/todos`, newtodoitem)
        ProxyState.todos = [...ProxyState.todos, new TodoItem(res.data)]

        console.log("newTodo Data", res)

    }
    async getTodos() {
        let res = await todoApi.get(`${ProxyState.currentuser}/todos`)
        ProxyState.todos = res.data.map(t => new TodoItem(t))
        console.log("not idiot", ProxyState.todos)
    }

    async getCompleted(todoId) {

        const curtodo = ProxyState.todos.find(t => t.id === todoId)

        curtodo.completed = !curtodo.completed
        await todoApi.put(`${ProxyState.currentuser}/todos/${todoId}`, curtodo)


    }
    async deleteTodo(todoId) {



        await todoApi.delete(`${ProxyState.currentuser}/todos/${todoId}`)

        ProxyState.todos = ProxyState.todos.filter(t => t.id !== todoId)


    }
}

export const userService = new UserService