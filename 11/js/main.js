var elem = document.getElementById('elem');
var obj = {value: elem.value};

function func(surname, name) {

    alert(this.value + ', ' + surname + ' ' + name);

}

var func = func.bind(elem);

func('Иванов', 'Иван');
func('Петров', 'Петр');


function func1() {
    alert(this.value);
}

func1.call(obj);
