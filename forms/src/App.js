import React from "react";

function App() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  // const [form, setForm] = React.useState({
  //     nome: "",
  //     email: "",
  // });

  function handleSubmit(event) {
      event.preventDefault();
  }

  // function handleChange({target}) {
  //     const {id, value} = target;

  //     setForm({ ...form, [id]:value })
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />

          <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
