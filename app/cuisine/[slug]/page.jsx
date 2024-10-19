import CuisineItems from "@/components/cuisines/CuisineItems";
import React from "react";


const page = ({ params }) => {
  const { slug } = params;
//   console.log(slug)
  return <CuisineItems item={slug} />;
};

export default page;
