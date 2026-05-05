"use client";

import { useState } from "react";

const filhosIniciais = {
  Lea: 0,
  Anais: 0
};

export default function Home() {
  const [crianca, setCrianca] = useState("Lea");
  const [saldos, setSaldos] = useState(filhosIniciais);

  function adicionar(minutos) {
    setSaldos((atual) => ({
      ...atual,
      [crianca]: atual[crianca] + minutos
    }));
  }

  function usar(minutos) {
    setSaldos((atual) => ({
      ...atual,
      [crianca]: Math.max(0, atual[crianca] - minutos)
    }));
  }

  function resetar() {
    setSaldos((atual) => ({
      ...atual,
      [crianca]: 0
    }));
  }

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>Tempo de Ecrã Família</h1>

        <h2>Filho</h2>

        <select
          value={crianca}
          onChange={(e) => setCrianca(e.target.value)}
          style={styles.select}
        >
          <option value="Lea">Léa</option>
          <option value="Anais">Anaïs</option>
        </select>

        <p style={styles.saldo}>
          Saldo: <strong>{saldos[crianca]}</strong> min
        </p>

        <h2>Tarefas</h2>

        <div style={styles.grid}>
          <button style={styles.green} onClick={() => adicionar(5)}>
            Fazer cama +5
          </button>

          <button style={styles.green} onClick={() => adicionar(15)}>
            Quarto +15
          </button>

          <button style={styles.green} onClick={() => adicionar(30)}>
            Boa nota +30
          </button>

          <button style={styles.green} onClick={() => adicionar(10)}>
            Ajudar em casa +10
          </button>
        </div>

        <h2>Usar tempo</h2>

        <div style={styles.grid}>
          <button style={styles.red} onClick={() => usar(5)}>
            Usar -5
          </button>

          <button style={styles.red} onClick={() => usar(15)}>
            Usar -15
          </button>

          <button style={styles.red} onClick={() => usar(30)}>
            Usar -30
          </button>

          <button style={styles.black} onClick={resetar}>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}

const baseButton = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  color: "white",
  fontSize: "15px",
  cursor: "pointer"
};

const styles = {
  main: {
    minHeight: "100vh",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "16px",
    maxWidth: "450px",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center"
  },
  select: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    marginBottom: "10px"
  },
  saldo: {
    fontSize: "24px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px"
  },
  green: {
    ...baseButton,
    background: "#16a34a"
  },
  red: {
    ...baseButton,
    background: "#dc2626"
  },
  black: {
    ...baseButton,
    background: "#111827"
  }
};
