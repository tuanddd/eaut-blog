"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ThreadCard from "@/components/ui/thread-card";
import Title from "@/components/ui/title";
import { Thread } from "@/lib/defination";
import { useEffect, useState } from "react";
// import { getAllThreads } from '@/lib/db/thread';

const PopularPosts = ({ data }: { data: Thread[] }) => {
  return (
    <section className="flex flex-col">
      <Title>Popular Post</Title>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {data &&
            data.map((thread) => (
              <CarouselItem
                key={thread.slug}
                className="basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <ThreadCard thread={thread} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </section>
  );
};

export default PopularPosts;
