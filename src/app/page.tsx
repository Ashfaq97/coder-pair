import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { poppins } from "./layout";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { GithubIcon } from "lucide-react";
import { getRooms } from "@/services/rooms";

function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={`${room.githubRepo}`}
          className="flex gap-2 hover:text-sky-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          Github Link
        </Link>
      </CardContent>
      <CardFooter>
        <Button>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default async function Home() {
  const rooms = await getRooms();

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

      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room} />;
      })}
    </main>
  );
}
