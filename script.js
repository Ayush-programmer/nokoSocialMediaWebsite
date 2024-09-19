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
        console.log(name.indexOf(val)); // What does this indexOf means I did'nt understand anything so that I have to search for indexOf on the internet so remember search for indexOf property or whatever it is .
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