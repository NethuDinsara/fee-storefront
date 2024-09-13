import { Headphones } from "lucide-react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Tab from "./Tab";
import { getAllProducts } from "../services/products"; //this represent a function that get data from backend
import { data } from "autoprefixer";

function Products() {
  const [products,setProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [isError,setIsError]=useState([false]);
  const [error, setError] = useState("");


 

  const pro={
    categoryId: "1",
      image: "/assets/products/airpods-max.png",
      id: "1",
      name: "AirPods Max",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  }

  const Categories=[
    { id:"All", name:"All"},
    { id:"1", name:"Headphones"},
    { id:"2", name:"Earbuds"},
    { id:"3", name:"Speakers"},
    { id:"4", name:"Mobile Phones"},
    { id:"5", name:"Smart Watches"},
    
  ];

  const [selectedCategory, setSelectCategory] = useState("All");
  const filteredProducts = selectedCategory==="All"
  ?products
  : products.filter((el)=> el.categoryId=== selectedCategory);  // categoryId should be a string, this depends on the variable product

  const handleTabClick = (id) =>{
    setSelectCategory(id);
  }

  useEffect(() => {
    getAllProducts()
          .then((data) => {
            console.log(data)
            setProducts(data);
          })
          .catch((e) => {
            setIsError(true);
            setError(e.message);
            console.log(e);
          })
          .finally(() => {
            setIsLoading(false);
          })
  }, []);


  if(IsLoading){
    return (
      <section className="py-8 px-16">
        <h1 className="text-4xl font-semibold">Our Top Products</h1>
        <div className="border mt-4"></div>

        <div className="py-8">
          <div className="flex items-center gap-x-4">
            {Categories.map((el) => {
              return (
                <Tab
                  selectedCategory={selectedCategory}
                  key={el.id}
                  category={el}
                  onClick={handleTabClick}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-4 gap-6 mt-4">
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }
  
  

  return (
    <section className="py-8 px-16">
      <h1 className="text-4xl font-semibold">Our Top Products</h1>
      <div className="border mt-4"></div>


      <div className="py-8">
        {/* Categories */}
        <div className="flex items-center gap-x-4">
          {
            Categories.map((el) =>{
              return (
                <Tab key={el.id} category={el} handleTabClick={handleTabClick}/>
              );
            })
          }
        </div>
      <div className=" grid grid-cols-4 gap-6 mt-4">
        {/* Removing the py-8 here */}

{/* here we do the mapping with the array "Products" */}

  {filteredProducts.map((el) =>(
    <ProductCard
      key={el.id}
      image={el.image}
      name={el.name}
      price={el.price}
      description={el.description}
    />
  ))
}

</div>

      </div>
          </section>
    
  );
}

export default Products;
