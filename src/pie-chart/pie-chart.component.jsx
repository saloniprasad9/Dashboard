import Chart from 'react-apexcharts';
import './pie-chart.styles.css';
const Pie = () => {
    return(
        <div className='pie-chart'>
            <Chart
                type='pie' width={350} height={2250} series={[55,31,14]}
                options={ {
                    labels : ['Basic Tees 55%','Custom Short Pants 31%','Super Hoodies 14%']
                }}
            >
            </Chart>
        </div>
    )
}

export default Pie;