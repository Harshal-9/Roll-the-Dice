var player1 = prompt("Enter name of player 1 : ");
document.querySelectorAll(".dice p")[0].innerText = player1;

var player2 =  prompt("Enter name of player 2 : "); 
document.querySelectorAll(".dice p")[1].innerText = player2;

while(true)
{
    if(player1 == ""||player2 == "")
    alert("Enter valid names !");
    else
    break;

    player1 = prompt("Enter name of player 1 : ");
    document.querySelectorAll(".dice p")[0].innerText = player1;
    
    player2 =  prompt("Enter name of player 2 : "); 
    document.querySelectorAll(".dice p")[1].innerText = player2;
}

// fn when 'roll the dice' button is clicked
function roll()
{
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
    
    document.querySelector("h1").style.fontSize="5rem";
    
    if(randomNumber1>randomNumber2)
    {
        var str = "🏁 "+player1+" wins !";
        document.querySelector("h1").innerHTML=str;

    }
    
    else if(randomNumber1<randomNumber2)
    {
        var str = player2+" wins ! 🏁";
        document.querySelector("h1").innerHTML=str;
    }
     
    else
    document.querySelector("h1").innerHTML="Draw 🤜🤛!";    
}


