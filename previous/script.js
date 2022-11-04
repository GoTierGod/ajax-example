// Cuando el DOM esta listo, se ejecuta inmediatamente esta function (cuando el contenido ha cargado completamente)
window.addEventListener('load', () => {
    // Variables de los inputs
    const name = document.getElementById('name');
    const salary = document.getElementById('salary');
    const months = document.getElementById('months');
    
    // Variables de los elementos donde se mostraran los datos
    const disName = document.getElementById('dis-name');
    const disTotal = document.getElementById('dis-total');
    const employee = document.getElementById('employee');

    // 1 - AJAX
    async function getData() {
        let response = await fetch('user.json')
        return await response.json();
    }

    function disEmployee() {
        getData().then(data => employee.innerText = `Name: ${data['name']}\n Age: ${data.age}`);
    }

    // 2 - DOM Manipulation
    // Evento y funcion para mostrar el nombre
    name.addEventListener('keyup', () => {
        disName.innerText = name.value;
        disEmployee();
    })

    function updateTotal() {
        disTotal.innerText = (Number(salary.value) * Number(months.value)) / 10;
        disEmployee();
    }

    // EVENTOS para el mostrar el calculo del bonus
    salary.addEventListener('keyup', updateTotal);
    months.addEventListener('keyup', updateTotal);
});
