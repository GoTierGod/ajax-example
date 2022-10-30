window.addEventListener('load', () => {
    const name = document.getElementById('name');
    const salary = document.getElementById('salary');
    const months = document.getElementById('months');
    
    const disName = document.getElementById('dis-name');
    const disTotal = document.getElementById('dis-total');
    const employee = document.getElementById('employee');

    async function getData() {
        let response = await fetch('user.json')
        return await response.json();
    }

    function disEmployee() {
        getData().then(data => employee.innerText = `Name: ${data['name']}\n Age: ${data.age}`);
    }

    name.addEventListener('keyup', () => {
        disName.innerText = name.value;
        disEmployee();
    })

    function updateTotal() {
        disTotal.innerText = (Number(salary.value) * Number(months.value)) / 10;
        disEmployee();
    }

    salary.addEventListener('keyup', updateTotal);
    months.addEventListener('keyup', updateTotal);
});