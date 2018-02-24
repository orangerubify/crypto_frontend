import React, { Component } from 'react';
import imgDemo from '../images/img-demo.svg';
import Nav from './Nav';
import superagent from '../libraries/Superagent';
require('../index.css');

class StockExchange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentWillMount() {
    superagent
      .get('/api/stock_exchanges/details')
      .end((err, res) => {
        if (res.body.result === 'successful') {
          this.setState({
            data: res.body.data
          })
        } else {

        }
      });
  }

  listStockExhanges() {
    let list
    if(this.state.data.length > 0) {
      list = this.state.data.map((v, k) => {
        v = JSON.parse(v);
        console.log(v);
        return (
          <div className='col-sm' key={k}>
            <p className="alert alert-success" role="alert" style={{marginTop: '15px'}}>
              Ask: {v.ask} <br/>
              Bid: {v.bid} <br/>
              High: {v.high} <br/>
              <strong>Last Price: {v.last_price}</strong> <br/>
              Low: {v.low} <br/>
              Mid: {v.nid}
            </p>
          </div>
        )
      })
    } else {
      list = <p>No datas</p>
    }

    return list
  }

  render() {
    return (
      <main>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            {this.listStockExhanges()}
          </div>
        </div>
      </main>
    );
  }
}

export default StockExchange;
