// Sidebar

//Notifications
let menuItems = document.querySelectorAll('.menu-item');

// Messages
let messageMenu = document.querySelector('#messages-notifications');
let messageBox = document.querySelector('.right .messages');
let message = messageBox.querySelectorAll('.message');
let messageSearchBox = document.querySelector('#message-search');

// Theme
let theme = document.querySelector('#theme-menu');
let themeModel = document.querySelector(`.customize-theme`);

// Font size
let fontSizes = document.querySelectorAll('.customize-theme .card .font-size .choose-size span');

// Root
var root = document.querySelector(':root');

// Color Palette
let colorPalette = document.querySelectorAll('.color .choose-color span');

// Background color
let bg1= document.querySelector('.bg-1');
let bg2= document.querySelector('.bg-2');
let bg3= document.querySelector('.bg-3');

// remove active class from all menu-items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove(`active`);
    });
}

menuItems.forEach(item => {
    item.addEventListener(`click`, () => {
        changeActiveItem();
        item.classList.add(`active`);
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});

// search chats
const searchMessage = () => {
    let val = messageSearchBox.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        console.log(name.indexOf(val)); // What does this indexOf means I didn't understand anything so that I have to search for indexOf on the internet so remember search for indexOf property or whatever it is .
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

messageSearchBox.addEventListener(`input`, searchMessage);

// Given a box-shadow to message box when our message item will be clicked.
messageMenu.addEventListener(`click`, () => {
    document.querySelector('#messages-notifications .notification-count').style.display = 'none';
    messageBox.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messageBox.style.boxShadow = 'none';
    }, 1200);
});

// Theme Customization

theme.addEventListener(`click`, () => {
    themeModel.style.display = 'grid';
});

const closeThemeModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}
themeModel.addEventListener(`click`, closeThemeModel);

// Changing font-sizes

// remove active class from spans or font size selectors
const removeFontSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
}

fontSizes.forEach(size => {
    size.addEventListener(`click`, () => {
        removeFontSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-10rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // change font-size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
});

// change primary color

// remove active class from spans or font size selectors
const removeColorPaletteSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    });
};

colorPalette.forEach(color => {
    color.addEventListener(`click`, () => {
        removeColorPaletteSelector();
        let primaryHue;
        color.classList.toggle('active');
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});

// change background colors

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

bg1.addEventListener(`click`, () => {
    lightColorLightness = '95%';
    whiteColorLightness = '100%';
    darkColorLightness = '17%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});

bg2.addEventListener(`click`, () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});

bg3.addEventListener(`click`, () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});