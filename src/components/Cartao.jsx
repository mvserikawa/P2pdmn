
const Cartao = function(itens) {
    return (
        <div className="card">
            <div className="card-header text muted">{itens.
            titulo}</div>
            <div className="card-body">
                {itens.conteudo}
            </div>
        </div>
    )
}

export default Cartao