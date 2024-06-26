import { Category, ResponseDoctors } from "@/types/types";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("/categories?populate=*");

const getDoctorList = () =>
  axiosClient.get<ResponseDoctors>("/doctors?populate=*");

const getDoctorByCategory = (category: string) =>
  axiosClient.get(
    `/doctors?filters[category][name][$in]=${category}&populate=*`
  );

export { getCategory, getDoctorList, getDoctorByCategory };
