import React from 'react';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

function TransferList() {

  return (
    <div className="transfer-list">
      <AvailableOptions title="Available option" />
      <SelectedOptions title="Selected option" />
    </div>
  );
}

export default TransferList;