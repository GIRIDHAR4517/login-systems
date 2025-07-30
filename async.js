
// let displayer =(some)=>document.getElementById("dis").
// innerHTML =some;
// let myPromise = new Promise(function(myResolv, myRejec) {
//     let x =1;
//     if(x==1){
//         myResolv("ok"); 
//     }else{
//         myRejec("error");
//     }
  
   
// });


// myPromise.then(
//     function(value){displayer(value);}     
// );
// myPromise.catch(
//     function(error){displayer(error)} 
// );


// setTimeout(function(){displayer("i am  3sec late")},3000); 
// //ways to perform asynchronus js
// //1.setTimeout();
// console.log('first');
// let a =setTimeout(()=>{console.log("i am late");},3000);
// console.log("third");
// //2.clearTimeout();
// clearTimeout(a);
// //3.setIntervel();
// let b=setInterval(()=>{console.log("i am late");},5000);
// //4.clearInterval();
// clearInterval(b);


// function mot(){
//     let count=10;
//     let c =setInterval(()=>{
//         document.getElementById("msg").innerHTML=count;
//         count--;
//         if(count===0){document.getElementById("msg").innerHTML="done";
//             clearInterval(c);
//         }
//     },1000);
// }



// let response;
// const fetching = async()=>{
//     let data = await fetch("https://fakestoreapi.com/products");
//     console.log(data);
//     response = await data.json();
    
// }


// (async ()=>{
//     await fetching();
//     response.map(value=>{
//       let a= document.createElement("div");
//        let n = document.createElement("p").innerHTML=value.title;
//        let i = document.createElement("p").innerHTML=value.id;
//        a.append(n);
//        a.append(i);
//        document.getElementById("display").append(n);
//        document.getElementById("display").append(i);
        
//     })
// // })();
// let uData =[];
// let fetching =async()=>{
//     try{
//          let data = await fetch("./data.json");
//          uData = await data.json();
//         return uData;
//     }catch(error){
//         console.error("fetching error : ",error);
//     }  
// }

// const validate =(username , password)=>{
//     return uData.find(user =>
//         user.Username === username && user.Password===password
//     );
// }

// document.getElementById("form").addEventListener("submit", async(e)=>{
//     e.preventDefault();

//     const username = document.getElementById("Username").value.trim();
//     const password = document.getElementById("Password").value.trim();
    
//     if(uData.length ===0) await fetching();

//     let {id,Name } =uData;
//     console.log(id , Name);

//     let matched = validate(username , password);
//     localStorage.setItem("user",JSON.stringify(matched));   
//     // matched ? 
//     // window.location.href="./home.html" :document.getElementById("display").
//     // innerHTML = "Login Failed  ❌";  
//     if(matched){
//         document.body.style.filter="blur(4px)";
        
//         setTimeout(()=>{
//             window.location.href="./home.html"
//         },1000);
//     }else{
//        alert("invalid credentials...!")
//     }
// });


document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    const username = document.getElementById("Username").value.trim();
    const password = document.getElementById("Password").value.trim();
    
    // if(uData.length ===0) await fetching();

    const data = JSON.parse(localStorage.getItem("users"));
    console.log(data);

    const validatee =(username , password)=>{
        return data.find(user =>
            user.username === username && user.password===password
        );
    };

    console.log(validatee);



    let matched = validatee(username , password);
    localStorage.setItem("logginedUsers",JSON.stringify(matched)); 

  
    if(matched){
        document.body.style.filter="blur(4px)";
        
        setTimeout(()=>{
            window.location.href="./home.html"
        },1000);
    }else{
       alert("invalid credentials...!")
    }
});

    const toggleBtn = document.getElementById("togglePassword");
    const passwordField = document.getElementById("Password");
    const icon = toggleBtn.querySelector("i");
    

   toggleBtn.addEventListener("click" , ()=>{
      if(passwordField.type === "password"){
        passwordField.type ="text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }else{ 
        passwordField.type ="password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });



let fetcher=async()=>{
    await fetching();

     let match = uData.find(user=> user.Username ==="Luffy" && user.Password ==="Luffy@1234");
     console.log(match);
    uData.map(value=>{
        let b = document.getElementById("display");
        let a = document.createElement("div");
        let p =document.createElement("p").
        innerHTML = `${value.id}. Username : ${value.Username} , password : ${value.Password} `;       
        a.append(p);
        b.append(a);  

    })
}
