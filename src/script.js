function addTask() { 
    const taskName = document.getElementById("taskName").value.trim();
    const dueDate = document.getElementById("taskDate").value;
    const priority = document.getElementById("taskPriority").value;

    if (taskName && dueDate && priority) {
        // const tableBody = document.getElementById("taskTableBody");
        // const row = tableBody.insertRow();

        // row.innerHTML = `
        //     <td>${taskName}</td>
        //     <td>${dueDate}</td>
        //     <td class="${priority.toLowerCase()}">${priority}</td>
        //     <td><span class="pending">Pending</span></td>
        // `;
        tasks.push({taskName, dueDate, priority, status: "Pending"})
        displayTasks();
    } else {
        alert("Please fill all fields");
    }}
    function displayTasks() {
        const tableBody = document.getElementById("taskTableBody");
        tableBody.innerHTML = ""; // Clear existing rows
    
        tasks.forEach(task => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${task.taskName}</td>
                <td>${task.dueDate}</td>
                <td class="${task.priority.toLowerCase()}">${task.priority}</td>
                <td><span class="pending">${task.status}</span></td>
            `;
        });
}