import { Category } from "@/type";
import Link from "next/link";

const CategoryItem = ({ data }: { data: Category }) => {
  return (
    <Link
      href={`blog?cat=${data.slug}`}
      className={`tag flex items-center justify-center rounded-lg py-7 text-xl transition-colors tag-${data.color}`}
    >
      {data.title}
    </Link>
  );
};

export default CategoryItem;
