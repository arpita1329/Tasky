const taskContainer = document.querySelector(".task_container");

let globalStore = [];


const newCard = ({id,imageUrl,taskTitle,taskDescription,taskType,}) => 
    `<div class="col-md-6 col-lg-3 me- mb-5 " id=${id}>
    <div class="card border border-4" >
        <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success "><i class="fas fa-pencil-alt"></i></button>
            <button type="button" id=${id} class="btn btn-outline-danger" onclick="deleteCard.apply(this,arguments)">
              <i class="fas fa-trash-alt" id=${id} onclick="deleteCard.apply(this,arguments)"></i>
            </button>
        </div>
        <img src=${imageUrl} class="card-img-top mb-3 rounded-lg" alt="card_image" />
        <div class="card-body">                     
          <h5 class="card-title">${taskTitle}</h5>
          <p class="card-text">${taskDescription}</p>
          <div class="tags text-white d-flex flex-wrap">
            <span class="badge bg-primary m-1">${taskType}</span>
          </div>
        </div>
        <div class="card-footer text-muted">
            <button type="button" class="btn btn-outline-primary float-end rounded-pill">Open Task</button>
      </div>
    </div>
  </div>` ;

  const loadInitialTaskCards = () => {
    //Access Global Storage
    const getInitialData = localStorage.getItem("tasky");
    if(!getInitialData) 
      return;

    //Convert Stringfied obj to object
    const {cards} = JSON.parse(getInitialData);

    //Map Around the array to get the HTML card and inject it into DOM
    cards.map((cardObject) => {
      const createNewCard = newCard(cardObject);
      taskContainer.insertAdjacentHTML("beforeend",createNewCard);
      globalStore.push(cardObject);
    });
  };

const updateLocalStorage = () => localStorage.setItem("tasky", JSON.stringify({cards : globalStore}));


const saveChanges = () => {
    const taskData = {
        id : `${Date.now()}`,
        imageUrl : document.getElementById("imageurl").value,
        taskTitle : document.getElementById("tasktitle").value,
        taskType : document.getElementById("tasktype").value,
        taskDescription : document.getElementById("textdescription").value,
    };
    const createNewCard = newCard(taskData);
    taskContainer.insertAdjacentHTML("beforeend",createNewCard);

    globalStore.push(taskData);
    updateLocalStorage();
};

const deleteCard = (event) => {
  //id
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagName;

  //Search the globalStore ,remove the obj which match with id
  globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
  updateLocalStorage();

  //access DOM to remove them
  if(tagname==="BUTTON") {
      return taskContainer.removeChild (
        event.target.parentNode.parentNode.parentNode 
      );
  }

  return taskContainer.removeChild (
    event.target.parentNode.parentNode.parentNode.parentNode
  );

};