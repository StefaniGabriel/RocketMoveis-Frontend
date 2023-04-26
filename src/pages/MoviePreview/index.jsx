import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { FiClock } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";
import { RatingStar } from "../../components/RatingStar";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { ButtonLink } from "../../components/ButtonLink";


export function MoviePreview() {
    const [data, setData] = useState(null);
    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    const params = useParams()

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }


    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }

        fetchNotes();
    },[]);

    return(
       <Container>
        <Header/>

      
    {
            data &&
            <main>

            <div className="buttonLink">
           <ButtonLink 
                title="Voltar"
                icon={FiArrowLeft}
                onClick={handleBack}
                />
           </div>

               <Content>
                <div className="content">
    
                <div className="header">

                 <h1> 
                   {data.title}
                   </h1>
   
                   <RatingStar grade={data.rating} isBigSize={false}  />
                </div>
        
                <section>
        
                <img className="avatar" src={avatarUrl} 
                alt="Foto do usuário" />
                <span> Por {user.name}</span>

                <FiClock/>

                <span>{data.updated_at}</span>

                </section>
        
                {
                   data.tags &&
                   <footer>
                       {
                           data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                       }
                   </footer>
               }
        
                <p>{data.description}</p>
                
                </div>
           
            
            </Content>
    

           </main>
    }
        
       
       </Container>

      
        
    )
}