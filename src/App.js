import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            timeData:{},
            bpiEURData:{},
            bpiUSDData:{},
            bpiGBPData:{}
        }
    }

    componentDidMount(){
      this.coinData();
    }
    coinData(){
       fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
           .then(results => {
               return results.json()
           })
           .then(data => {
              console.log(data);
               this.setState({
                 data:data,
                 timeData:data.time,
                   bpiEURData:data.bpi.EUR,
                   bpiUSDData:data.bpi.USD,
                   bpiGBPData:data.bpi.GBP

               });

           })
    };
  render() {

      return (
        <div>
            <h1>{this.state.data.chartName}</h1>
            <table id="t01">
                <tr>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Rate</th>
                    <th>Rate_float</th>
                    <th>Symbol</th>
                </tr>
                <tr>
                    <td>{this.state.bpiEURData.code}</td>
                    <td>{this.state.bpiEURData.description}</td>
                    <td>{this.state.bpiEURData.rate}</td>
                    <td>{this.state.bpiEURData.rate_float}</td>
                    <td>{this.state.bpiEURData.symbol}</td>
                </tr>
                <tr>
                    <td>{this.state.bpiUSDData.code}</td>
                    <td>{this.state.bpiUSDData.description}</td>
                    <td>{this.state.bpiUSDData.rate}</td>
                    <td>{this.state.bpiUSDData.rate_float}</td>
                    <td>{this.state.bpiUSDData.symbol}</td>
                </tr>
                <tr>
                    <td>{this.state.bpiGBPData.code}</td>
                    <td>{this.state.bpiGBPData.description}</td>
                    <td>{this.state.bpiGBPData.rate}</td>
                    <td>{this.state.bpiGBPData.rate_float}</td>
                    <td>{this.state.bpiGBPData.symbol}</td>
                </tr>
            </table>
            <ul>
                <h1>Time</h1>
                <li>Updated: {this.state.timeData.updated}</li>
                <li>UpdatedISO:{this.state.timeData.updatedISO}</li>
                <li>Updated UK:{this.state.timeData.updateduk}</li>
            </ul>
            <p>{this.state.data.disclaimer}</p>
        </div>
    );
  }
}

export default App;
