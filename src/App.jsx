import { useState, useEffect } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {

    const [texto, setTexto] = useState("");







    const [tarefas, setTarefas] = useState( () =>{
        const tarefasSalvas = localStorage.getItem(
            "tarefas"
        )

        return tarefasSalvas ? 
        JSON.parse(tarefasSalvas) : []
    } );




    


        useEffect( () => {
        localStorage.setItem(
                "tarefas",
                JSON.stringify(tarefas)
        )
        }, [tarefas])


        




    function adicionarTarefa() {
        if (texto.trim() !== "") {
            if (tarefas.includes(texto)) {
                alert("Essa tarefa já foi adicionada!");
                return;
            }
            setTarefas([...tarefas, {
                texto: texto,
                concluida: false
            }]);
            setTexto("");
        }
    }

    function removerTarefa(indiceRemover) {
        const novaLista = tarefas.filter(
            (_, indice) => indice !== indiceRemover
        );

        setTarefas(novaLista);
    }

    function limparTarefas() {
        setTarefas([]);
    }

    function concluirTarefa(indiceSelecionado) {
        const novaLista = tarefas.map(
            (tarefa, indice) => {
                if (indice === indiceSelecionado) {
                    return {
                        ...tarefa,
                        concluida: !tarefa.concluida
                    };
                }
                return tarefa;
            }
        );
        setTarefas(novaLista);
    }

    return (
        <div className="page-shell">
            <HeaderComponent />

            <main className="container">
                <h1>Lista de Tarefas</h1>

                <p className="digitado">
                    Você digitou: {texto}
                </p>

                {
                    tarefas.length === 0 &&
                    <p className="vazio">Nenhuma tarefa cadastrada.</p>
                }

                <FormComponent  
                    texto={texto}
                    setTexto={setTexto}
                    adicionarTarefa={adicionarTarefa}
                />

                <ListComponent
                    tarefas={tarefas}
                    concluirTarefa={concluirTarefa}
                    removerTarefa={removerTarefa}
                />

                <p className="digitado">Total tarefas: {tarefas.length}</p>

                <ButtonComponent
                    action={limparTarefas}
                    texto="Limpar Tarefas"
                />
            </main>

            <FooterComponent totalTarefas={tarefas.length} />
        </div>
    );
}

export default App;