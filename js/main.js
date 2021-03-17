function settingUser(){
    let burger = document.querySelector('.burger-menu ');
    let navBar = document.querySelector('.pl-nav ');
    burger.onclick = function () {
        this.classList.toggle('burger-menu--opened');
        navBar.classList.toggle('active');
    };

}

settingUser();
