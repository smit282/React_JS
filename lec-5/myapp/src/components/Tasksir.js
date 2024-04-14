import React from 'react'

const Tasksir = () => {
    let curDate = new Date(2024,3,26,21);
    curDate = curDate.getHours();
    let greeting = '';
    const cssStyle = {};

    if(curDate >= 1 && curDate < 12){
        greeting = 'Good Morning';
        cssStyle.color = "green";
    }
    else if(curDate >= 12 && curDate < 16){
        greeting = 'Good Afternoon';
        cssStyle.color = "orange";
    }
    else if(curDate >= 16 && curDate < 19){
        greeting = 'Good evening';
        cssStyle.color = "red";
    }
    else if(curDate >= 19 && curDate < 24){
        greeting = 'Good Night';
        cssStyle.color = "black";
    }

return (
    <div>
        <div>
            <img src=''/>
        </div>
        <h1>
            Hello Sir, <span style={cssStyle}> {greeting} </span>
        </h1>
    </div>
)
}

export default Tasksir