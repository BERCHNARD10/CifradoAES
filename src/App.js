import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function CifradoAES() {
  const [mensaje, setMensaje] = useState('');
  const [clave, setClave] = useState('');
  const [mensajeCifrado, setMensajeCifrado] = useState('');
  const [mensajeDescifrado, setMensajeDescifrado] = useState('');

  const cifrarMensaje = () => {
    const mensajeCifrado = CryptoJS.AES.encrypt(mensaje, clave).toString();
    setMensajeCifrado(mensajeCifrado);
  };

  const descifrarMensaje = () => {
    const mensajeDescifrado = CryptoJS.AES.decrypt(mensajeCifrado, clave).toString(CryptoJS.enc.Utf8);
    setMensajeDescifrado(mensajeDescifrado);
  };

  return (
    <div>
      <h2>Cifrado AES</h2>
      <label>
        Mensaje:
        <input type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
      </label>
      <label>
        Clave:
        <input type="text" value={clave} onChange={(e) => setClave(e.target.value)} />
      </label>
      <button onClick={cifrarMensaje}>Cifrar</button>
      <button onClick={descifrarMensaje}>Descifrar</button>
      <p>Mensaje Cifrado: {mensajeCifrado}</p>
      <p>Mensaje Descifrado: {mensajeDescifrado}</p>
    </div>
  );
}

export default CifradoAES;










