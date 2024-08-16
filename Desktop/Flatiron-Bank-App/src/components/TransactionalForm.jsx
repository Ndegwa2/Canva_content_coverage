import React, { useState } from 'react';

function AddTransactionForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue)) {
      alert("Please enter a valid number for amount");
      return;
    }
    
    const newTransaction = { 
      description, 
      amount: amountValue, 
      date, 
      category 
    };
    
    onAdd(newTransaction);
    
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={category}
        onChange={e => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;