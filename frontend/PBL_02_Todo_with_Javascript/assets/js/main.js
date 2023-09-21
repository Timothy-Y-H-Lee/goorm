class Todo {
	constructor(data = "", isDone = false, contentEditable = true) {
		this.data = data;
		this.isDone = isDone;
		this.contentEditable = contentEditable;
		this.id = crypto.randomUUID();
		this.orderSeq = todoDataStorage.length + 1;
	}

	set data(data) {
		this.data = data;
	}

	set isDone (isDone) {
		this.isDone = isDone;
		console.dir("isDone : ", this.isDone);
	}

	get data () {
		return this.data;
	}

	get isDone () {
		return this.isDone;
	}
}

// Javascript 상의 todo 리스트 저장소
const todoDataStorage = [];

const newTodo = document.querySelector('.add_todo');

// 새로운 todo 리스트 엘리먼트를 생성하여 반환
const createTodoListItem = function () {
	const uuid = crypto.randomUUID();
	return `
			<li class="wrap_todo_item" id="${uuid}">
		\t\t\t\t<div class="todo_item">
		\t\t\t\t\t\t<input type="checkbox" name="todo_item_done">
		\t\t\t\t\t\t<div class="todo_item_text" contenteditable="true">
		\t\t\t\t\t\t</div>
		\t\t\t\t</div>
		\t\t\t\t<div class="todo_buttons">
		\t\t\t\t\t<i class="fas fa-save" style="color: #639afa"></i>
		\t\t\t\t\t<i class="fas fa-minus-circle" style="color: #639afa"></i>
		\t\t\t\t</div>
		\t\t\t</li>
	`;
}

const todoItemDone = document.querySelectorAll('input[name=todo_item_done]');
const warpTodoList = document.querySelector('.warp_todo_list');


newTodo.addEventListener('click', () => {
	const newTodoListItem = createTodoListItem();
	console.dir(newTodoListItem);
	// console.log(newTodoListItem);
	// @SEE: https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
	warpTodoList.insertAdjacentHTML('afterbegin', newTodoListItem);

	document.querySelector('div[contenteditable="true"]').focus();
	// document.querySelector('div[contenteditable="true"]').blur();

})

const todoItem = {
	// todoItemChecked : function () { // 일반 함수
	todoItemChecked () { // 메서드
		console.dir(this)
	}
};

todoItemDone.forEach(checkbox => {
	checkbox.addEventListener('click', (e) => {
		console.log('todoItem');
		todoItem.todoItemChecked(e.target);
	})
});