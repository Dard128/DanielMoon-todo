import React, { useState } from "react";
import styled from "styled-components";

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoAdd from "../TodoAdd";

const Container = styled.div`
    height: 100vh;
    background-color: grey;
    display: flex;
    
`;


const TodoContainer = styled.div`
    border-radius: 20px;
    background-color: white;
    width: 370px;
    height: 740px;
    padding: 20px;
    margin-left: 620px;
`;



function Mainpage(){
    return (
        <Container>
            <TodoContainer>
                <TodoDate/>
                <TodoLeft/>
                <TodoAdd/>
            </TodoContainer>
        </Container>
    )
}   

export default Mainpage;


