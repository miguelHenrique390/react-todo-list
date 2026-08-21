import ItemComponent from "./ItemComponent";

function ListComponent({
    concluirTarefa,
    removerTarefa,
    tarefas
}) {
    return (
         <ul className="lista">
                {tarefas.map((tarefa, indice) => (
                    <ItemComponent
                        key={indice}
                        tarefa={tarefa}
                        indice={indice}
                        concluirTarefa={concluirTarefa}
                        removerTarefa={removerTarefa}
                    />
                ))}
            </ul> 
    )
}

export default listComponent;