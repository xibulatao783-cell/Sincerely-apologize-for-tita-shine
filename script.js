// PASSCODE

const correctPassword = "03061988";



function unlock(){

    const password = document.getElementById("password").value;
    const error = document.getElementById("error");



    if(password === correctPassword){


        const lockScreen = document.getElementById("lockScreen");
        const website = document.getElementById("website");



        // smooth fade out

        lockScreen.style.transition = "opacity 1s ease";
        lockScreen.style.opacity = "0";



        setTimeout(()=>{


            lockScreen.style.display = "none";


            website.style.display = "block";



            setTimeout(()=>{

                website.classList.add("show");

            },100);



        },1000);



    }else{


        error.innerHTML = "❌ Incorrect passcode.";


    }


}





// OPEN SONG WITHOUT RETURNING TO TOP

function openSong(link){


    window.open(link, "_blank");


}






// ENTER KEY SUPPORT


document
.getElementById("password")
.addEventListener("keypress", function(event){


    if(event.key === "Enter"){

        unlock();

    }


});
