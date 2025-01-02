import React, { useState } from 'react';
import './App.css';
import InvoiceList from './components1/InvoiceList';
import InvoiceForm from './components1/InvoiceForm';

function App() {
  const [invoices, setInvoices] = useState([]);

  const handleCreateInvoice = (title) => {
    const newInvoice = { id: Date.now(), title: title, date: new Date().toLocaleString(), items: [] };
    setInvoices([...invoices, newInvoice]);
  };

  const handleAddItem = (invoiceId, itemName, itemPrice, itemQuantity) => {
    const updatedInvoices = invoices.map((invoice) => {
      if (invoice.id === invoiceId) {
        const newItem = { id: Date.now(), name: itemName, price: parseFloat(itemPrice), quantity: parseInt(itemQuantity) };
        const newItems = [...invoice.items, newItem];
        return { ...invoice, items: newItems };
      }
      return invoice;
    });
    setInvoices(updatedInvoices);
  };

  const handleDeleteItem = (invoiceId, itemId) => {
    const updatedInvoices = invoices.map((invoice) => {
      if (invoice.id === invoiceId) {
        const newItems = invoice.items.filter((item) => item.id !== itemId);
        return { ...invoice, items: newItems };
      }
      return invoice;
    });
    setInvoices(updatedInvoices);
  };

  return (
    <div className="App">
      <h1>Invoice Management System</h1>
      <InvoiceForm onCreateInvoice={handleCreateInvoice} />
      <InvoiceList
        invoices={invoices}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
