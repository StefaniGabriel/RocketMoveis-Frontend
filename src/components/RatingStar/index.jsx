
import { Container } from './styles';

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function RatingStar({ grade, isBigSize }){
let rating = [];

for (let i = 1; i <= 5; i++ ){
    if (i <= grade ){
    rating.push(<VscStarFull key={i} />);
    } else {
    rating.push(<VscStarEmpty key={i} />);
    }
}

return <Container isBigSize={isBigSize}>{rating}</Container>
}

