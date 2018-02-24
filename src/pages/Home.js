import React, { Component } from 'react';
import imgDemo from '../images/img-demo.svg';
import Nav from './Nav';
import superagent from '../libraries/Superagent';
require('../index.css');

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentWillMount() {
    superagent
      .get('/api/stock_exchanges/all')
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
        return (
          <div className="col-sm" key={k}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{v.name}</h5>
                <p className="card-text">
                  Website: <a href={v.website} target='_blank' rel="noopener noreferrer">{v.website}</a>
                </p>
                <a href={'stock_exchanges/' + v.id} className="btn btn-primary">Choose</a>
              </div>
            </div>
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

export default Home;
