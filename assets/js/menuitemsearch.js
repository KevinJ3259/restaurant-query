const apiKey="3dda98fa1ab845c5b8da209e969f31ae";
const form=document.getElementById("menu-item-search");
form.addEventListener("submit",async function(event){
   event.preventDefault();
   
  const formData=new FormData(event.target);
  const itemName=formData.get("item-name");
  alert("Hi");
const apiResponse=await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=${itemName}`);
const apiBody=await apiResponse.json()

console.log(apiBody.menuItems)
})