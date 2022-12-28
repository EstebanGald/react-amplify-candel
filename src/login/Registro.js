import {Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Registro = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>Bienvenido a Candel</h1>
                    <h3>Estas registrado</h3>
                    <button onClick={signOut}>Cerrar Sesion</button>
                </div>
            )}
        </Authenticator>
    );
};

export default Registro;