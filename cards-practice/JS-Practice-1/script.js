document.getElementById("google").addEventListener("click" , function(){
 window.location = "https://www.google.com";
 win.focus();
})

document.getElementById("fb").addEventListener("click" , function(){
   window.location = "https://www.facebook.com";
    win.focus();
   })

   document.getElementById("twitter").addEventListener("click" , function(){
    window.location = "https://www.twitter.com";
     win.focus();
    })

    document.getElementById("insta").addEventListener("click" , function(){
        window.location = "https://www.instagram.com";
         win.focus();
        })

    //Q4. write Js program to keep fetching content of a website leaving 3 sec?
        const fetchContent = async(url) =>{
            con = await fetch(url);
            let a = await con.json()
            return a;
        }

        setInterval(async function(){

       let url = "https://jsonplaceholder.typicode.com/todos/1";
       console.log(await fetchContent(url))

        } , 3000)


        //Q5

        setInterval (async function(){
             
            document.querySelector("#bulb").classList.toggle("bulb")

        } , 300)