let text = "madam";

let reversed = text.split("").reverse().join("");

if(text === reversed){
    console.log("its a palindrome...");
}else{
    console.log("its not a palindrome");
}
