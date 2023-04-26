import { Container } from "./styles";
import { Tag } from "../Tag";
import { RatingStar } from "../RatingStar";




export function NotesMovies({ data , ...rest }){
 
   
   return(
    <Container {...rest}>
       
         <div>
       
         <h3>{data.title}</h3>
         
         <RatingStar grade={data.rating} isBigSize={false} />
          
         <p>{data.description}</p>

         {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
  
         </div>
       
       
    </Container>
   )

}