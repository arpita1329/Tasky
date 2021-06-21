const taskContainer = document.querySelector(".task_container");
const newCard = ({id,imageUrl,taskTitle,taskDescription,taskType,}) => 
    `<div class="col-md-6 col-lg-4" id=${id}>
    <div class="card" >
        <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success "><i class="fas fa-pencil-alt"></i></button>
            <button type="button" class="btn btn-outline-danger "><i class="fas fa-trash-alt"></i></button>
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
};