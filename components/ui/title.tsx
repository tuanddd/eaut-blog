import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={cn(`text-xl font-bold md:text-2xl`, className)}>
      {children}
    </h1>
  );
};

export default Title;
