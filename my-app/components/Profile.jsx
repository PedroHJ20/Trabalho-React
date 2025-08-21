export default function Profile() {
  return (
    <section style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <img
        src="/Mídia.jpg"
        alt="Minha foto"
        width={120}
        height={120}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <div>
        <h2 style={{ margin: 0 }}>Seu Nome Aqui</h2>
        <p style={{ margin: "4px 0 0" }}>
          Eu sou um estudante de Sistemas para internet do 3 periodo.
          Gostaria de uma vaga de estágio.
          
        </p>
      </div>
    </section>
  );
}
 