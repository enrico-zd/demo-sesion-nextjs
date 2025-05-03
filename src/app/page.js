'use client'

import Image from "next/image";
import ProductCard from "@/components/ProductCard";

import React, { useEffect, useState } from "react";

export default function Home() {

  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState(null);

  const fetchProduct = async () => {
    try{
      setLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=5&limit=12");
      const data = await res.json();
      setDataProduct(data);
    } catch (error) {
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (

    <div className="min-h-screen w-full">
      {loading && <p className="text-5xl">Loading...</p>}
      {error && <p className="text-5xl">Error: {error.message}</p>}
      <div className="mt-5 mb-5 mx-auto min-h-screen grid sm:grid-cols-1 max-w-[60%] md:grid-cols-2 gap-4 place-items-center">
        {dataProduct.map((product) => (
          <ProductCard key={product.id} 
          image={product.images[0]}
          title={product.title} 
          description={product.description}
          price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
