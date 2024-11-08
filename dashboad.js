const main=document.getElementsByClassName("main")
        const val=document.getElementById("sorted").value 
        console.log(val)

        async function displayUsers(){
        const data=await fetch("https://api.github.com/users")
        const rest=await data.json()
        let res=[]
        for(let i=0;i<11;i++){
            res[i]=rest[i]
        }
        let list=document.createElement("ul")
        let item=document.createElement("li")
        res.map((data)=>{
            let item=document.createElement("li")
            item.innerHTML=`<a>${data.login}</a>`
            list.appendChild(item)
        })
        main.appendChild(list)
        }

function logout(){
  window.location.href = "login.html";
}