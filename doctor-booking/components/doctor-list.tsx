import { Doctor } from "@/types/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

interface DoctorListProps {
  doctors: Doctor[];
}

export const DoctorList = ({ doctors }: DoctorListProps) => {
  console.log(doctors);
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mb-6">Popular Doctors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-5">
        {doctors.length > 0
          ? doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="w-[250px]  lg:-[200px] xl:w-[250px] border border-primary-foreground p-3 rounded-xl cursor-pointer hover:border-border hover:shadow-xl transition-all ease-in-out "
              >
                <Image
                  src={doctor.attributes.Image.data.attributes.url}
                  alt="Doctor"
                  width={500}
                  height={200}
                  className="h-[250px] w-full object-cover object-center rounded-xl  "
                />
                <div className="mt-2 flex flex-col items-baseline gap-1">
                  <h3 className="text-sm bg-primary-foreground rounded-full px-2">
                    {doctor.attributes.category.data?.attributes?.name}
                  </h3>
                  <p className="font-bold">{doctor.attributes.Name}</p>
                  <p className="text-sm  font-light">
                    {doctor.attributes.Year_of_Experience}
                  </p>
                  <span className="text-sm font-light">
                    {doctor.attributes.Address}
                  </span>

                  <Button
                    className="w-full rounded-full text-primary mt-3 "
                    variant="outline"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((card, index) => (
              <Skeleton
                key={index}
                className="h-[220px] w-full rounded-lg bg-primary-foreground animate-pulse"
              />
            ))}
      </div>
    </div>
  );
};
