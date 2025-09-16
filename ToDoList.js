let arr=[]
let a
document.querySelector("#add").addEventListener("click",function() {
    let tex=document.querySelector("input").value
    tex=tex.trim()
    for (let index = 0; index < arr.length; index++)
    { 
         if(tex.toLowerCase()==arr[index].toLowerCase())
         {
            var b=0
         }
    }
    if(b!=0&&tex.length>0)   
        { 
            arr.push(tex)
            document.querySelector("ol").appendChild(document.createElement("li")).innerText=tex
            a=document.querySelector("ol").innerHTML
        } 
});
document.querySelector("ol").addEventListener("click",function(p) {
    const t=p.target.innerText
    if(document.querySelector("ol").innerHTML==a){
    p.target.appendChild(document.createElement("button")).className="remove bg-sky-600 text-2xl"
    document.querySelector(".remove").innerText="REMOVE"
    document.querySelector(".remove").parentElement.style.backgroundColor=`rgb(${142}, ${219}, ${231})` 
    document.querySelector(".remove").addEventListener("click",function() {
    p.target.remove()
    let w=arr.indexOf(t)
    arr.splice(w, 1)
    a=document.querySelector("ol").innerHTML
    }) 
    } 
    else{
        document.querySelector(".remove").parentElement.style.backgroundColor=`rgb(${250}, ${82}, ${228})`
         document.querySelector(".remove").remove()
          a=document.querySelector("ol").innerHTML
    } 
})
document.querySelector("div").addEventListener("click",function() {
    document.querySelector(".remove").parentElement.style.backgroundColor=`rgb(${250}, ${82}, ${228})`
    document.querySelector(".remove").remove()
     a=document.querySelector("ol").innerHTML
})