import { getHotelById } from "@/actions/getHotelById";
import { HotelForm } from "@/components/hotel/hotel-form";
import { auth } from "@clerk/nextjs";

interface HotelProps {
  params: { hotelId: string };
}

const Hotel = async ({ params }: HotelProps) => {
  const hotel = await getHotelById(params.hotelId);
  const { userId } = auth();

  if (!userId) return <div>Not authenticated...</div>;

  if (hotel && hotel.userId !== userId) return <div>Access denied...</div>;

  return (
    <div>
      <HotelForm hotel={hotel} />
    </div>
  );
};

export default Hotel;
