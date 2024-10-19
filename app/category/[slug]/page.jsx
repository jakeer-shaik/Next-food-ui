import CategoryItem from "@/components/categories/CategoryItem";
import React from "react";

const page = ({ params }) => {
  const { slug } = params;
  return <CategoryItem category={slug} />;
};

export default page;
