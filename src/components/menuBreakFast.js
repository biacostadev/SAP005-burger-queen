// import React, {useState} from 'react';


// const menuBreakFast=()=>{
//     const token=localStorage.getItem("token")
//     const [menu, setMenu] = useState('');

//     fetch('https://lab-api-bq.herokuapp.com/products',{
//       headers:{ 
//         "accept": "application/json",
//       "Authorization":`${token}`},
//     })
//     .then((response)=> response.json())
//     .then((json)=>{
//       setMenu(json)
//       // json.type.map(food => {
//       // return{
//       //   name:food.name,
//       //   price:food.price,
//       //   id: food.id,

//       // }
//       // })
//     })
//     console.log(menu)

// }

