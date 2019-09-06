import React from 'react';
import './styles.less';

const ExchangeRatesListItem = (props) => {
  return (
    <li className="exchangeRatesListItem">
      <span>{props.currency} ({props.code})</span>
      <span>{props.rate} PLN</span>
    </li>
  );
}

export default ExchangeRatesListItem;
