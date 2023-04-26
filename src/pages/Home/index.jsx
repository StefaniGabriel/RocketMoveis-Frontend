import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { NotesMovies } from "../../components/NotesMovies";
import { FiPlus } from "react-icons/fi";


export function Home(){
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  
 
  const navigate = useNavigate()

  function goMoviesPreview(id){
    navigate(`/movies/${id}`)
  }

  
  function goCreateMovie(id){
    navigate("/create")
  }

  useEffect(() => {
      async function fetchMovies(){
          const response = await api.get(`/notes?title=${search}`);
         
          setMovies(response.data);
          
      }
     

      fetchMovies();

  },[search]);


  


  return(

    

    <Container >
      <Header>
      <Input 
      placeholder="Pesquisar pelo título"
      onChange={(e) => setSearch(e.target.value)}
    />
      </Header>

    <main>
     <section>
     <h2>Meus filmes</h2>

  
    <Button  
     title="Adicionar filme"
     icon={FiPlus}
     onClick={goCreateMovie}
     >
    </Button>
  

     </section>
     <Content>

     <div>
     {
             movies.map(movie =>(
              <NotesMovies
                key={String(movie.id)}
                data={movie}
                onClick={() => goMoviesPreview(movie.id)}
              />
            ))
          }

         
     
     </div>
     </Content>
    </main>
    </Container>
    
  )
}