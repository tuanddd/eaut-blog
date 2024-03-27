"use client";
import { Dialog } from "@/components/ui/dialog";
import { Thread } from "@/type";
import ThreadPreview from "./thread-preview";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { BASE_API_URL } from "@/lib/constants";
import ThreadCard2 from "./thread-card2";
import ConfirmDelete from "./confirm-delete";
import { useState } from "react";

const ListThread = ({ slug }: { slug: string }) => {
  const { data, mutate, isLoading } = useSWR<Thread[]>(
    `${BASE_API_URL}/api/thread?perPage=12`,
    fetcher,
  );
  const [open, setOpen] = useState<boolean>(!!slug);
  const router = useRouter();
  const pathname = usePathname();
  const find = data && data.find((t) => t.slug === slug);

  const handleOpen = () => {
    if (slug) router.replace(pathname);

    setOpen(!open);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpen}>
        {!isLoading ? (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {data &&
              data.map((thread) => (
                <ThreadCard2 key={thread.id} thread={thread} />
              ))}
          </div>
        ) : (
          "Loading content..."
        )}
        {slug && <ThreadPreview data={find} />}
      </Dialog>
      {slug && find && (
        <ConfirmDelete slug={find.slug} mutate={mutate} setOpen={setOpen} />
      )}
    </>
  );
};

export default ListThread;
