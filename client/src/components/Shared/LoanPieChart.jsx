import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
function LoanPieChart({ productInfo }) {
    const { amount, totalFeeAmount, totalInterestAmount } = productInfo;
    const data = {
        labels: ['Anapara', 'Toplam Faiz', 'Masraf'],
        datasets: [
            {
                data: [amount, totalInterestAmount, totalFeeAmount],
                backgroundColor: [
                    'yellow',
                    'blue',
                    'orange',
                ],
            },
        ]
    };
    return (
        <Pie data={data} />
    );
}

export default LoanPieChart;