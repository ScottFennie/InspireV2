import { ProxyState } from "../AppState.js"

export class TodoItem {

    constructor(todoData) {
        this.description = todoData.description
        this.user = ProxyState.currentuser
        this.completed = todoData.completed || false
        this.id = todoData.id
    }

    get Template() {

        return /*html*/ `
        <li class="list-group-item glassy2">
        <div class="d-flex justify-content-between">
            <div class="d-flex">
            <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."${this.completed == true ? "checked" : ""} onclick="app.userController.getCompleted('${this.id}')">
            <span class="ps-1 text-break d-flex flex-wrap ${this.completed == true ? "text-decoration-line-through" : ""}"
            >${this.description}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi text-danger bi-x select selectable" onclick="app.userController.deleteTodo('${this.id}')" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
            </div>
        </li>
        `
    }
}