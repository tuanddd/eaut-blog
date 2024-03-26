import { Role } from "@/type";

const RoleTag = ({ role }: { role: Role }) => {
  const roleClass = {
    ADMIN: "tag-red",
    MODERATOR: "tag-purple",
    WRITER: "tag-yellow",
    USER: "tag-green",
    NONE: "tag-sky",
  };

  return (
    <span
      className={`tag ${roleClass[role]} inline-block rounded-full p-1 py-0 text-xs`}
    >
      {role}
    </span>
  );
};

export default RoleTag;
