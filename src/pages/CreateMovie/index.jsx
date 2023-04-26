import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import { Container, Form, Content } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";
import { ButtonBlack } from "../../components/ButtonBlack";
import { ButtonLink} from '../../components/ButtonLink';
import { Header } from '../../components/Header';


export function CreateMovie() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTags]);
        setNewTags("");

        
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
        setNewTags("");
    }

    async function handleCreateMovie(){

        if(!title) {
            return alert("Digite o título da nota.");
        }
 
        if(!rating) {
           return alert("Digite uma avaliação de 1  5");
        }

        if(newTags) {
            return alert("Você deixou um tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
        }
        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        } );

        alert("Nota criada com sucesso!");
        navigate("/");
    }

    function handleRemoveNotes(){
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );

          Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
          );
    }

    return(
        <Container>
            <Header/>
           <main>

           <div className="buttonLink">
           <ButtonLink 
                title="Voltar"
                icon={FiArrowLeft}
                onClick={handleBack}
                />
           </div>

            <Content>

            <h1>Novo filme</h1>

            <Form>
                <div>
                <Input
                 placeholder="Título"
                 onChange={e => setTitle(e.target.value)}
                 />

                <Input
                 placeholder="Sua nota (de 0 a 5)"
                 onChange={e => setRating(e.target.value)}
                 />
                </div>
        
                <Textarea
                 placeholder="Observações"
                 onChange={e => setDescription(e.target.value)}
                 />

                <p>Marcadores</p>

                <div className="tags">
                {
                    tags.map((tag, index) => (
                    <NewTag 
                    
                    key={String(index)}
                    value={tag}
                    onClick={() => {handleRemoveTag(tag)}}
                    
                />
                ))
                    
                }

                <NewTag
                 isNew
                 placeholder="Novo marcador"
                 onChange={e => setNewTags(e.target.value)}
                 value={newTags}
                 onClick={handleAddTag}
                 />
                </div>

                <div className="button">
                <ButtonBlack
                title="Excluir filme"
                onClick={handleRemoveNotes}


                 />
                
                <Button
                 title="Salvar alterações"
                 onClick={handleCreateMovie}
                 />            
                </div>
                
            </Form>
            </Content>
            </main>

        </Container>
    )
}