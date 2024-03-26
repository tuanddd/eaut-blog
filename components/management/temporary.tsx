import { BASE_API_URL } from "@/lib/constants";
import Link from "next/link";

const url = BASE_API_URL

const Temporary = () => {

  return (
    <div>
      <h2 className="text-xl">Feature Available</h2>
      <Link href={url + "/?login=open"} className="block text-xl text-primary underline hover:text-primary/70" target="_blank">Login (Google Only)</Link>
      <Link href={url + "/"} className="block text-xl text-primary underline hover:text-primary/70" target="_blank">Homepage</Link>
      <Link href={url + "/blog"} className="block text-xl text-primary underline hover:text-primary/70" target="_blank">All thread page</Link>
      <Link href={url + "/blog?cat=su-kien"} className="block text-xl text-primary underline hover:text-primary/70" target="_blank">Thread by category</Link>
      <Link href={url + "/thread/about-us"} className="block text-xl text-primary underline hover:text-primary/70" target="_blank">About Us</Link>
      <Link href={url + "/thread/bai-so-1"} className="block text-xl text-primary underline hover:text-primary/70" target="_blank">Thread Detail</Link>
      <Link href={url + "/thread/bai-so-1#comments"} className="block text-xl text-primary underline hover:text-primary/70" target="_blank">Comment (Last page)</Link>
      <Link href={url + "/?notificationId=1"} className="block text-xl text-primary underline hover:text-primary/70" target="_blank">Notification</Link>
      <hr className='my-4'/>
      <h3 className='text-2xl'>===== Management =====</h3>
      <Link href={url + "/management/editor?type=new"} className="block text-xl text-primary underline hover:text-primary/70">Add Thread</Link>
      <Link href={url + "/management/threads"} className="block text-xl text-primary underline hover:text-primary/70">Edit Thread</Link>
      <Link href={url + "/management/threads"} className="block text-xl text-primary underline hover:text-primary/70">Delete Thread</Link>
    </div>
  )
}

export default Temporary;