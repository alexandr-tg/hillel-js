var elem = document.getElementById('elem');

function func(surname, name) {

    alert(this.value + ', ' + surname + ' ' + name);

}

var func = func.bind({value: elem.value});

func('Иванов', 'Иван');
func('Петров', 'Петр');


function func1() {
    alert(this.value);
}

func1.call({value: elem.value});

