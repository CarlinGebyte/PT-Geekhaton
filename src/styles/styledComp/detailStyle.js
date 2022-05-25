import styled from 'styled-components'

export const Detail = styled.div`
    .modal_background{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;

        .modal_content {
            border-radius: 8px;
            width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #fff;

            @media (max-width: 500px) {
                width: 95%;                
            }

            .modal_header {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                margin-top: 10px;
                border-radius: 8px;

                h1 {
                    margin: 0 20px;
                    font-size: 20px;
                }

                button {
                    margin: 0 20px;
                    border: none;
                    height: 30px;
                    width: 30px;
                    background-color: #F24C4C;
                    border-radius: 50%;
                    color: #fff;
                    font-size: 16px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.3s all ease-in-out;

                    &:hover{
                        border: 2px solid #F24C4C;
                        background-color: transparent;
                        transform: scale(1.04);
                    }
                }
            }   

            .modal_body{
                margin: 10px 20px;

                img{
                    max-width: 100%;
                    border-radius: 0 0 8px 8px;
                    margin-bottom: 20px;
                }
            }
        }
    }
`