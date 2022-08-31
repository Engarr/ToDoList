const inputTaskName = document.querySelector('.input');
const addButton = document.querySelector('.add-button');
const taskSection = document.querySelector('.task-section');
const edidSection = document.querySelector('.edid-section');
const error = document.querySelector('.error');
const editError = document.querySelector('.edit-error');
const editInput = document.querySelector('.edit-input');
const editAkceptBtn = document.querySelector('.edit-akcept');
const editCancelBtn = document.querySelector('.edit-cancel');
const taskName = document.querySelector('.task-name');

let ID;
let taskToDelete;
let taskToEdit;
let oldName;
const checkForm = () => {
	if (inputTaskName.value !== '') {
		createNewTask();
		inputTaskName.value = '';
		error.style.opacity = 0;
	} else {
		error.style.opacity = 1;
	}
};

const createNewTask = () => {
	const newTask = document.createElement('div');
	newTask.classList.add('task-body');
	newTask.setAttribute('id', ID);
	newTask.innerHTML = `
    <p class="task-name">${inputTaskName.value}</p>

	<div class="button-section">
		<button class="done"><i class="fas fa-check"></i></button>
	    <button class="edit" onclick = "editTask(${ID})"><i class="fas fa-gear"></i></button>
		<button class="delete" onclick = 'deleteTask(${ID})'><i class="fas fa-trash-can"></i></button>
	</div>
    `;
	taskSection.appendChild(newTask);
	ID++;
};

const editTask = (id) => {
	taskToEdit = document.getElementById(id);
    oldName =taskToEdit.childNodes[1].innerText
    taskToEdit.childNodes[1].innerText=editInput
	edidSection.style.display = 'flex';
};

const editTaskName = () => {
    if(editInput.value!==""){
    taskToEdit.childNodes[1].innerText= editInput.value
    edidSection.style.display = 'none';
    editInput.value=""
    editError.style.opacity = 0;
    }
    else{
        editError.style.opacity = 1;
    }
    
};
const closeEditPanel=()=>{
    edidSection.style.display = 'none';
    taskToEdit.childNodes[1].innerText=oldName
}

const deleteTask = (id) => {
	taskToDelete = document.getElementById(id);
	taskSection.removeChild(taskToDelete);
};

addButton.addEventListener('click', checkForm);
editAkceptBtn.addEventListener('click', editTaskName);
editCancelBtn.addEventListener('click', closeEditPanel);
