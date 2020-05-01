let activeImage = 1;
changePhotoMenu(activeImage);


function togleDropDownMenu(){
    const menu = document.getElementById('dropDownMenu');
    if (menu.classList.contains('show')){
        setTimeout(()=>{
            menu.classList.remove('show')
        })
    } else {
        setTimeout(()=>{
            menu.style.transform ='translate3d(-1039px, 42px, 0px)';
         })
    } 
}

function changePhotoMenu(photoPaThName) {
    menuImagePathName = './assets/img/menu' + photoPaThName + '.jpg';
    document.getElementsByClassName('menuImage')[0].firstElementChild.setAttribute('src', menuImagePathName);
}

function setNewActivePage(number){
    let dropItems = document.querySelectorAll('.dropdown-item');
    dropItems.forEach(item => item.classList.remove('activated'));
    event.target.classList.add('activated');
    activeImage = number;
    changePhotoMenu(activeImage);
}

function ruturnMenuImageToActivePage() {
    changePhotoMenu(activeImage);
}