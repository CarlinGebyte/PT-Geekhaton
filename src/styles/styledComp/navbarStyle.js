import styled from 'styled-components'

export const NavbarStyle = styled.nav`
    background-color: #293462;
    padding: 10px 0;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: center;

    ul{
        padding: 0;

        li{
            display: inline;
            list-style: none;
            margin: 0 10px;

            a{
                text-decoration: none;
                color: #fff;
                font-size: 18px;
            }
        }
    }
`

export const SearchStyle = styled.nav`
    background-color: #293462;
    margin-bottom: 40px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;

    input{
        padding: 5px;
        border-radius: 4px;
        border: 1px solid white;
        font-size: 17px;
        margin: 0 15px;
        transition: .2s;

        &:focus{
            outline: 2px solid #EC9B3B;
    }   
    }
`