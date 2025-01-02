import React, { useState } from 'react';

function InvoiceForm({ onCreateInvoice }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateInvoice(title);
    setTitle('');
  };

  return (
    <div className="InvoiceForm">
      <h2>Create New Invoice</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        &nbsp;
        <button type="submit" className="blue">Create Invoice</button>
      </form>
    </div>
  );
}

export default InvoiceForm;
