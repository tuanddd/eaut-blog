import { Comment } from "@/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CommentItem = ({ item }: { item: Comment }) => {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage src={item.user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col gap-2">
        <p className="font-medium text-primary">{item.user.name}</p>
        <div className="w-full rounded-md bg-blue-300/70 p-3">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
