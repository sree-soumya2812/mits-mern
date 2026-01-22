function play(user){
  let arr=["Rock","Paper","Scissors"];
  let comp=arr[Math.floor(Math.random()*3)];
  document.getElementById("result").innerHTML =
    `You: ${user} | Computer: ${comp}`;
}