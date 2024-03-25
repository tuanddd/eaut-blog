import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
// import { getAllThreads } from "@/lib/db/thread";
import ThreadCard from "@/components/ui/thread-card";
import Link from "next/link";
import { Thread } from "@/lib/defination";

const RecentPosts = async ({
  className,
  itemOrientation,
  data,
}: {
  className?: string;
  itemOrientation?: "horizontal" | "vertical";
  data?: Thread[];
}) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Title>Recent Posts</Title>
        <Button variant="outline" asChild>
          <Link href="/blog">All Thread</Link>
        </Button>
      </div>
      <div
        className={twMerge(
          `grid grid-cols-2 gap-0 md:grid-cols-3 md:gap-5`,
          className,
        )}
      >
        {data && data.length > 0
          ? data.map((thread) => (
              <ThreadCard
                orientation={itemOrientation}
                thread={thread}
                key={thread.slug}
              />
            ))
          : "There is nothing in this category"}
      </div>
    </section>
  );
};

export default RecentPosts;
