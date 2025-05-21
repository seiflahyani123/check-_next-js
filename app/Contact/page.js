'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (form.name && form.email && form.message) {
      localStorage.setItem('contactMessage', JSON.stringify(form));
      router.push('/messages');
    } else {
      alert('Please fill in name, email and message');
    }
  };

  return (
    <div className="contact-form-container">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="contact-input"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="contact-input"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="contact-input"
      />
      <input
        type="text"
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="contact-input"
      />
      <button onClick={handleSend} className="contact-button">
        Send
      </button>
    </div>
  );
}
