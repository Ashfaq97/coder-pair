import { getRoom } from "@/services/rooms";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export default async function RoomPage(props: { params: { room_id: string } }) {
  const roomId = props.params.room_id;

  const room = await getRoom(roomId);

  const tags = room?.language.split(",").map((tag) => tag.trim());

  if (!room) {
    return <div>No such room found</div>;
  }

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 min-h-screen">
          {/* <DevFinderVideo room={room} /> */} Video Player
        </div>
      </div>

      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>

          <div className="flex gap-2 flex-wrap">
            {tags?.map((tag) => (
              <Badge className="w-fit" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>

          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2 text-center text-sm hover:text-sky-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github Project
            </Link>
          )}

          <p className="text-base text-gray-600">{room?.description}</p>
        </div>
      </div>
    </div>
  );
}
