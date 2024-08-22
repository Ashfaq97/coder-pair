"use client";

import { Button } from "@/components/ui/button";
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
import { GithubIcon, Trash2Icon } from "lucide-react";
import { deleteRoom } from "@/services/rooms";
import { deleteRoomAction } from "./actions";

export function UserRoomCard({ room }: { room: Room }) {
  function handleDelete() {}

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

        <Button onClick={() => deleteRoomAction(room.id)}>
          <Trash2Icon />
        </Button>
      </CardFooter>
    </Card>
  );
}
