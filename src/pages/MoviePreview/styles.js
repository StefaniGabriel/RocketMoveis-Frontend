import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;


  
    
    > main {
        padding: 0 114px 13px;
        margin-top: 24px;
     
    }

    .buttonLink {
        position: absolute;
        left: 0px;
        top: 0px;

        margin-left: 116px;
        margin-top: 123px;

    }

    

    .content {
        margin-right: 16px;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        gap: 24px;

        margin: 44px 0 40px;

        svg{
        margin-top: 15px;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 20px;
    }

    }
    
    h1 {
        font-size: 36px;
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    .avatar {
        width: 16px;
        height: 16px;
        border-radius: 35px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
       
       
    
    }

    footer {
        display: flex;
        margin: 40px 0;


        > span {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        }

    }

    section {
        display: flex;
        align-items: center;
        gap: 8px;

    

   
    p {
        font-size: 16px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        
    }

    a {
     
        justify-content: flex-start;
    }

    svg{
        color: ${({ theme }) => theme.COLORS.PINK};
       
    }
}

    
    

`;

export const Content = styled.div`
    max-height: 500px;
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