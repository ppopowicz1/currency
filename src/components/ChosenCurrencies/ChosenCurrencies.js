import React from 'react';
import './styles.less';

const ChosenCurrencies = (props) => {
  return (
    <div className="chosenCurrencies">
      { props.currencies.length ?
        <div>
          <p>Chosen currencies:</p>
          { props.currencies.map(
            (currency, index) =>
              <button
                onClick={() => props.removeCurrency(currency)}
                key={index}
                title={`Click to remove ${currency}`}
              >
                {currency} &times;
              </button>
            )
          }
          <button
            className="clearButton"
            onClick={props.clearCurrencyList}
            title="Clear chosen currencies list"
          >
            Clear list
          </button>
        </div>
      :
        <p>Please add some currencies!</p>
      }
    </div>
  );
}

export default ChosenCurrencies;
