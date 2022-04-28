import React, { useState } from "react";
import styled from "styled-components";

const Day = styled.div`
    font-size: 60px;
`;

const Week = styled.div`
    font-size:25px;
`;

function TodoDate(){
    const Today = new Date();
    console.log(Today.getDate);

    return(
    <>
        <div>
            {Today.getFullYear()}
            /
            {Today.getMonth()+1}
            /
            {Today.getDate()}
            <Day> 
            </Day>
            <Week>
                Tuesday
            </Week>
        </div>
    </>
    )
}

export default TodoDate;