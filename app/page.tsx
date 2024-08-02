"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default function page() {
  const [store, setStore] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setStore(data.products);
    };
    fetchData();
  }, []);

  const filteredStore = store.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Navbar onchange={onchange} />
      <Content store={filteredStore} />
    </>
  );
}
