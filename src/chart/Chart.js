import React from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists,
    products: state.products,
    prices: state.pricesData.prices,
    date: state.pricesData.date
})
const mapDispatchToProps = (dispatch) => ({
})




class Chart extends React.Component {

    render() {
        var {
            prices
        } = this.props;

        const dataPrices= prices.filter(function (product) {
            return 1 == product.productId})
            .map(function (item) {
                let values= Number(item.price);
                return values
            });

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
                    data: dataPrices
                }
            ]
        };

        return (
            <div>
                <h2>Line Example</h2>
                <Line data={data}/>
                {console.log(dataPrices)}

            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)