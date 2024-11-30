let url = "http://universities.hipolabs.com/search?name=";
let btn= document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country= document.querySelector("input").value;
    console.log(country);
    let colgArr = await getColleges(country);
    show(colgArr);
});

function show(colgArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colgArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
    
}

async function getColleges(country){
    try{
        let result = await axios.get(url + country);
        return result.data;
    }
    catch(e){
        console.log("error : ",e);
    }
}