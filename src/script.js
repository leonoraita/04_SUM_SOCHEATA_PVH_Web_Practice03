function addTask() { 
    const taskName = document.getElementById("taskName").value.trim();
    const dueDate = document.getElementById("taskDate").value;
    const priority = document.getElementById("taskPriority").value;

    if (taskName && dueDate && priority) {
        const tableBody = document.getElementById("taskTableBody");
        const row = tableBody.insertRow();

        row.innerHTML = `
            <td>${taskName}</td>
            <td>${dueDate}</td>
            <td class="${priority.toLowerCase()}">${priority}</td>
            <td><span class="pending">Pending</span></td>
        `;
    } else {
        alert("Please fill all fields");
    }
}