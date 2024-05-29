// src/pages/SchoolDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const SchoolDetailsContainer = styled.div`
  padding: 20px;
`;

const DetailCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const InvoiceCard = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const CollectionCard = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const SchoolDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [school, setSchool] = useState<any>(null);
  const [invoices, setInvoices] = useState([]);
const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`/api/schools/${id}`)
      .then(response => setSchool(response.data))
      .catch(error => console.error('Error fetching school details:', error));

    axios.get(`/api/schools/${id}/invoices`)
      .then(response => setInvoices(response.data))
      .catch(error => console.error('Error fetching invoices:', error));

    axios.get(`/api/schools/${id}/collections`)
      .then(response => setCollections(response.data))
      .catch(error => console.error('Error fetching collections:', error));
  }, [id]);

  return (
    <SchoolDetailsContainer>
      {school && (
        <>
          <DetailCard>
            <h1>{school.name}</h1>
            <p>Type: {school.type}</p>
            <p>Product: {school.product}</p>
            <p>County: {school.county}</p>
            <p>Registration Date: {school.registrationDate}</p>
            <p>Contact: {school.contact}</p>
            <p>School Balance: ${school.balance}</p>
          </DetailCard>

          <DetailCard>
            <h2>Invoices</h2>
            <Link to={`/schools/${id}/invoices/new`}>Create New Invoice</Link>
            {invoices.map((invoice: any) => (
              <InvoiceCard key={invoice.id}>
                <p>Invoice Number: {invoice.number}</p>
                <p>Item: {invoice.item}</p>
                <p>Creation Date: {invoice.creationDate}</p>
                <p>Due Date: {invoice.dueDate}</p>
                <p>Amount: ${invoice.amount}</p>
                <p>Paid Amount: ${invoice.paidAmount}</p>
                <p>Balance: ${invoice.balance}</p>
                <p>Status: {invoice.status}</p>
                <Link to={`/schools/${id}/invoices/${invoice.id}`}>Edit Invoice</Link>
              </InvoiceCard>
            ))}
          </DetailCard>

          <DetailCard>
            <h2>Collections</h2>
            {collections.map((collection: any) => (
              <CollectionCard key={collection.id}>
                <p>Invoice Number: {collection.invoiceNumber}</p>
                <p>Collection Number: {collection.number}</p>
                <p>Date: {collection.date}</p>
                <p>Status: {collection.status}</p>
                <p>Amount: ${collection.amount}</p>
                <button onClick={() => updateCollectionStatus(collection.id, 'Valid')}>Mark as Valid</button>
                <button onClick={() => updateCollectionStatus(collection.id, 'Bounced')}>Mark as Bounced</button>
              </CollectionCard>
            ))}
          </DetailCard>
        </>
      )}
    </SchoolDetailsContainer>
  );


function updateCollectionStatus(collectionId: string, status: string) {
    axios.put(`/api/collections/${collectionId}`, { status })
        .then(response => {
            setCollections(collections.map((collection: any) =>
                collection.id === collectionId ? { ...collection, status } : collection
            ));
        })
        .catch(error => console.error('Error updating collection status:', error));
}
};

export default SchoolDetails;
