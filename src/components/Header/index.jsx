import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useAuth } from "../../hooks/auth"; 

import { Container, Profile, InputSearch } from "./style";

import { api } from "../../services/api";


export function Header(  {children}) {

    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    function goProfile(){
        navigate("/profile");
    }

   
    return(
        <Container>

            <h1>RocketMovies</h1>

          <InputSearch>
          {children}
          </InputSearch>
            
            <Profile >
                <div>
              
                <strong
                 onClick={goProfile}
                 >{user.name}</strong>
            
                <span onClick={handleSignOut} >sair</span>

                </div>

                <img 
                 src= {avatarUrl}
                 alt="Foto do usuário"
                 onClick={goProfile}
                />
            </Profile>
        </Container>
    )
}