function FooterComponent({ totalTarefas }) {
    return (
        <footer className="app-footer">
            <p>© 2026 - Todo List</p>
            <span>Total de tarefas: {totalTarefas}</span>
        </footer>
    );
}

export default FooterComponent;
