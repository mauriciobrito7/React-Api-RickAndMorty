import React from "react";

function Share({ children, title, text }) {
  const compartir = e => {
    e.preventDefault();
    navigator
      .share({
        title: `${title}`,
        text: text,
        url: document.location.href
      })
      .then(() => alert("Contenido compartido"))
      .catch(error => alert("Hubo un error"));
  };

  if (!navigator.share) return null;

  console.log(children);

  return (
    <div>
      <a onClick={compartir} style={{ color: "white", cursor: "pointer" }}>
        {children}
      </a>
    </div>
  );
}

export default Share;
