"use client";

import { getDoctorByCategory } from "@/app/_utils/global-api";
import { useEffect } from "react";

const CategorySearchPage = ({
  params,
}: {
  params: { categoryName: string };
}) => {
  useEffect(() => {
    getDoctors();
  });

  console.log(params.categoryName);

  const getDoctors = () => {
    getDoctorByCategory(params.categoryName).then((resp) => {
      console.log(resp);
    });
  };

  return <div>srhrh</div>;
};

export default CategorySearchPage;
