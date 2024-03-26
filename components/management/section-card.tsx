import { twMerge } from "tailwind-merge";

const SectionCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={twMerge(
        "h-full w-full overflow-y-auto rounded-t-xl bg-background p-3",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default SectionCard;
