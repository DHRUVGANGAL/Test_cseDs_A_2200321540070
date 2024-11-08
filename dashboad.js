// import user_name from "./message.js";
// const text1=document.getElementById(name);
// text1.innerText=`Welcome ${importedValue}`;


const main=document.getElementById("main");
const val=document.getElementById("sorted").value ;
console.log(val)

        async function displayUsers(){
        const data=await fetch("https://api.github.com/users")
        
        const rest=await data.json();
        console.log(rest);
        let res=[]
        for(let i=0;i<11;i++){
            res[i]=rest[i]
        }
        let list=document.createElement('ul');
        // let item=document.createElement('li');
        res.map((data)=>{
            let item=document.createElement('li');
            item.innerHTML= `<a href="${data.html_url}">${data.login}</a>`;
            console.log(item);
            list.appendChild(item);
        })
        main.appendChild(list)
        }

function logout(){
  window.location.href = "login.html";
}