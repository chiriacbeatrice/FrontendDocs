/**
 * Created by Beatrice.Chiriac on 6/27/2017.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0

    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    }
];
var Employee = function (firstName, lastName, phone, salary,euroValue) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
    this.euroValue = euroValue;
}
var myTable='<table class="table table-condensed"><tr><th>First Name</th><th>Last Name</th><th>Phone</th>' +
    '<th>Salary</th><th>EuroValue</th>';
function showList(){
    var myTable='<table class="table table-condensed"><tr><th>First Name</th><th>Last Name</th><th>Phone</th>' +
        '<th>Salary</th><th>EuroValue</th>';
    for(var i=0;i<=employeesList.length;i++){
        if(i == employeesList.length){
            myTable += '<tr><td> <div id="prenume"></div></td><td><div id="nume"></div></td><td><div id="tel"></div>' +
                '</td><td><div id="medie"></div></td>';
        } else {
            myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td>' +
                '<td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td>' + employeesList[i].euroValue + '</td>' +
                '<td><button onclick="vizualizare(' + i + ')">Vizualizare</button></td><td>' +
                '<button onclick="stergere(' + i + ')">Stergere</button></td></tr>';
        }
    }
    myTable+='</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    prenume();
    nume();
    tel();
    medie();
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    var euroValue = document.getElementById("euroValue").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary,euroValue));
    showList();
}
function totalSalary(){
    var sum = 0;
    for(var i=0;i<=employeesList.length -1; i++){
        sum+=parseInt(employeesList[i].salary);
    }
    var container = document.getElementById('sum');
    container.innerHTML = "<p> Salary sum : </p>" + sum;
}

function deleteEmployee(){
    employeesList.pop();
    showList();
}

function convertSalary() {
    for (var i = 0; i < employeesList.length; i++) {
        employeesList[i].euroValue = parseFloat(employeesList[i].salary) / 4.5;
    }
    showList();
}


function vizualizare(i){
    alert(employeesList[i].firstName + employeesList[i].lastName + employeesList[i].phone + employeesList[i].salary
    + employeesList[i].euroValue);
}

function stergere(i){
    delete employeesList[i];
    showList();
}

function prenume() {
    var x = [];

    for (var i = 0; i<employeesList.length; i++)
    {
        x[i] = 1;
    }
    for(i = 0; i<employeesList.length-1; i++){
        for(var j = i+1; j<employeesList.length;j++){
            if(employeesList[i].firstName==employeesList[j].firstName && i!= j){
                x[i]++;
            }
        }
    }
    var max = 1;
    var poz = 0;
    for(i = 0; i<employeesList.length;i++){
        if(max<x[i]){
            max = x[i];
            poz = i;
        }
    }
    var container = document.getElementById('prenume');
    container.innerHTML = employeesList[poz].firstName;
}

function nume(){
    var x = [];

    for (var i = 0; i<employeesList.length; i++)
    {
        x[i] = 1;
    }
    for(i = 0; i<employeesList.length; i++){
        for(var j = 0; j<employeesList.length;j++){
            if(employeesList[i].lastName==employeesList[j].lastName && i!= j){
                x[i]++;
            }
        }
    }
    var nr = 0;
    for(i = 0; i<employeesList.length;i++){
        if(x[i]==1) {
            nr++;
        }
    }
    var container = document.getElementById('nume');
    container.innerHTML = nr;
}

function tel(){
    var x = [];

    for (var i = 0; i<10; i++)
    {
        x[i] = 0;
    }

    for(i = 0; i<employeesList.length; i++){
        for(j = 0; j<employeesList[i].phone.length;j++){
            x[parseInt(employeesList[i].phone[j])]++;
        }
    }
    var y = [0,1,2,3,4,5,6,7,8,9];
    var aux,auy;
    for(i = 0; i<9;i++){
        for(j = i+1;j<10;j++){
            if(x[i]<x[j]){
                aux = x[j];
                x[j] = x[i];
                x[i] = aux;
                auy = y[i];
                y[i] = y[j];
                y[j] = auy;
            }
        }
    }
    var container = document.getElementById('tel');
    container.innerHTML = y[0] + ',' + y[1] + ','+ y[2] + ','+ y[3] + ',' + y[4];
}

function medie(){
    var med = 0;
    for(var i = 0; i<employeesList.length; i++){
        med += employeesList[i].salary;
    }
    var container = document.getElementById('medie');
    container.innerHTML = parseFloat(med)/employeesList.length;
}
function sortare() {
    var sort_by = document.getElementById("Sort by").value;
    if(sort_by == 4){
    var aux4 = {};
    for(var i = 0; i<employeesList.length-1; i++){
        for(var j = i+1; j<employeesList.length; j++){
            if(employeesList[i].salary>employeesList[j].salary){
                aux4 = employeesList[j];
                employeesList[j] = employeesList[i];
                employeesList[i] = aux4;
            }
        }
    }
}

    else if(sort_by == 1) {
        var aux1 = {};
        for(var i = 0; i<employeesList.length-1; i++){
            for(var j = i+1; j<employeesList.length; j++){
                if(employeesList[i].firstName>employeesList[j].firstName){
                    aux1 = employeesList[j];
                    employeesList[j] = employeesList[i];
                    employeesList[i] = aux1;
                }
            }
        }
    }
    else if(sort_by == 2) {
        var aux2 = {};
        for(var i = 0; i<employeesList.length-1; i++){
            for(var j = i+1; j<employeesList.length; j++){
                if(employeesList[i].lastName>employeesList[j].lastName){
                    aux2 = employeesList[j];
                    employeesList[j] = employeesList[i];
                    employeesList[i] = aux2;
                }
            }
        }
    }
    else if(sort_by == 3) {
        var aux3 = {};
        for(var i = 0; i<employeesList.length-1; i++){
            for(var j = i+1; j<employeesList.length; j++){
                if(employeesList[i].phone>employeesList[j].phone){
                    aux3 = employeesList[j];
                    employeesList[j] = employeesList[i];
                    employeesList[i] = aux3;
                }
            }
        }
    }
    showList();
}
function cautare(){
    var cuvant = document.getElementById("exista").value;

    var myTable='<table class="table table-condensed"><tr><th>First Name</th><th>Last Name</th><th>Phone</th>' +
        '<th>Salary</th><th>EuroValue</th>';

    for(var i = 0; i<employeesList.length; i++){
        if(employeesList[i].search(cuvant)>0){
            myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td>' +
                '<td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td>' + employeesList[i].euroValue + '</td>' +
                '<td></tr>';
        }
    }
    myTable+='</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}