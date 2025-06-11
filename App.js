
import React, { useState } from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <h1>Rüzgar'ın LGS Yaz Tatili Programı</h1>
      <p>📘 Türkçe: Paragraf – Paragrafik (Limit)</p>
      <p>➗ Matematik: Problem – Hız ve Renk</p>
      <p>🧪 Fen: Mevsimler – Palme</p>
      <button onClick={() => setChecked(!checked)}>
        {checked ? 'Tamamlandı ✅' : 'Tamamla'}
      </button>
    </div>
  );
}

export default App;
