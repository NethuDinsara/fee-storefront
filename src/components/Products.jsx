import { Headphones } from "lucide-react";
import ProductCard from "./ProductCard";
import { useState } from "react";

function Products() {
  const products = [
    {
      categoryId: "1",
      image: "/assets/products/airpods-max.png",
      id: "1",
      name: "AirPods Max",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/echo-dot.png",
      id: "2",
      name: "Echo Dot",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "2",
      image: "/assets/products/pixel-buds.png",
      id: "3",
      name: "Galaxy Pixel Buds",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "1",
      image: "/assets/products/quietcomfort.png",
      id: "4",
      name: "Bose QuiteComfort",
      price: "249.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/soundlink.png",
      id: "5",
      name: "Bose SoundLink",
      price: "119.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "5",
      image: "/assets/products/apple-watch.png",
      id: "6",
      name: "Apple Watch 9",
      price: "699.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/iphone-15.png",
      id: "7",
      name: "Apple Iphone 15",
      price: "1299.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/pixel-8.png",
      id: "8",
      name: "Galaxy Pixel 8",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
  ];

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

  const [selectedCategory, setSelectCategory] = useState("2");
  const filteredProducts = selectedCategory==="All"
  ?products
  : products.filter((el)=> el.categoryId=== selectedCategory);  // categoryId should be a string, this depends on the variable product

  


  return (
    <section className="py-8 px-16">
      <h1 className="text-4xl font-semibold">Our Top Products</h1>
      <div className="border mt-4"></div>

      <div className="py-8">
        {/* Categories */}
        <div className="flex items-center gap-x-4">
          {
            Categories.map((el) =>{
              return <button type="button" key={el.id} onClick={() => setSelectCategory(el.id)}>{el.name}</button>
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
