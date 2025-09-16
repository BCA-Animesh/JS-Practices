
    
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        let num = Math.floor(Math.random() * 100) + 1;
        // console.log(`Random number generated: ${num}`);
        const gess=parseInt(document.querySelector("input").value)
        if(gess===num){
            document.querySelector("h2").innerText="You guessed it right!";
        }
        else{
            document.querySelector("h2").innerText="You guessed it wrong!";
        }
    })
    

