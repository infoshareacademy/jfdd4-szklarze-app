import React from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists,
    products: state.products,
    prices: state.pricesData.prices
})
const mapDispatchToProps = (dispatch) => ({
})

function getPricesData (data, productId) {
  console.log('jek')

}


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Wykres zmiany ceny produktu',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1.24, 15.2, 56, 55, 40, 80, 90, 100, 2, 250]
        }
    ]
};
class Chart extends React.Component {

    render() {
        var {
            prices
        } = this.props;
        return (
            <div>
                <h2>Line Example</h2>
                <Line data={data} onEnter={() => getPricesData()} />

            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)