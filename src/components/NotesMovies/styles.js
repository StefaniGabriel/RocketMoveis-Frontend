import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 222px;

    padding: 32px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 16px;
    margin-bottom: 24px;
  
    > div{

        display: flex;
        flex-direction: column;
    
    > h3 {
        
        font-weight: 700;
        font-size: 24px;
    }

    > p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 15px;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }}

    svg{
        color: ${({ theme}) => theme.COLORS.PINK};

        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

   
`;