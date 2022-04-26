import React, { useState } from "react";
import styled from "styled-components";

const Date = styled.div`
    font-size: 60px;
`;

const Week = styled.div`
    font-size:25px;
    color: dark-grey;
`;

function TodoDate(){
    return(
        <div>
            <Date> 
                2022/04/26
            </Date>
            <Week>
                Tuesday
            </Week>
        </div>
    )
}

export default TodoDate;