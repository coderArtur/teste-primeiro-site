let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', function() {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
});
  
dropdownContent.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        dropdownBtn.innerHTML = e.target.innerHTML;
        dropdownContent.style.maxHeight = '0';
    }
});


window.addEventListener("load",()=>{
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change",(e)=>{
        for (let i = 0; i < e.target.files.length; i++) {
            let fileName = e.target.files[i].name;
            let filetype = fileName.split(".").pop();
            if (filetype === 'txt') {
                fileshow(fileName, filetype);
            }
        }
    })

    const fileshow=(fileName, filetype)=>{
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML=filetype;
        leftElem.append(fileTypeElem);
        const cortarElem = document.createElement("div");
        cortarElem.classList.add("cortar");
        leftElem.append(cortarElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.innerHTML=fileName;
        cortarElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        const crossElem = document.createElement("span");
        crossElem.innerHTML="&#215;";
        rightElem.append(crossElem);
        filewrapper.append(showfileboxElem);

        crossElem.addEventListener("click",()=>{
            filewrapper.removeChild(showfileboxElem);
        })
    }

})