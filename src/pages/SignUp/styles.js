import styled from "styled-components";
import backGroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;
   
    display: flex;
    align-items: stretch;

  
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    

  > h1 {
    
        font-weight: 700;
        font-size: 48px;

        color: ${({ theme }) => theme.COLORS.PINK}
    }

    > p {
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_400}

    }
    
    > h2 {
        font-size: 24px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE_100};

        margin-top: 48px;
        margin-bottom: 48px;
    }

   

   
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backGroundImg}) no-repeat center center;
    background-size: cover;
`;
