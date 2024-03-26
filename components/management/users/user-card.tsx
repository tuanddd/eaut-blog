"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AllUser } from "@/type";
import { File } from "lucide-react";
import RoleTag from "./role-tag";
import { BASE_API_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const UserCard = ({ data }: { data: AllUser }) => {
  const handleDelete = async () => {
    //TODO: Add Alert Dialog to confirm first
    // const res = await fetch(`${BASE_API_URL}/api/user/${data.id}`, {
    //   method: "DELETE",
    // });
    // if (!res.ok) alert("Error fetching");

    alert("TEST MESSAGE: User deleted");
    return data;
  };

  const handleEditRole = async () => {
    alert("TEST MESSAGE: Role changed");
  };

  return (
    <Card>
      <CardContent className="p-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 border-b-2 border-border pb-2">
            <Avatar className="">
              <AvatarImage
                src={data.image}
                className="h-full w-full rounded-full object-cover"
              />
              <AvatarFallback>HB</AvatarFallback>
            </Avatar>
            <div className="">
              <div className="flex items-center">
                <p className="mr-2 inline-block text-left font-semibold text-primary">
                  {data.name}
                </p>
                <RoleTag role={data.role} />
              </div>
              <p className="text-left text-xs font-light text-gray-500 dark:text-foreground">
                kaitou.kurosaki@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-2 flex divide-x-2 text-sm text-gray-500 dark:text-foreground">
            <div className="flex flex-1 flex-col items-center">
              <File />
              <p>{data._count.threads} bài viết</p>
            </div>
            <div className="flex flex-1 flex-col items-center">
              <File />
              <p>
                {data._count.commentVotes + data._count.threadVotes} lượt vote
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center">
              <File />
              <p>{data._count.comments} bình luận</p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-end gap-2">
          {(data.role === "MODERATOR" || data.role === "ADMIN") && (
            <Button variant="outline" onClick={handleEditRole}>
              Phân quyền
            </Button>
          )}
          {data.role === "ADMIN" && (
            <Button variant="destructive" onClick={handleDelete}>
              Xóa
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
