import React, { useEffect, useMemo, useState } from 'react'

function ProductFilter() {
    const [data, setData] = useState([]);
    const[category, setCategory] = useState("all");
    const[search , setSearch] = useState("");

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((result) => setData(result.products));
    },[])

    //Expensive calculation in memo
    const filteredProducts = useMemo(()=>{
        console.log("filtering Products.......");
        return data.filter((p)=>{
            const matchesCategory = category === "all" || p.category === category;
            const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase())
            return matchesCategory && matchesSearch;
        })
    },[data, category, search])
  return (
  <>
  <h1>Products</h1>
  <select value={category} onChange={(e) => setCategory(e.target.value)}>
    <option value="all">All</option>
    <option value="furniture">Furniture</option>
    <option value="beauty">Beauty</option>
  </select>

  {/* //Search Filter  */}
  <input type="text" placeholder='Search Products'
  value={search}
  onChange={(e) => setSearch(e.target.value)}/>


  {/* product display  */}
  {/* logic  */}
  {filteredProducts.map((product) => (
    <div key={product.id} style={{border: "1px solid", margin:"10px", padding:"10px"}}>
        <h3>{product.title}</h3>
         <h3>${product.price}</h3>
          <h3>{product.category}</h3>
    </div>
  ))}
  </>
  )
}

export default ProductFilter


