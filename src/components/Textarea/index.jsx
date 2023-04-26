import { Container } from "./styles";

export function Textarea({ velue, ...rest}){
    return(
        <Container {...rest}>
            {velue}
        </Container>
    )
}