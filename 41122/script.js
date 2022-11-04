window.addEventListener('load', () => {
    
    // Div donde mostramos los datos
    const displayData = document.getElementById('data');
    // Button para desencadenar el evento y la funcion asincrona
    const btn = document.getElementById('getBtn');

    // Cuando des click en el button se ejecutara la funcion asincrona
    btn.addEventListener('click', async () => {
        const response = await fetch('data.json'); // Esperamos la respuesta a la peticion
        const data = await response.json(); // Una vez tenemos la respuesta la transformamos de json a un objeto de JavaScript
        // Es importante usar await, para esperar por la respuesta en las dos variables anteriores

        // Una vez tengamos la respuesta y los datos haremos lo siguiente:

        // Calculamos el bono: salario * meses (porcentaje del bono) / 100
        const bonus = (data.salary * data.months) / 100;

        // Usamos innerHTML para que la siguiente string sea transformada a HTML dentro del div
        displayData.innerHTML = `<p>Fullname: <b>${data.firstname} ${data.lastname}</b><br>
                                                Age: <b>${data.age}</b><br>
                                                Lives in: <b>${data.country}, ${data.city}</b><br>
                                                Salary: $<b>${data.salary}</b><br>
                                                Estimated bonus: $${bonus}</p>`;
    });

});