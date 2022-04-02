import { data } from "./data.js"

const adminNameTitle = document.getElementById("name-admin");
const administationTableContainer = document.getElementById("administration-table-container");
const managerTableContainer = document.getElementById("managers-table-container");
const userTableContainer = document.getElementById("user-table-container");

adminNameTitle.innerText = data.admins[0].name;

let textHtml = ""
data.admins.forEach((admin)=> {

textHtml += `<div class="row-table">
<div class="row-field">
    <h4>${admin.name}</h4>
</div>
<div class="row-field">
    <h4>${admin.adminType}</h4>

</div>
<div class="row-field">
    <h4>${admin.isActive}</h4>
</div>
</div>`

    
});

administationTableContainer.innerHTML = textHtml;

let managerText = ""
data.managers.forEach((manager)=> {

    managerText += `<div class="row-table">
    <div class="row-field">
        <h4>${manager.name}</h4>
    </div>
    <div class="row-field">
        <h4>${manager.job}</h4>
    
    </div>
    <div class="row-field">
        <h4>${manager.salary}</h4>
    </div>
    </div>`
});

managerTableContainer.innerHTML = managerText

let userText = ""
data.users.forEach((user)=> {
    userText += `<div class="row-table">
    <div class="row-field">
        <h4>${user.name}</h4>
    </div>
    <div class="row-field">
        <h4>${user.yearsOfServices}</h4>
    
    </div>
    <div class="row-field">
        <h4>${user.discount}</h4>
    </div>
    </div>`
})

userTableContainer.innerHTML = userText
