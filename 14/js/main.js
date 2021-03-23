var element = document.querySelectorAll('.pane');

element.forEach(function (value) {
    var deleteBtn = document.createElement('img');
    deleteBtn.setAttribute('src', 'img/delete.gif');
    deleteBtn.setAttribute('class', 'del-btn');
    deleteBtn.addEventListener('click', function (){
        value.classList.add('hide');
    });

    value.prepend(deleteBtn);
})