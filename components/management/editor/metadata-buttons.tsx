import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogTrigger } from "@/components/ui/dialog";

const MetadataButtons = ({
  handlePreview,
  handleReset,
}: {
  handlePreview: React.MouseEventHandler<HTMLButtonElement>;
  handleReset: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <CardHeader className="flex flex-row justify-between">
      <div>
        <CardTitle>Thread Metadata</CardTitle>
        <CardDescription>Update thread metadata</CardDescription>
      </div>
      <div className="flex gap-1">
        <Button onClick={handleReset} variant="outline">
          Reset Content
        </Button>
        <DialogTrigger asChild>
          <Button
            className="!bg-primary hover:!bg-primary/50"
            onClick={handlePreview}
          >
            Publish
          </Button>
        </DialogTrigger>
        <DialogTrigger asChild></DialogTrigger>
      </div>
    </CardHeader>
  );
};

export default MetadataButtons;
