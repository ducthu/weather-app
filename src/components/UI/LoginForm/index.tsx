import React from 'react';
import { Button } from '../Button';
import { Form, Input } from './styles';

const LoginForm: React.FC = () => {
    return (
        <Form>
            <label>Adresse email:</label>
            <Input type="text" placeholder="exemple@gmail.com" />
            <label>Mot de passe:</label>
            <Input type="password" />
            <Button className="mx-auto" label="Se connecter" />
        </Form>
    );
}

export { LoginForm };