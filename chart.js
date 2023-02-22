import{getCoins}from "./src/API/api"


const dataAPI=await getCoins();
export const ctx = document.getElementById('myChart');
export const miGrafica = () => {
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado', 'Naranja'],
            datasets: [{
                label: 'Número de votos',
                data: [9, 6, 7, 5, 8, 10],
                borderWidth: 10
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

miGrafica();