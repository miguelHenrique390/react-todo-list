function ButtonComponent({
    action,
    texto
}) {
    return (
        <button onClick={action}>
            {texto}
        </button>
    );
}

export default ButtonComponent;