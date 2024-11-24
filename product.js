console.log("product")

const products = [
    {id:1,name: "BackPack"},
    {id:2,name: "Apple"},
    {id:3,name: "Amrood"},
    {id:4,name: "Strawberry"},
    {id:5,name: "T-Shirt"},
    {id:6,name: "BackPack"},
    {id:7,name: "Back Pack"},
    {id:8,name: "BackPack"},
    {id:9,name: "BackPack"},
    {id:10,name: "BackPack"},
    {id:11,name: "BackPack"},
    {id:12,name: "Green Tea"},
    {id:13,name: "Zebra"},
    {id:14,name: "BackPack"},

];

const searchInput = document.getElementById("input");
const productList = document.getElementById("product-list");

const filterProducts =(searchQuery)=>{
  const filterArray = products.filter((product)=>{
    return product.name.toLowerCase().includes(searchQuery);
  })
  return filterArray
}


function displayProducts(){
    productList.innerHTML = '';
    products.forEach((product)=>{
        const productIten
    })
}