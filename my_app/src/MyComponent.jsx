// import React, { useState ,useEffect} from 'react';

// function MyComponent() {
//     const [count, setCount] = useState(0);
//     const [color,setColor] = useState('red');

// useEffect(() => {
// document.title=`count: ${count} ${color}`;


// return () => {
// //some cleanup code if needed


// }
// }, [count,color]);

//     function addCount() {
//         setCount(count + 1);
//     }
//     function subtractCount() {
//         setCount(count - 1);
//     }
//     function changeColor(){
//         setColor(c=>c==='red'?'blue':'red');
//     }

//     return (
//         <>
//             <p style={{color:color}}>Count: {count}</p>
//             <button onClick={addCount}>Add Count</button>
//             <button onClick={subtractCount}>Subtract Count</button>
//             <button onClick={changeColor}>Change Color</button>
//             <br />
            
//         </>
//     );

// }

// export default MyComponent;


import React, { useState, useEffect, use } from 'react';

function MyComponent(){
const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);

useEffect(() => {   
    window.addEventListener("resize",handleResize)
console.log("event loisner added ");

return () => {
    window.removeEventListener("resize",handleResize);
    console.log("event loisner removed ");
}
},[]);

useEffect(() => {
    document.title=`Width: ${width}px, Height: ${height}px`;

return () => {//some cleanup code if needed

}
},[width,height]);




function handleResize(){
setWidth(window.innerWidth);
setHeight(window.innerHeight);


}
return (
    <div>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
    </div>
);



}

export default MyComponent;

