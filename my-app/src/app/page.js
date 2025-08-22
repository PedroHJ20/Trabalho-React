import Profile from "./components/Profile";
 
export default function Page() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: "0 16px",
        fontFamily: "system-ui, Arial, sans-serif",
        lineHeight: 1.5,
      }}
    >
      <h1>Site criado para a disciplina Programação Front-End</h1>
      <Profile />
    </main>
  );
}
