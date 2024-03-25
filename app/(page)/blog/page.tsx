// import BlogSide from "@/components/page/blog/blog-side";
import BlogTitle from "@/components/(page)/blog/blog-title";
import FeaturedPostBlog from "@/components/(page)/blog/featured-blog";
import { BASE_API_URL } from "@/lib/constants";
import { Category } from "@/type";
// import FeaturedPostBlog from "@/components/page/blog/featured-post";
// import { getCategoryBySlug } from "@/lib/db/category";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  // read route params
  const { cat } = searchParams;

  // fetch data
  const res = await fetch(`${BASE_API_URL}/api/category/${cat}`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  const data: Category = await res.json();

  return {
    title: data ? `Bài viết về ${data.title}` : "Blog",
  };
}

const BlogPage = async ({ searchParams }: Props) => {
  const cat = searchParams.cat;
  const res = await fetch(
    `${BASE_API_URL}/api/thread?` +
      new URLSearchParams(cat && { catSlug: cat }),
    {
      method: "GET",
      next: {
        revalidate: 60,
      },
    },
  );

  const data = await res.json();

  return (
    <div className="container flex flex-col gap-5 pb-3">
      {cat && <BlogTitle cat={cat} />}
      <FeaturedPostBlog data={data[0]} />
      <div className="flex gap-5">
        <div className="flex-[3]">
          {/* <RecentPosts
            className="flex flex-col gap-0 md:gap-0"
            itemOrientation="horizontal"
            data={data}
          /> */}
        </div>
        {/* <BlogSide /> */}
      </div>
    </div>
  );
};

export default BlogPage;
