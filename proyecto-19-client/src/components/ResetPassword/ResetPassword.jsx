import React, { useState } from 'react';
import './ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí deberías agregar la lógica para enviar la información al servidor para verificar el código y restablecer la contraseña.

    console.log('Email:', email);
    console.log('Verification Code:', verificationCode);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);

    // Lógica de envío al servidor...
  };

  return (
    <div className="reset-password-container">
      <h4>Restablecer Contraseña</h4>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Código de Verificación:</label>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          required
        />

        <label>Nueva Contraseña:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <label>Confirmar Nueva Contraseña:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Restablecer Contraseña</button>
      </form>
    </div>
  );
};

export default ResetPassword;
