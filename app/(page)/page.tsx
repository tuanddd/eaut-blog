import CategorySection from "@/components/(page)/homepage/category-section/category-section";
import FeaturedThread from "@/components/(page)/homepage/featured-thread";
import HomeStatus from "@/components/(page)/homepage/home-status";
import NotificationSection from "@/components/(page)/homepage/notification/notification-section";
import PopularThreads from "@/components/(page)/homepage/popular-threads";
import RecentThreads from "@/components/(page)/homepage/recent-threads";
import { BASE_API_URL } from "@/lib/constants";
import { Suspense } from "react";

const HomePage = async () => {
  const res = await fetch(`${BASE_API_URL}/api/thread`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });

  const data = res.ok && (await res.json());

  return (
    <div className="container flex flex-col gap-y-10">
      <Suspense>
        <HomeStatus />
      </Suspense>
      <section className="flex flex-col gap-5 md:flex-row">
        {data && <FeaturedThread data={data[0]} />}
        <Suspense>
          <NotificationSection />
        </Suspense>
      </section>
      <CategorySection />
      {data && (
        <>
          <RecentThreads data={data} />
          <PopularThreads data={data} />
        </>
      )}
    </div>
  );
};

export default HomePage;
