import React, { useState } from 'react';
import { Gamepad2, Github, Mail, Linkedin } from 'lucide-react';
import { PixelatedContainer } from '../PixelatedContainer';

export function Connect() {
  // State variables for email, message, and status
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const socialLinks = [
    { icon: Github, color: 'bg-slate-700', label: 'GitHub', href: 'https://github.com/Mohaanaaaa' },
    { icon: Linkedin, color: 'bg-blue-600', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohana-y-2a121914b/' },
    { icon: Mail, color: 'bg-red-500', label: 'Email', href: 'mailto: mohanay52@gmail.com' },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const smtpConfig = {
      Host: process.env.REACT_APP_SMTP_HOST,
      Username: process.env.REACT_APP_SMTP_USERNAME,
      Password: process.env.REACT_APP_SMTP_PASSWORD,
      To: process.env.REACT_APP_SMTP_RECIPIENT,
      From: email, // Use the state variable
      Subject: "New message from contact form",
      Body: message // Use the state variable
    };

    try {
      await window.Email.send(smtpConfig); // Assuming you have an SMTP email service
      setStatus('Mail sent successfully!'); // Update status
      setEmail(''); // Clear email field
      setMessage(''); // Clear message field
    } catch (error) {
      setStatus(`Failed to send email: ${error.message}`); // Handle error state
    }
  };

  return (
    <PixelatedContainer>
      <div className="flex items-center gap-4 text-xl text-slate-800 mb-6">
        <Gamepad2 className="w-6 h-6" />
        <h2>CONNECT</h2>
      </div>
      <div className="space-y-6">
        <div className="flex justify-center gap-4">
          {socialLinks.map(({ icon: Icon, color, label, href }) => (
            <a
              key={label}
              href={href}
              className={`pixel-button ${color} group relative`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </a>
          ))}
        </div>
        <div className="pixel-border bg-slate-50 p-4 text-center">
          <p className="text-sm mb-4">Let's team up and create something awesome!</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full px-4 py-2 pixel-border bg-white text-sm focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="YOUR MESSAGE"
              rows={4}
              className="w-full px-4 py-2 pixel-border bg-white text-sm focus:outline-none resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" className="pixel-button bg-green-500 text-sm">
              SEND MESSAGE
            </button>
          </form>
          {status && <p className="mt-4 text-sm">{status}</p>} 
          {/* Display status message */}
        </div>
      </div>
    </PixelatedContainer>
  );
}