let btn= document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    console.log(fact);
    let p= document.querySelector("p");
    p.innerText = fact;
});
let url = "https:/catfact.ninja/fact";

async function getFacts() {
    try {
        let result = await axios.get(url);
        // console.log(result.data.fact);
        let res = result.data.fact;
        return res;


    }
    catch(e){
        console.log("error : ",e);
    }
}

let dogbtn = document.querySelector("#dogpic");
dogbtn.addEventListener("click",async()=>{
    let pic = await getPic();
    console.log(pic);
    let img = document.querySelector("img");
    img.setAttribute("src",pic);

})
let url2 ="https://dog.ceo/api/breeds/image/random";

async function getPic(){
    try {
        let result = await axios.get(url2);
        let res = result.data.message;
        return res;
    }
    catch(e){
        console.log("error : e",e);
    }
}



//this api response is in html format but we convert into json using headers
let url3="https://icanhazdadjoke.com/"; 
async function getJokes(){
    try {
        const config = {headers : {Accept : "application/json"}};
        let result = await axios.get(url3,config);
        console.log(result.data.joke);
        let res = result.data.joke;
        return res;
    }
    catch(err){
        console.log(err);
    }
}

let jokebtn=document.querySelector(".jokebtn");
jokebtn.addEventListener("click",async()=>{
    let joke = await getJokes();
    let pJoke = document.querySelector(".joke");
    pJoke.innerText=joke;
});




