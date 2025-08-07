const task = document.querySelector('#task');
const addtask = document.querySelector('#add-task');
const displayTask = document.querySelector('#display-task');

addtask.addEventListener('click', function (e) {
    e.preventDefault();

    if (task.value === '') {
        alert('Enter a valid task');
    } else {
        // Create list item
        let li = document.createElement('li');
        li.innerText = task.value;

        // Create Delete button
        let delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.style.marginLeft = '10px';

        delBtn.addEventListener('click', function () {
            displayTask.removeChild(li);
        });

        // Create Edit button
        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.style.marginLeft = '10px';

        editBtn.addEventListener('click', function () {
            const currentText = li.firstChild.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;

            const saveBtn = document.createElement('button');
            saveBtn.innerText = 'Save';

            // Clear existing content
            li.innerHTML = '';
            li.appendChild(input);
            li.appendChild(saveBtn);

            saveBtn.addEventListener('click', function () {
                if (input.value.trim() === '') {
                    alert('Task cannot be empty');
                } else {
                    li.innerHTML = input.value;

                    // Re-add buttons
                    li.appendChild(editBtn);
                    li.appendChild(delBtn);
                }
            });
        });

        // Append buttons to li
        li.appendChild(editBtn);
        li.appendChild(delBtn);

        // Add task to list
        displayTask.appendChild(li);

        // Clear input
        task.value = '';
    }
});
