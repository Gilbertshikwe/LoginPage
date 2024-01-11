let formA = document.querySelector("#form")
formA.addEventListener("submit",function(e){
    e.preventDefault()
    let formData = new FormData(formA)
    let data = Object.fromEntries(formData)
    fetch(`http://localhost:3000/LoginForm`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.ok){console.log("POST was Succesful")}
        else{console.log('POST failed')}
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err)=> console.log(err))
})