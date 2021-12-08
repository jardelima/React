import React from "react";
import Produto from "./Produto";

const App = () => {
    const [produto, setProduto] = React.useState(null);

    function handleClick({ target }) {
        setProduto(target.innerText);
    }

    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem("Produto");

        if(produtoLocal !== null ) {
            setProduto(produtoLocal);
        }

    }, []);

    React.useEffect(() => {

        if(produto !== null) {
            window.localStorage.setItem("Produto", produto)
        }

    }, [produto]);

    return (
        <>
            <h1>Sua preferencia: { produto }</h1>

            <button style={{marginRight: "1rem"}} onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>

            <Produto produto = { produto } />
        </>
    );
}

export default App;
