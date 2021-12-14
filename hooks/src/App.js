import React from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '');
    const { request, data, loading, error } = useFetch();

    React.useEffect(() => {
        async function fetchData() {
            const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/notebook');
        } 
        
        fetchData();
    }, [request]);

    function handleClick({ target }) {
        setProduto(target.textContent);
    }

    if(error) return <p>{error}</p>
    if(loading) return <p>Carregando...</p>
    if(data) {
        return (
            <>
                <p>Produto preferido: { produto }</p>
                <button onClick={ handleClick }>Notebook</button>
                <button onClick={ handleClick }>Smartphone</button>
    
                <div>{ data.nome }</div>
            </>
        );
    } else {
        return null;
    }
}

export default App;
