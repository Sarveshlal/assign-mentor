function addstudent() {
  var name = document.getElementById("name").value;
  var rollno = document.getElementById("rno").value;
  var standard = document.getElementById("standard").value;
  console.log(name, rollno, standard);
}

function addmentor() {
  var mentor_name = document.getElementById("ment_name").value;
  var staffid = document.getElementById("sid").value;
  var students = document.getElementById("stud").value;
  console.log(mentor_name, staffid, students);
}

async function getstudentdetails() {
  try {
    let resp = await fetch(
      "https://assign-mentor-students.herokuapp.com/students"
    );
    let data = await resp.json();
    console.log(data);
    let element = document.getElementById("listing");
    let table = document.createElement("table");
    table.setAttribute("class", "table table-striped");
    let thead = document.createElement("thead");
    let tr1 = document.createElement("tr");
    let tda = document.createElement("td");
    tda.innerText = "Name";
    let tdb = document.createElement("td");
    tdb.innerText = "Rollno";
    let tdc = document.createElement("td");
    tdc.innerText = "Standard";
    tr1.append(tda, tdb, tdc);
    thead.append(tr1);
    let tbody = document.createElement("tbody");
    data.map((item) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = item.name;
      let td2 = document.createElement("td");
      td2.innerHTML = item.rollno;
      let td3 = document.createElement("td");
      td3.innerHTML = item.standard;
      tr.append(td1, td2, td3);
      tbody.append(tr);
    });
    table.append(thead, tbody);
    element.append(table);
  } catch (err) {
    console.log(err);
  }
}

async function getmentordetails() {
  try {
    var resp = await fetch(
      "https://assign-mentor-students.herokuapp.com/mentors"
    );
    let data = await resp.json();
    console.log(data);
    let element = document.getElementById("listing");
    let table = document.createElement("table");
    table.setAttribute("class", "table table-striped");
    let thead = document.createElement("thead");
    let tr1 = document.createElement("tr");
    let tda = document.createElement("td");
    tda.innerText = "Name";
    let tdb = document.createElement("td");
    tdb.innerText = "Staff ID";
    let tdc = document.createElement("td");
    tdc.innerText = "Students";
    tr1.append(tda, tdb, tdc);
    thead.append(tr1);
    let tbody = document.createElement("tbody");
    data.map((item) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = item.name;
      let td2 = document.createElement("td");
      td2.innerHTML = item.staffid;
      let td3 = document.createElement("td");
      td3.innerHTML = item.students;
      tr.append(td1, td2, td3);
      tbody.append(tr);
    });
    table.append(thead, tbody);
    element.append(table);
  } catch (err) {
    console.log(err);
  }
}

async function getassigneddetails() {
  var resp1 = await fetch(
    "https://assign-mentor-students.herokuapp.com/student/mentor",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let x = await resp1.json();
  console.log(x);
  getassigneddetails1();
}

async function getassigneddetails1() {
  try {
    var resp = await fetch(
      "https://assign-mentor-students.herokuapp.com/students/mentors"
    );
    let data = await resp.json();
    let element = document.getElementById("listing");
    let table = document.createElement("table");
    table.setAttribute("class", "table table-striped");
    let thead = document.createElement("thead");
    let tr1 = document.createElement("tr");
    let tda = document.createElement("td");
    tda.innerText = "Student Name";
    let tdb = document.createElement("td");
    tdb.innerText = "Student Roll.no";
    let tdc = document.createElement("td");
    tdc.innerText = "Mentor Name";
    let tdd = document.createElement("td");
    tdd.innerText = "Mentor ID";
    tr1.append(tda, tdb, tdc, tdd);
    thead.append(tr1);
    let tbody = document.createElement("tbody");
    data.map((item) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = item.stud_name;
      let td2 = document.createElement("td");
      td2.innerHTML = item.stud_rollno;
      let td3 = document.createElement("td");
      td3.innerHTML = item.mentor_name;
      let td4 = document.createElement("td");
      td4.innerHTML = item.mentor_staffid;
      tr.append(td1, td2, td3, td4);
      tbody.append(tr);
    });
    table.append(thead, tbody);
    element.append(table);
  } catch (err) {
    console.log(err);
  }
}

async function poststudentdetails() {
  let studdetail = {
    name: document.getElementById("name").value,
    rollno: document.getElementById("rno").value,
    standard: document.getElementById("standard").value,
  };
  console.log(studdetail);
  let resp = await fetch(
    "https://assign-mentor-students.herokuapp.com/student",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studdetail),
    }
  );
  let data = await resp.json();
  console.log(data);
  location.reload();
}

async function postmentordetails() {
  let mentordetail = {
    name: document.getElementById("ment_name").value,
    staffid: document.getElementById("sid").value,
    students: document.getElementById("stud").value,
  };
  console.log(mentordetail);
  let resp = await fetch(
    "https://assign-mentor-students.herokuapp.com/mentor",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mentordetail),
    }
  );
  let data = await resp.json();
  console.log(data);
  location.reload();
}
