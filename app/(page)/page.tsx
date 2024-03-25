import CategorySection from "@/components/(page)/homepage/category/category-section";
import FeaturedThread from "@/components/(page)/homepage/featured-thread";
import HomeStatus from "@/components/(page)/homepage/home-status";
import NotificationSection from "@/components/(page)/homepage/notification/notification-section";
import { BASE_API_URL } from "@/lib/constants";
import { Suspense } from "react";

const HomePage = async () => {

  const res = await fetch(`${BASE_API_URL}/api/thread`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  
  const data = await res.json();

  return (
    <div className="container flex flex-col gap-5">
      <HomeStatus />
      <div className="flex flex-col gap-5 md:flex-row">
        <FeaturedThread data={data[0]}/>
        <Suspense>
          <NotificationSection />
        </Suspense>
      </div>
      <CategorySection />
      {/* <RecentPosts data={data} /> */}
      {/* <PopularPosts data={data} /> */}
    </div>
  );
};

export default HomePage;
