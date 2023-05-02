import { useNavigate } from "react-router-dom";

import { useState} from "react";


import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonLink } from '../../components/ButtonLink';

import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";


export function SignUp(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
          return  alert("Preencha todos os campos!");
        }


        api.post("/users", { name, email, password})
            .then(() => {
                alert("Usuário cadrastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                   
                    alert("Não foi possível cadastrar");
                }
            });
    }

    
    function handleBack(){
        navigate(-1);
    }
  

    return(
        <Container>
        
            <Form>
            <h1>RocketMovies</h1>

            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Crie sua conta</h2>

            <Input
             placeholder="Nome"
             type="text"
             icon={FiUser}
             onChange={e => setName(e.target.value) } />

            <Input
             placeholder="E-mail"
             type="text"
             icon={FiMail}
             onChange={e => setEmail(e.target.value)} />

            <Input
             placeholder="Senha"
             type="password"
             icon={FiLock}
             onChange={e => setPassword(e.target.value)} />

            <Button
             title="Cadastrar"
             onClick={handleSignUp} />

           
           <ButtonLink 
                title="Voltar para o login"
                icon={FiArrowLeft}
                onClick={handleBack}
                
            />
           
           

            </Form>

            <Background/>

        </Container>
    )
}