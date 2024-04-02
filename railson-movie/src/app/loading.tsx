import Image from "next/image";

export default async function loading() {
  return (
    <div className="flex justify-center mt-32 ">
      <div className="relative w-full h-12">
        <Image
          src="spinner.svg"
          alt="loading"
          fill
          className="absolute top-1/2 left-1/2"
        />
      </div>
    </div>
  );
}
