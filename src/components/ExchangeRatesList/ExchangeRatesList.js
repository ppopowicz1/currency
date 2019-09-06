import React from 'react';
import ExchangeRatesListItem from '../ExchangeRatesListItem';
import './styles.less';

const ExchangeRatesList = (props) => {
  return (
    <>
      { props.rates.length ?
        <ul className="exchangeRatesList">
          { props.rates.map((item, index) =>
            <ExchangeRatesListItem
              key={index}
              currency={item.currency}
              code={item.code}
              rate={item.rates[0].mid}
            />
          ) }
        </ul>
        :
        <div className="nothingToShow">Nothing to show, add some currencies and get rates.</div>
      }
    </>
  );
}

export default ExchangeRatesList;
