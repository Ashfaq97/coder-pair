import { Button } from "@/components/ui/button";
import { poppins } from "../layout";
import Link from "next/link";
import { getUserRooms } from "@/services/rooms";
import { UserRoomCard } from "./user-room-card";

export default async function YourRoomsPage() {
  const rooms = await getUserRooms();

  return (
    <main className="min-h-screen p-16">
      <div className="flex flex-col justify-center items-center gap-12 mb-8 lg:flex-row lg:justify-between">
        <h1
          className={`text-6xl font-semibold text-center ${poppins.className}`}
        >
          Your Rooms
        </h1>

        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <UserRoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
