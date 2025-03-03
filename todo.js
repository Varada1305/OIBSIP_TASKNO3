document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    if (title.trim() === '' || description.trim() === '') {
        alert("Please fill out all fields");
        return;
    }

    let table = document.getElementById('todo-list');
    let row = table.insertRow();
    
    let titleCell = row.insertCell(0);
    let descriptionCell = row.insertCell(1);
    let deleteCell = row.insertCell(2);

    titleCell.textContent = title;
    descriptionCell.textContent = description;
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
        row.remove();
    };

    deleteCell.appendChild(deleteBtn);

    document.getElementById('todo-form').reset();
});
