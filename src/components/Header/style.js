import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};

    display: flex;
    justify-content: space-between;
    align-items: center;
   

    padding: 24px 123px;

    > h1{
        font-weight: 700;
        font-size: 24px;

        color: ${({ theme}) => theme. COLORS.PINK};
    }

   
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;

 
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;

        margin-right: 9px;

        
    span {

        font-weight: 400;
        font-size: 14px;
        text-align: end;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
        cursor: pointer;
        
        &:hover{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
    }


    }

    strong {
        white-space: nowrap;

        font-weight: 700;
        font-size: 14px;

        color: ${({ theme }) => theme.COLORS.WHITE_100};

    }

    }

`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;