var a = 0;
var b = 0;
var c = 0;

function f() {
    const name = document.getElementById("name").value;
    const course = document.getElementById("status").value;
    const time = document.getElementById("duration").value;

    if (name.trim() === '' || course.trim() === '' || time.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    const tableBody = document.getElementById('table').querySelector('tbody');
    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert cells for name, course, and duration
    const nameCell = newRow.insertCell(0);
    const courseCell = newRow.insertCell(1);
    const timeCell = newRow.insertCell(2);
    const delCell = newRow.insertCell(3);

    // Create delete button
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.className = 'dbtn';
    delBtn.onclick = function () {
        deleteRow(newRow, course);
        updateTotalRowCount();
    };

    // Append delete button to the last cell
    delCell.appendChild(delBtn);

    // Populate row cells
    nameCell.textContent = name;
    courseCell.textContent = course;
    timeCell.textContent = time;

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('status').value = '';
    document.getElementById('duration').value = '';

    // Update row count and course-specific counts
    updateRowCount(course);
}

function deleteRow(row, course) {
    row.remove();

    if (course === "Python") {
        a -= 1;
        document.getElementById('python').textContent = a;
    } else if (course === "Web Development") {
        b -= 1;
        document.getElementById('web').textContent = b;
    } else if (course === "Data Science") {
        c -= 1;
        document.getElementById('data').textContent = c;
    }
}

function updateRowCount(course) {
    if (course === "Python") {
        a += 1;
        document.getElementById('python').textContent = a;
    } else if (course === "Web Development") {
        b += 1;
        document.getElementById('web').textContent = b;
    } else if (course === "Data Science") {
        c += 1;
        document.getElementById('data').textContent = c;
    }

    updateTotalRowCount();
}

function updateTotalRowCount() {
    const tableBody = document.getElementById('table').querySelector('tbody');
    const rowCount = tableBody.rows.length;
    document.getElementById('count').textContent = rowCount;
}
