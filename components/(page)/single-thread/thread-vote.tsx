"use client";
import { BASE_API_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThreadVote as VoteType } from "@/type";
import { ArrowBigDown, ArrowBigUp, MessageCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error("Error fetching");
  return data;
};

const ThreadVote = ({
  commentCount,
  slug,
}: {
  commentCount: number;
  slug: string;
}) => {
  const { data, mutate, isLoading } = useSWR<{
    data: VoteType[];
    count: { UPVOTE: number; DOWNVOTE: number };
  }>(`${BASE_API_URL}/api/thread-vote?threadSlug=${slug}`, fetcher);

  const session = useSession();

  const foundVote = data?.data.find(
    (c) => c.userEmail === session?.data?.user?.email,
  );

  const handleVote = async (type: "UPVOTE" | "DOWNVOTE") => {
    if (!session.data) return;

    const res = await fetch(`${BASE_API_URL}/api/thread/${slug}?type=${type}`, {
      method: "PUT",
      body: JSON.stringify(session.data.user?.email),
    });
    mutate();
  };

  return (
    !isLoading && (
      <div className="flex border-y-2 border-border bg-foreground/5 text-foreground/50">
        <button
          className={cn(
            "flex flex-1 items-center justify-center gap-2 py-3 hover:bg-foreground/20 hover:text-primary",
            { "text-primary": foundVote?.type === "UPVOTE" },
          )}
          onClick={() => handleVote("UPVOTE")}
        >
          <ArrowBigUp size={32} />
          <p>{data?.count.UPVOTE || 0} Upvote</p>
        </button>
        <button
          className={cn(
            "flex flex-1 items-center justify-center gap-2 py-3 hover:bg-foreground/20 hover:text-primary",
            { "text-primary": foundVote?.type === "DOWNVOTE" },
          )}
          onClick={() => handleVote("DOWNVOTE")}
        >
          <ArrowBigDown size={32} />
          <p>{data?.count.DOWNVOTE || 0} Downvote</p>
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 py-3 hover:bg-foreground/20 hover:text-foreground">
          <MessageCircle size={32} />
          <p>{commentCount} phản hồi</p>
        </button>
      </div>
    )
  );
};

export default ThreadVote;
