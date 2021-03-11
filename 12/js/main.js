var review = document.createElement('div');
review.setAttribute('class', 'review');

var logo = document.createElement('img');
logo.setAttribute('src', 'img/logo.png');
logo.setAttribute('class', 'logo');

var title = document.createElement('h2');
title.innerText = 'Создание сайта';
title.setAttribute('class', 'title');

var subtitle = document.createElement('h3');
subtitle.innerText = 'Руководитель отдела маркетинга "Sticker Wall"';
subtitle.setAttribute('class', 'subtitle');

var text = document.createElement('p');
text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
    ' tempor incididunt ut labore et dolore magna aliqua.';
text.setAttribute('class', 'text');


document.body.appendChild(review);
review.appendChild(logo);
review.appendChild(title);
review.appendChild(subtitle);
review.appendChild(text);
