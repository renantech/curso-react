function Pessoa({nome, idade, profissao, foto}) {

    return (
        <div>
            <img src={nome} alt='Nome da Pessoa' />
            <h2>Nome: {idade}</h2>
            <p>Idade: {profissao}</p>
            <p>Profissão: {foto}</p>
        </div>
    );

}

export default Pessoa;