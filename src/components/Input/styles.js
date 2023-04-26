import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        border: 0;
        border-radius: 10px;
        padding: 19px 24px;
        

        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background: transparent;

        &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-size: 14px;

        }

        
    }

     svg {
            margin-left: 16px;
            
        }

`;