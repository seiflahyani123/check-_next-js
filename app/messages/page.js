'use client';
import { useEffect, useState } from 'react';

export default function Messages() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('contactMessage');
    if (stored) {
      setMessage(JSON.parse(stored));
    }
  }, []);

  if (!message) {
    return <div className="messages-no-message">No message found.</div>;
  }

  return (
    <div className="messages-container">
      <h2 className="messages-title">Message reçu :</h2>
      <p className="messages-item"><strong>Nom:</strong> {message.name}</p>
      <p className="messages-item"><strong>Email:</strong> {message.email}</p>
      <p className="messages-item"><strong>Téléphone:</strong> {message.phone}</p>
      <p className="messages-item"><strong>Message:</strong> {message.message}</p>
    </div>
  );
}
