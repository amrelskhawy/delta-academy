import data from './data.js';
const tableBody = document.querySelector('.students-table-body');
function addStudent(student) {
  const { id, name, practical, theoretical, E, total } = student;
  const tr = document.createElement('tr');
  for (let i in student) {
    const td = document.createElement('td');
    const tdData = document.createTextNode(student[i]);
    td.append(tdData);
    tr.append(td);
    tableBody.append(tr);
  }
}

// data.map(student => addStudent(student))
data.map((student) => addStudent(student));
