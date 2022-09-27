let data = JSON.parse(localStorage.getItem("verified"));

if(data == null){
    window.location.href = "login.html";
}


import navbar from "./navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let id;
document.getElementById("query").addEventListener("input",function(){

    if(id){
        clearTimeout(id);
    }
        
    id = setTimeout(function(){
        main();
    },1000);
  
});


// Arrabiata

import {getData,display} from "./fetch.js";
// let url = " https://www.themealdb.com/api.php?ref=apilist.fun";
let container = document.getElementById("result");





 let main=()=>{
    let query = document.getElementById("query").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    let data = getData(url).then((res)=>{
        let dat = res.meals;
        console.log(res);
        display(dat,container);
        
    });

   
}; 

//  function display(data,container){

    
//     data.forEach((elm)=>{
//                 let div = document.createElement("div");
        
//                 let img = document.createElement("img");
//                 img.src= elm.strMealThumb;
        
//                 let title = document.createElement("h2");
//                 title.innerText = elm.strCategory;
        
//                 let area = document.createElement("h3");
//                 area.innerText = elm.strArea;
        
//                 div.append(img,title,area);
//                 container.append(div);

//                 // console.log(elm.strArea);
//             });

    
// }  

        




