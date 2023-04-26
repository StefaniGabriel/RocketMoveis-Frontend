import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonLink } from "../../components/ButtonLink";

import { useAuth } from "../../hooks/auth";

import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";


export function SignIn(){
    const { signIn }= useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignIn(){
       signIn({ email, password });
    }


    function goSignUp(){
        navigate("/register");
    }



    return(
        <Container>

            <Form>
            <h1>RocketMovies</h1>

            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Faça seu login</h2>

            <Input 
             placeholder="E-mail"
             icon={FiMail} 
             onChange={e => setEmail(e.target.value)}
            />

            <Input 
             placeholder="Senha"
             icon={FiLock}
             onChange={e => setPassword(e.target.value)}
            />

            <Button
             title="Entrar"
             onClick={handleSignIn} 
            />
            
            <ButtonLink 
            title="Criar conta"
            onClick={goSignUp}
            />      
            </Form>

            <Background/>

        </Container>
    )
}