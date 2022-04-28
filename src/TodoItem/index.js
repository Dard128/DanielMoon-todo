import React, { useState } from "react";
import styled from "styled-components";

const DueContainer = styled.div`
display:flex;
flex-direction:row;
`;


const CheckBox = styled.div`
background-color:blue;
width: 20px;
height:20px;
border-radius: 50px;
margin-right:10px;
`;

const Work = styled.div`
   font-size:24px;

`;

function TodoItem(){
    return(
        <DueContainer>

            <CheckBox>
                
            </CheckBox>
            <Work> Web Development </Work>
        </DueContainer>
    )
}

export default TodoItem;