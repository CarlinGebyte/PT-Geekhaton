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
        border: 1px solid grey;
        border-radius: 4px;
        padding: 10px 15px;
        transition: .5s;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover{
        transform: scale(1.05);
        }

        p{
            text-align: center;
            font-size: 20px;
        }

        img{
            max-width: 100%;
            border-radius: 0 0 4px 4px;
            cursor: pointer;
        }

        button{
            margin: 20px 0 10px 0;
            padding: 10px;
            border-radius: 4px;
            border: none;
            font-weight: bold;
            font-size: 15px;
            color: #fff;
            background-color: #F7D716;
            transition: .3s;

            &:hover{
                transform: scale(1.1);
                cursor: pointer;
            }

            &:active{
                transform: scale(.9);
            }
        }
    }
`