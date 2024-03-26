import TextEditor from "@/components/management/editor/text-editor";
import { Dialog } from "@/components/ui/dialog";
import RouteTitle from "@/components/management/RouteTitle";
import SectionCard from "@/components/management/section-card";
import ThreadMetaData from "@/components/management/editor/thread-metadata";
import { Metadata } from "next";
import { BASE_API_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Text Editor",
  description: "Text editor for writers",
};

const EditorPage = async ({
  searchParams,
}: {
  searchParams: { type: string };
}) => {
  const res = await fetch(`${BASE_API_URL}/api/category`);
  const data = await res.json();
  const type = (searchParams.type as "edit" | "add") || "add";

  return (
    <Dialog>
      <RouteTitle text="Text Editor" />
      <SectionCard>
        <div className="flex flex-col gap-3">
          <ThreadMetaData categories={data} type={type} />
          <div className="">
            <TextEditor />
          </div>
        </div>
      </SectionCard>
    </Dialog>
  );
};

export default EditorPage;
