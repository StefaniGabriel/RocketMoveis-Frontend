import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK};
   
    height: 48px;
    border: 0;
    border-radius: 10px;
    font-weight: 500;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    white-space: nowrap;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
            
    }

    > svg {
            margin-right: 5px;
            
        }
`;