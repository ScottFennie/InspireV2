import { ProxyState } from "../AppState.js";
import { userService } from "../Services/UserService.js";

function _drawUserInput() {

    if (ProxyState.currentuser == "") {

        document.getElementById("namezone").innerHTML = /*html*/ `
        <form onsubmit="app.userController.createAUser()">
            <div class="mb-3 pt-2">
                <input type="text" class="inputzone2" id="name" >
            </div>
        </form>
        `

        document.getElementById("hid").classList.add("hidden")
        document.getElementById("intro").innerText = "What's Your Name?"
    } else {

        document.getElementById("namezone").innerHTML = /*html*/ `
        <h2>&nbsp${ProxyState.currentuser}</h2>`

        document.getElementById("hid").classList.remove("hidden")
        document.getElementById("intro").innerText = "Good day,"
    }
}

function _drawTodo() {

    let template = ""
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById("todo").innerHTML = template
}



export class UserController {

    constructor() {
        _drawUserInput()
        ProxyState.on('currentuser', _drawUserInput)
        ProxyState.on('todos', _drawTodo)

    }

    createAUser() {
        event.preventDefault()

        let form = event.target

        let newUser = form.name.value

        userService.createAUser(newUser)
        userService.getTodos()
        form.reset()



    }

    async createTodo() {

        event.preventDefault()

        let form = event.target

        let todo = {
            description: form.description.value
        }

        await userService.createATodo(todo)
        form.reset()

    }
    async getCompleted(todoId) {

        await userService.getCompleted(todoId)
        _drawTodo()
    }

    async deleteTodo(todoId) {

        Swal.fire({
            title: 'Are you sure you want to delete this task?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async(result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your task has been deleted.',
                    'success'
                )
                await userService.deleteTodo(todoId)
            }
        })

    }

}