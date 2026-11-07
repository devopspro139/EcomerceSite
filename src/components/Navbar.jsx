import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { grey } from '@mui/material/colors';
import {mobile} from "../responsive"

const Container=styled.div`
    height: 60px; 
    ${mobile({height:"80px"})}  
`
const Wrapper=styled.div`
    padding: 10px  20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0"})}
`

//////////// leftNav
const LeftNav=styled.div`
  flex: 1; /*it's like width but bach nsawi left right and middle */
  display: flex;
  align-items: center;
  
`
const Language=styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none"})}

`
const SearchContainer=styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left:25px;
  padding: 5px;
`
const SearchInput=styled.input`
  border: none;
  ${mobile({ width: "50px"})}

`

///////////////////////////

//RightNav
const RightNav=styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 24px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

//middleNav
const MiddleNav=styled.div`
  flex: 1;
  text-align: center;
`
const Logo=styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <LeftNav>
              <Language>EN</Language>
              <SearchContainer>
                <SearchInput type="text" style={{color:'grey'}} placeholder='Serach'/>
                <SearchIcon style={{color:"gray",fontSize:16}}/>
              </SearchContainer>

            </LeftNav>
            <MiddleNav>
              <Logo>HAFED STORE</Logo>
            </MiddleNav>

            <RightNav>
              <MenuItem>REGISTER</MenuItem>  
              <MenuItem>SIGN IN</MenuItem>  
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon  />
                </Badge>
              </MenuItem>  
            </RightNav>
        </Wrapper>
    </Container>
  )
}

export default Navbar
