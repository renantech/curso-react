import Button from "./events/Button";

function Evento({ numero }) {

    function meuEvento() {
        console.log(`numero: ${numero}`);
        console.log('Ativando meu primeiro evento!')
    }

    // const evento = () => {
    //     console.log('hello world');
    // }

    return (
        <>
            <h1>Clique para disparar um evento</h1>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={meuEvento} text="Segundo Evento" />
        </>
    );

}

export default Evento;