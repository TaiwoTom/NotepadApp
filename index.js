function save() {
    let textarea = document.getElementById("textarea").value;
    let key = document.getElementById("title").value;
    const notepad = [{ "Title": key, "Content": textarea }];
    window.localStorage.setItem(key, JSON.stringify(notepad));
    alert("Saved");

    let savedData = document.getElementById("saved-data");
    let receivedData = window.localStorage.getItem(key);
    let para = document.createElement("p");
    let textt = document.createTextNode(receivedData);
    para.appendChild(textt);
    savedData.appendChild(para);
}

function typing() {
    console.log("view editor");
    let main = document.getElementById("main").style.display = "block";
    document.getElementById("main-body").style.display = "block";
    document.getElementById("delete-bin").style.display = "none";
    return main;
}

function clr() {
  
    let collect = document.getElementById("delete").value;
    let deleteData = document.getElementById("delete-bin");
    let receivedData = window.localStorage.getItem(collect);
    let para = document.createElement("p");
    let textt = document.createTextNode(receivedData);
    para.appendChild(textt);
    deleteData.appendChild(para);


    console.log("delete");
    window.localStorage.removeItem(collect);
    alert(collect + " is deleted");


}

function bin() {

    console.log("view deleted notes");
    let bin = document.getElementById("delete-bin").style.display = "block";
    document.getElementById("main-body").style.display = "none";
    return bin;
    
}












// window.onload = function () {
//     let key = document.getElementById("title").value;
//     let savedData = document.getElementById("saved-data");
//     let receivedData = window.localStorage.getItem(key);
//     let para = document.createElement("p");
//     let textt = document.createTextNode(receivedData);
//     para.appendChild(textt);
//     savedData.appendChild(para);


//     const notepad = [{ "Title": key, "Content": textarea }];
//     let funcKeys = Object.keys(localStorage)
//     for (let key of funcKeys) {
//         console.log(`${key} : ${localStorage.getItem(key)}`);
//     };


// }