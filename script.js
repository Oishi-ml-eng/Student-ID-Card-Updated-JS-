function showCard() {

    let name = document.getElementById("name").value.trim();

    let studentClass = document.getElementById("class").value.trim();

    let roll = document.getElementById("roll").value.trim();

    if (validateData(name, studentClass, roll) == false) {

        return;

    }

    name = capitalizeName(name);

    updateCard(name, studentClass, roll);

    clearInput();

}



function validateData(name, studentClass, roll) {

    if (name == "" || studentClass == "" || roll == "") {

        alert("Please Fill Up All Fields!");

        return false;

    }

    return true;

}



function capitalizeName(name) {

    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

}



function updateCard(name, studentClass, roll) {

    document.getElementById("studentName").value = name;

    document.getElementById("studentClass").value = studentClass;

    document.getElementById("studentRoll").value = roll;

    showGreeting(name);

}



function showGreeting(name) {

    let greeting = document.getElementById("greeting");

    
    greeting.textContent = "Welcome Student";

   
    greeting.append(" " + name);

}



function clearInput() {

    document.getElementById("name").value = "";

    document.getElementById("class").value = "";

    document.getElementById("roll").value = "";

}