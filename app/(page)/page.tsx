"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const Homepage = () => {
  const session = useSession();
  
  return (
    <div className="my-2 block h-10 w-10">
      {!session?.data ? (
        <Button onClick={() => signIn("google")}> Login</Button>
      ) : (
        <Button onClick={() => signOut()}>Log out</Button>
      )}
    </div>
  );
};

export default Homepage;
