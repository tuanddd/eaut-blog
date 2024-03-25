import Title from "@/components/ui/title";
import CategoryItem from "./category-item";
import { CategoryType } from "@/type";
import { BASE_API_URL } from "@/lib/constants";

const CategorySection = async () => {
  const res = await fetch(`${BASE_API_URL}/api/category`);
  const data:CategoryType[] = await res.json();

  return (
    <section className="flex flex-col gap-4">
      <Title>Popular Category</Title>
      <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-6">
        {data && data.map((cat) => <CategoryItem key={cat.slug} data={cat} />)}
      </div>
    </section>
  );
};

export default CategorySection;
