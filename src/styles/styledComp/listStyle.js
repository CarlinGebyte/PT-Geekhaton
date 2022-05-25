import styled from 'styled-components'

export const ListContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 40px 20px;

    div{
        width: 200px;
        border: 1px solid black;
        border-radius: 4px;
        padding: 10px 15px;

        p{
            text-align: center;
            font-size: 20px;
        }

        img{
            max-width: 100%;
            border-radius: 0 0 4px 4px;
        }
    }
`