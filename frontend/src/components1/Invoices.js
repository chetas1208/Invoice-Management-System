import React, { useState, useEffect } from 'react';
import InvoiceList from './InvoiceList';

function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/invoices')
      .then(response => response.json())
      .then(data => setInvoices(data))
      .catch(error => console.error('Error fetching invoices:', error));
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <InvoiceList invoices={invoices} />
    </div>
  );
}

export default Invoices;