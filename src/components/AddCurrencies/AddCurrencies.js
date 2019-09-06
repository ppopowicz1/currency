import React from 'react';
import './styles.less';

const AddCurrencies = (props) => {
  return (
    <div className="addCurrencies">
      <p>Enter 3-digit currency code:</p>
      <input
        type="text"
        minLength="3"
        maxLength="3"
        onChange={props.handleChange}
        value={props.input}
      />
      <button
        disabled={props.input.length !== 3}
        onClick={props.addCurrency}
      >
        Add
      </button>
    </div>
  );
}

export default AddCurrencies;
