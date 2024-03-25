import { Card } from "@/components/ui/card";
import { Thread } from "@/type";
import Image from "next/image";
import Link from "next/link";

const FeaturedThread = ({ data }: { data: Thread }) => {
  
  return (
    <Card className="group relative aspect-video flex-[2] cursor-pointer overflow-hidden">
      <Link href={`/thread/${data.slug}`}>
        <Image
          src={
            data.thumbnail
              ? data.thumbnail
              : "https://images.pexels.com/photos/18022560/pexels-photo-18022560/free-photo-of-thien-nhien-thu-v-t-d-ng-v-t-con-v-t.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          alt="post thumbnail"
        />
        <div className="absolute bottom-0 left-0 right-0 flex h-[50%] items-center bg-black/30 p-5 text-white md:h-[40%] lg:h-[35%]">
          <div className="w-[90%] md:w-[70%]">
            <span className="text-md rounded-full border px-2">{data.cat.title}</span>
            <h1 className="mt-2 line-clamp-2 text-lg font-semibold sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
              {data.title}
            </h1>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default FeaturedThread;
