import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";


    > main {
        grid-area: content;
        margin: 0 123px;
        margin-top: 28px;
        
    }

    div {
        margin-right: 8px;
    }

    section {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 33px;
        
    
        h2 {
        white-space: nowrap;

        font-weight: 400;
        font-size: 32px;

        color: ${({ theme}) => theme.COLORS.WHITE_200};
        margin-right: 650px;
    }
    }

    
`;

export const Content = styled.div`
    max-height: 500px;

    grid-area: content;
    overflow-y: scroll;
 
    

    ::-webkit-scrollbar {
        width: 8px;
        background: transparent;
        
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;      
        border: 3px solid ${({ theme }) => theme.COLORS.PINK}; 
    }
    
`;