import React, { useState } from 'react';

function InvoiceList({ invoices, onAddItem, onDeleteItem }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = (e, invoiceId) => {
    e.preventDefault();
    if (itemName && itemPrice && itemQuantity) {
      onAddItem(invoiceId, itemName, parseFloat(itemPrice), parseInt(itemQuantity));
      setItemName('');
      setItemPrice('');
      setItemQuantity('');
    }
  };

  const handleDelete = (invoiceId, itemId) => {
    onDeleteItem(invoiceId, itemId);
  };

  return (
    <div className="InvoiceList">
      <h2>Invoices</h2>
      {invoices.map((invoice) => (
        <div key={invoice.id} className="Invoice">
          <h3>{invoice.title}</h3>
          <p>Date: {invoice.date}</p>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="red" onClick={() => handleDelete(invoice.id, item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <form onSubmit={(e) => handleAddItem(e, invoice.id)}>
            <input
              autoFocus
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Item Price"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Item Quantity"
              min='1'
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
            />
            <button type="submit" className="blue">Add Item</button>
          </form>
          <p>Total: ${invoice.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default InvoiceList;