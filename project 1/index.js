
displayTasks()

//saving new task:
function save() {
    //take DOM elements:
    const descriptionBox = document.getElementById("descriptionBox")
    const dateBox = document.getElementById("dateBox")
    const timeBox = document.getElementById("timeBox")


    //take values:
    const description = descriptionBox.value
    const date = dateBox.value
    const time = timeBox.value


    //validate descriptionBox:
    if (descriptionBox.value === "") {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Make sure all the fields have been filled!',
        })
    }

    //validate DateBox:
    if (dateBox.value === "") {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Make sure all the fields have been filled!',
        })
    }

    //validate timeBox:
    if (timeBox.value === "") {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Make sure all the fields have been filled!',
        })
    }


    //create object:
    const task = { description, date, time }

    //Get array from storage:
    let json = localStorage.getItem("tasks")
    const tasks = json ? JSON.parse(json) : [];

    //Add new task:
    tasks.push(task);

    //save back:
    json = JSON.stringify(tasks)
    localStorage.setItem(`tasks`, json)

    displayTasks(tasks)

    //clear boxes:
    descriptionBox.value = ""
    dateBox.value = ""
    timeBox.value = ""
}

function displayTasks() {
    //take data from storage:
    const json = localStorage.getItem("tasks")
    const tasks = json ? JSON.parse(json) : [];

    let html = ""
    //display data dynamic:
    for (let index = 0; index < tasks.length; index++) {
        html += `
       <div class="task">
          <button class="remove" onclick="removeAll(${index})"> X </button>
          <div class="description">
           ${tasks[index].description}
           </div> 
           <div class="time">
           <div>
           ${tasks[index].date}
           </div>
           <div>
           ${tasks[index].time}
           </div>
           </div>
      </div>`;
    }

    //take html DIV element:
    const sectionTasks = document.getElementById("sectionTasks")
    sectionTasks.innerHTML = html;
}

function removeAll(index) {
    //Get array from storage:
    let json = localStorage.getItem("tasks")
    const tasks = json ? JSON.parse(json) : [];

    //remove item in given index:
    tasks.splice(index, 1)

    //save back array to storage:
    json = JSON.stringify(tasks)
    localStorage.setItem(`tasks`, json)

    //display again:
    displayTasks(tasks);
}