import { Comment } from "@/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CommentVote from "./comment-vote";

const CommentItem = ({
  item,
  mutate,
}: {
  item: Comment;
  mutate: () => void;
}) => {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage src={item.user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col gap-1">
        <p className="font-medium text-primary">{item.user.name}</p>
        <div className="relative w-full rounded-md bg-primary/50 p-3">
          <p>{item.content}</p>
          <CommentVote
            commentId={item.id}
            voteData={item.votes}
            mutate={mutate}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
