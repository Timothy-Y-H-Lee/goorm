const toggleThemeBtn = document.querySelector('.gnb-theme-button');

document.onload = setInitialTheme(localStorage.getItem('theme'));
function setInitialTheme(themeKey) {
    if (themeKey === 'dark') {
        document.documentElement.classList.add('light_theme');
    } else {
        document.documentElement.classList.remove('light_theme');
    }
}

toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light_theme');

    if (document.documentElement.classList.contains('light_theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
})

const gnbButtonPlay = document.querySelector('.gnb-button-play');
gnbButtonPlay.addEventListener('click', (params) => {
    confirm("재생하시겠습니까?");
})

const gnbButtonMylist = document.querySelector('.gnb-button-mylist');
gnbButtonMylist.addEventListener('click', (params) => {
    confirm("my List에 추가하시겠습니까?");
})
