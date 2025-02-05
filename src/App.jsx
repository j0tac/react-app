import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-04-04T00:00:00"); // Fecha objetivo
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now; // Diferencia en milisegundos
    return Math.max(Math.floor(difference / 1000), 0); // Convertir a segundos y asegurarse de que no sea negativo
  }

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days} D - ${hours} H - ${minutes} M - ${secs} S`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundImage: "url('/Maceio.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1, // Asegura que el fondo esté detrás del contenido
        padding: "20px", // Agregar padding para pantallas más pequeñas
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Aumentar opacidad del fondo
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          maxWidth: "90%", // Asegurarse de que el contenedor no sea más ancho que el 90% de la pantalla
          width: "90%", // Ajustar a un porcentaje para mayor responsividad
          margin: "0 auto", // Centrar el contenedor
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem", // Tamaño de fuente responsivo
            fontWeight: "bold",
            color: "#D1D5DB",
            marginBottom: "16px",
            }}
          >
            Daaaaale cheeeeee 🇧🇷
          </h1>
          <p
            style={{
            fontSize: "4rem", // Tamaño de fuente responsivo
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {formatTime(timeLeft)}
        </p>
      </div>
    </div>
  );
}
