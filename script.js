const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");

const generateTemplte = todo => {
  const html = `
   <li>
          <span>${todo} </span>
          <img class="delete" src="./assets/delete.png" alt="delete icons"
          />
   </li>
   `
  list.innerHTML += html;

};

addForm.addEventListener('submit', e => {

  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplte(todo);
    addForm.reset();

  }

});

list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodo = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));


  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
}


search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodo(term);

});