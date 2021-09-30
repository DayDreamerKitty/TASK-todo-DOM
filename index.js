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
  let checking = tasks.find((element) => element.id === taskId);
  checking.done = checked;

  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  const idNumber = tasks.length + 1;
  const task = {
    id: idNumber,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  };
  tasks.push(task);
  renderTasks(tasks, "tasks-list");
  console.log(tasks);
}

function addCategory() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const newCategory = getNewCategoryText();

  categories.push(getNewCategoryText());
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  // continue the code here
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const doneBox = getFilteredDone();
  let filteredTasks = tasks.filter(
    (element) => element.category === selectedCategory
  );
  console.log(doneBox);
  if (doneBox) {
    let filteredDone = filteredTasks.filter((element) => element.done === true);
    console.log(filteredDone);
    renderTasks(filteredDone, "tasks-list");
  } else {
    renderTasks(filteredTasks, "tasks-list");
    console.log(filteredTasks);
  }
}
function clearFilter() {
  renderTasks(tasks, "tasks-list");
}
