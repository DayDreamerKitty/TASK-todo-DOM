// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];


// REMOVE ME: SAMPLE FILLING

let categories = ["movies", "grocires"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id

  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
  renderTasks(tasks, "tasks-list");
}
function deletTask(){
  console.log(" ");

}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  const idNumber = tasks.length++;
  const task = {
    id: idNumber,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  };
  tasks.push(task);
  renderTasks(tasks, "tasks-list");
}

function addCategory() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const newCategory = getNewCategoryText();
  
  
  categories.push(getNewCategoryText())
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  // continue the code here
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}
