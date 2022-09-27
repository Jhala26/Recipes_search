
let getData = async(url)=>{
    let res = await fetch(url);
    let data = await res.json();

    return data;
} 

let display=(data,cont)=>{

    data.forEach((elm)=>{
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src= elm.strMealThumb;

        let div2 = document.createElement("div");

        let title = document.createElement("h3");
        title.innerText = `Title : ${elm.strTags}`;

        let cate = document.createElement("h3");
        cate.innerText = `Category : ${elm.strCategory}`;

        let area = document.createElement("h3");
        area.innerText = `Area : ${elm.strArea}`;

        div2.append(title,cate,area);


        div.append(img,div2);
        cont.append(div);
    });
    
    
}



let append=(data,cont)=>{

    data.forEach((elm)=>{
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src= elm.strMealThumb;

        // let div2 = document.createElement("div");

        let title = document.createElement("h3");
        title.innerText = `Title : ${elm.strTags}`;

        let cate = document.createElement("h3");
        cate.innerText = `Category : ${elm.strCategory}`;

        let area = document.createElement("h3");
        area.innerText = `Area : ${elm.strArea}`;

        let detail = document.createElement("p");
        detail.innerText = `${elm.strIngredient1}:${elm.strMeasure1}, ${elm.strIngredient2}:${elm.strMeasure2}, ${elm.strIngredient3}:${elm.strMeasure3}, ${elm.strIngredient4}:${elm.strMeasure4}, ${elm.strIngredient5}:${elm.strMeasure5}, ${elm.strIngredient6}:${elm.strMeasure6}, ${elm.strIngredient7}:${elm.strMeasure7}, ${elm.strIngredient8}:${elm.strMeasure8}`;

        let proc = document.createElement("p");
        proc.innerText = `Instructions : ${elm.strInstructions}`;
        


        div.append(img,title,cate,area,detail,proc);
        cont.append(div);
    });
    
    
}




export {getData,display,append}; 