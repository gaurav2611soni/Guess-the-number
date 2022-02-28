var ranvalue= Math.floor(Math.random()*100);
function checkValue()
{
    do{
        var value= parseInt(prompt('Guess a number from 1-100'));
        if(value>ranvalue)
        {
           alert("Your guess is higher");
        }
        else if(value < ranvalue)
           alert("Your guess is lower");
        else if(value==ranvalue)
        {
           alert("you guess is correct");
        }
    }while(value !== ranvalue)
}