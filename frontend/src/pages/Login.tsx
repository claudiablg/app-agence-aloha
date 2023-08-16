import React, { useState } from 'react';
import { InputText, Button } from '@aloha/components';
import { ButtonSize, InputSize } from '../common';

export const Login  = ({})  => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
    // Perform login logic here (e.g., API call)
        console.log('Logging in with:', { username, password });
    };

    return(
        <>
            {/* <InputText value={username} placeholder={'email'} size={InputSize.medium}/>
            <InputText value={password} placeholder={'password'} /> */}
            <Button size={ButtonSize.medium}></Button>
        </>
    )
};

export default Login;