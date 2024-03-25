import { BASE_API_URL } from "@/lib/constants";

const BlogTitle = async ({ cat }: { cat: string }) => {
  const res = await fetch(`${BASE_API_URL}/api/category/${cat}`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });

  const data = await res.json();

  return (
    <h2 className="py-5 text-center text-5xl font-bold uppercase text-primary">
      Tin tức về {data.title}
    </h2>
  );
};

export default BlogTitle;
