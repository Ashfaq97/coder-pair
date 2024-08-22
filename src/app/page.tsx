import { Button } from "@/components/ui/button";
import { poppins } from "./layout";
import Link from "next/link";
import { getRooms } from "@/services/rooms";
import { SearchBar } from "./search-bar";
import { RoomCard } from "@/components/room-card";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const rooms = await getRooms(searchParams.search);

  return (
    <main className="min-h-screen p-16">
      <div className="flex flex-col justify-center items-center gap-12 mb-8 lg:flex-row lg:justify-between">
        <h1
          className={`text-6xl font-semibold text-center ${poppins.className}`}
        >
          Find Dev Room
        </h1>

        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <div className="mb-10">
        <SearchBar />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
