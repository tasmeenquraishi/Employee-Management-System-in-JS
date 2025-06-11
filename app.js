let emp=[];
let editIndex=null;

const form=document.getElementById("emp_form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput=document.getElementById("role");
const tableBody = document.querySelector("#emp_table tbody");

//event listner for adding and updating

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name=nameInput.value.trim();
    const email=emailInput.value.trim();
    const role=roleInput.value.trim();
    
    //case 1-> for any value missing

    if(!name || !email || !role){
        alert("Please fill all fields");
        return;
    }
        const empData={name, email, role};

        if(editIndex===null){
            emp.push(empData);
        }else{
            emp[editIndex]=empData;
            editIndex=null;
            form.querySelector("button").innerHTML="Add Employee";
        }
        form.reset();
        renderTable();
});
//TABLE RENDER

function renderTable(){
    tableBody.innerHTML="";
    emp.forEach((emp1, index)=>{
        const row=document.createElement("tr");
        row.innerHTML=
        `<td>${emp1.name}</td>
        <td>${emp1.email}</td>
        <td>${emp1.role}</td>
        <td class="action_btn">
            <button onclick="editEmp(${index})">Edit</button>
            <button onclick="deleteEmp(${index})">Delete</button>
        </td>`;

        tableBody.appendChild(row)
    });
}

//edit Employee

function editEmp(index){
    const selEmp=emp[index];
    nameInput.value=selEmp.name;
    emailInput.value=selEmp.email;
    roleInput.value=selEmp.role;
    editIndex=index;
    form.querySelector("button").innerText="Update Empoyee";
}


function delEmp(index){
    if(confirm("YOU WANT TO DELETE")){
        emp.splice(index,1);
        renderTable();
    }
}