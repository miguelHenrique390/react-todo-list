import ButtonComponent from "./buttonComponent"

function FormComponent({
    texto,
    setTexto,
    adicionarTarefa
}) {
    return (
        <div className="formulario">
                <input
                    type="text"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            adicionarTarefa();
                        }
                    }}
                    placeholder="Digite uma tarefa"
                />                
                <ButtonComponent
                action = {adicionarTarefa}
                texto = "Adicionar Tarefa"/>
            </div>
    )
}

export default FormComponent;







