import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@/type";

const CategorySelect = ({
  categories,
  handleUpdate,
  defaultValue,
}: {
  categories: Category[];
  handleUpdate: (e: any) => void;
  defaultValue?: string;
}) => {
  return (
    categories && (
      <Select
        defaultValue={defaultValue}
        onValueChange={(value) => {
          handleUpdate(value);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories?.map((cat) => (
            <SelectItem key={cat.slug} value={cat.slug}>
              {cat.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  );
};

export default CategorySelect;
