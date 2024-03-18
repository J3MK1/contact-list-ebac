const form = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactTel = document.getElementById("contact-tel");
const contactNameArray = [];
const contactTelArray = [];
let lines = "";

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    addContactLine();
    updatedContactList();
})

function addContactLine(){

    parseInt(contactTel.value);

    if (contactNameArray.includes(contactName.value) || contactTelArray.includes(contactTel.value)){
        alert("Esse contato já foi cadastrado!");
    } else {
        contactNameArray.push(contactName.value);
        contactTelArray.push(contactTel.value);
        let line = "<tr>";
        line += `<td>${contactName.value}</td>`;
        line += `<td>${contactTel.value}</td>`;
        line += "</tr>";
        lines += line;
    }
    
    console.log(contactNameArray);
    console.log(contactTelArray);
}

function updatedContactList(){
    const contactTable = document.getElementById("table-body");
    contactTable.innerHTML = lines;
}
