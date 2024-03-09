var arrStudent = [];

function Student(nim, name) {
    this.nim = nim;
    this.name = name;
}

function saveStudent() {
    var studentForm = document.getElementById("studentForm");
    var nim = document.getElementById("nim").value;
    var name = document.getElementById("name").value;
    
    var student = new Student(nim, name);
    arrStudent.push(student);
    studentForm.reset();
    showStudent(student);
}

function showStudent(student) {    
    var tbody = document.querySelector("#studentTable tbody");
    var tr = document.createElement("tr");
    var tdNim = document.createElement("td");
    tdNim.textContent = student.nim;
    tr.appendChild(tdNim);
    var tdName = document.createElement("td");
    tdName.textContent = student.name;
    tr.appendChild(tdName);

    tbody.appendChild(tr);
}
