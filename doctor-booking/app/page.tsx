"use client";

import { CategorySearch } from "@/components/category-search";
import { DoctorList } from "@/components/doctor-list";
import { Header } from "@/components/header";
import { getDoctorList } from "./_utils/global-api";
import { useEffect, useState } from "react";
import { ResponseDoctors, Doctor } from "@/types/types";

export default function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = () => {
    getDoctorList().then((resp) => {
      // console.log(resp.data.data);
      setDoctors(resp.data.data);
    });
  };
  return (
    <div>
      {/* Header */}
      <Header />
      <CategorySearch />
      <DoctorList doctors={doctors} />
    </div>
  );
}
