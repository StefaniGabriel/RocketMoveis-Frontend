import styled from "styled-components";

export const Container = styled.button`

    display: flex;
   
    gap: 8px;
    
    color: ${({ theme }) => theme.COLORS.PINK};
    background: none;
    border: none;

    margin:  15px auto;

    
    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 40;
    }




`;