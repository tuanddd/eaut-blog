"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({
  icon,
  text,
  path,
  className,
  expanded,
  notAllow
}: {
  icon: React.ReactNode;
  text: string;
  path: string;
  className?: string;
  expanded: boolean;
  notAllow: string[]
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={cn(
        "group relative my-1 flex h-11 items-center rounded-md px-3 font-medium text-foreground transition-colors",
        `${path === pathname ? "bg-primary/20 text-primary" : "hover:bg-primary/30 hover:text-primary"}`,
        className,
      )}
    >
      <div className="h-[24px] w-[24px]">{icon}</div>
      <span
        className={cn("ml-3 w-full overflow-hidden transition-all", {
          "ml-0 w-0": expanded === false,
        })}
      >
        {text}
      </span>
      {!expanded && (
        <div className="invisible absolute left-full z-20 ml-6 -translate-x-3 whitespace-nowrap rounded-md bg-primary px-2 py-1 text-background opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
          {text}
        </div>
      )}
    </Link>
  );
};

export default SidebarItem;
