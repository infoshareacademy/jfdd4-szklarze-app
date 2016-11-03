import React from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists,
    products: state.products,
    productsData: state.pricesData.prices
})
const mapDispatchToProps = (dispatch) => ({
})





class Chart extends React.Component {

    render() {
        var {
            productsData,
        } = this.props;

        let id = this.props.productId;
        var moment = require('moment');


        const prices = productsData.filter(product => id == product.productId)
            .map(product => product.price);

        const dates = productsData.filter(product => id == product.productId)
            .map(product => moment(product.date).lang("pl").format('ll'));


        const data = {
            labels: dates,
            datasets: [
                {   label: 'Wyres zmian ceny produktu',
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
                    data: prices
                }
            ]
        };

        return (
            <div>
                <Line data={data}/>
                {console.log(dates)}
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)