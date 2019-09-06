import React from 'react';
import AddCurrencies from './components/AddCurrencies';
import ChosenCurrencies from './components/ChosenCurrencies';
import ExchangeRatesList from './components/ExchangeRatesList';
import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      chosenCurrencies: [],
      rates: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value}
    );
  }

  addCurrency = () => {
    const currencies = this.state.chosenCurrencies;
    currencies.push(this.state.input);
    this.setState({
      chosenCurrencies: currencies,
      input: ''
    });
  }

  removeCurrency = (currency) => {
    const currencies = this.state.chosenCurrencies;
    const filteredCurrencies = currencies.filter(element => element !== currency);
    this.setState({
      chosenCurrencies: filteredCurrencies
    });
  }

  clearCurrencyList = () => {
    this.setState({
      chosenCurrencies: []
    });
  }

  getRates = () => {
    const chosenCurrencies = this.state.chosenCurrencies;
    let counter = 0;
    let allData = [];

    chosenCurrencies.forEach(value => {
      fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${value}/?format=json`)
      .then(response => response.json())
      .then(data => allData.push(data))
      .then(counter++)
      .then(() => {
        if (counter === chosenCurrencies.length) {
          this.setState({ rates: allData });
        }
      })
      .catch(error => console.error(error));
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Currency Exchange Rates</h1>

        <AddCurrencies
          handleChange={this.handleChange}
          addCurrency={this.addCurrency}
          input={this.state.input}
        />

        <ChosenCurrencies
          currencies={this.state.chosenCurrencies}
          removeCurrency={this.removeCurrency}
          clearCurrencyList={this.clearCurrencyList}
        />

        <div className="getRatesButtonWrapper">
          <button
            onClick={this.getRates}
            disabled={!!!this.state.chosenCurrencies.length}
          >
            Get rates!
          </button>
        </div>

        <ExchangeRatesList
          rates={this.state.rates}
        />
      </div>
    );
  }
}

export default App;
