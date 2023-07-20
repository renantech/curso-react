import { useState } from 'react';

export default function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail() {
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <input
                    type='text'
                    placeholder='Digite seu email'
                    onChange={e => setEmail(e.target.value)} />
            </form>
            <button onClick={enviarEmail} >Enviar email</button>
            {userEmail && (
                <div>
                    <p>o e-mail do usuário é {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    );

}