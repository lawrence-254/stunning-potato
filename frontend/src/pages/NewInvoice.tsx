// src/pages/NewInvoice.tsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const NewInvoiceContainer = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const NewInvoice: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({
    item: '',
    dueDate: '',
    amount: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post(`/api/schools/${id}/invoices`, invoice)
      .then(response => {
        navigate(`/schools/${id}`);
      })
      .catch(error => console.error('Error creating invoice:', error));
  };

  return (
    <NewInvoiceContainer>
      <h1>Create New Invoice</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Item:
          <Input
            type="text"
            name="item"
            value={invoice.item}
            onChange={handleChange}
          />
        </label>
        <label>
          Due Date:
          <Input
            type="date"
            name="dueDate"
            value={invoice.dueDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <Input
            type="number"
            name="amount"
            value={invoice.amount}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Create Invoice</Button>
      </Form>
    </NewInvoiceContainer>
  );
};

export default NewInvoice;
