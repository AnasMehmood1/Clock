let date;
let date_store;
let time;
const option = {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
}
setInterval(()=>{
    date = new Date();
    date_store = date.toLocaleDateString(undefined,option)

          time =  date.getHours() + ":" + date.getMinutes() + ":"+ date.getSeconds()

    document.getElementById("time").innerHTML =  time +   " <br/> On " + date_store

})