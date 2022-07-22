const btn = document.getElementById("btn");
const container = document.getElementById("container");
const input = document.getElementById("input");
const trash = document.querySelector(".icon-trash-o");
const btns = document.querySelector(".red")
const dark = document.querySelector(".dark")
const problem = document.querySelector(".problem")
const proConta = document.querySelector(".pro")

btn.addEventListener("click", (eo) => {
  eo.preventDefault();

  const addTask = `
    
    <div class="task">

    <div class="small-task">
    <span class="icon-circle"></span>

        
        <p  class="task-text"> ${input.value} </p>
    </div>

    <span class="icon-trash-o"></span>
</div>
    
    `;

  container.innerHTML += addTask;
  input.value = "";
});

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash-o") {
    eo.target.parentElement.remove();
  } 
  else if (eo.target.className == "icon-circle") {
    eo.target.classList.add("icon")
    container.prepend(eo.target.parentElement.parentElement);

    eo.target.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");

  }
  else if (eo.target.className == "icon-circle icon") {
    eo.target.classList.remove("icon");
    eo.target.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");
  }
});


btns.addEventListener("click" , (eo) => {
 
  dark.classList.toggle("addClass")
  btn.classList.toggle("addClass")
 

  if (eo.target.className == "dark") {
    btn.style.backgroundColor = "red"
  } else {
    
  }
})


problem.addEventListener("click" , (eo) => {
  
  proConta.classList.add("pro-disp")

  setTimeout(() => {
    proConta.classList.remove("pro-disp")
  }, 3000);


})