import React, { useState, useEffect } from "react";

function IfOffline({ children }) {
  const [onLine, setOnline] = useState(navigator ? navigator.onLine : true);

  useEffect(() => {
    // si window no está disponible sale de la función
    if (!window) return;

    // eventos
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOfline);

    return () => {
      console.log("se removieron los eventos");
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOnline);
    };
  }, [onLine]);

  // Funciones
  const goOnline = () => setOnline(true);
  const goOfline = () => setOnline(false);

  if (onLine) {
    return null;
  }

  return <>{children}</>;
}

export default IfOffline;
