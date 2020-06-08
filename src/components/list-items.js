import {LitElement, html} from '@polymer/lit-element'
import {repeat} from 'lit-html/lib/repeat.js';
import './todo-item';

class listItems extends LitElement{
    static get properties(){
        return {
            todoList: Array
        }
    }

    constructor(){
        super();
        this.todoList = [];
    }

    _render({todoList}){
        return html`
        <style>
    .lists {
        padding-left:350px;
        margin:0 auto;
        max-width:500px;
    }
    .list {
        transform-origin:center bottom;
        transition:200ms all linear;
    }
    .list .title {
        color:#B8D4FF;
        font-size:1.5rem;
        letter-spacing:5px;
        text-transform: uppercase;
        text-align: center;
        margin:3.5rem 0 3.5rem 0;
        line-height: 1;
    }
    .list .list-wrapper  {
        list-style: none;
        margin:0 0.5rem;
        padding:0;
    }
    @media (max-width: 576px) and (orientation:portrait) {
        .lists {
            padding:0 1rem;
            margin-bottom:5rem;
        }
        .list .title {
            margin:1.5rem 1rem;
            font-size:1.5rem;
        }
    }
    </style>
        <div class="lists">
            <div class="list">
                <h2 class="title">Tarefas De Hoje</h2>
                <div class="list-wr apper">
                    ${repeat(this.todoList, (todo) => html`<todo-item todoItem=${todo}></todo-item>`)}
                </div>
            </div>
        </div
        `
    }
}

customElements.define('list-items', listItems);