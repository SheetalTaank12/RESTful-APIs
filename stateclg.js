let url = "http://universities.hipolabs.com/search?name=india";
let btn= document.querySelector("button");

btn.addEventListener("click",async()=>{
    let state= document.querySelector("input").value;
    console.log(state);
    let colgArr = await getColleges(state);
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

async function getColleges(state){
    try{
        let result = await axios.get(url + state);
        return result.data;
    }
    catch(e){
        console.log("error : ",e);
    }
}