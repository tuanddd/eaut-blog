import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ForgotPasswordTab from "./auth-tab/forgot-password-tab";
import LoginTab from "./auth-tab/login-tab";
import RegisterTab from "./auth-tab/register-tab";
import { Button } from "@/components/ui/button";

const AuthDialog = ({ setOpen }: { setOpen: any }) => {
  return (
    <>
      <DialogTrigger asChild>
        <Button onClick={setOpen}>Login</Button>
      </DialogTrigger>
      <DialogContent>
        <Tabs className="space-y-3" defaultValue={"login"}>
          <TabsList className="mt-3 flex w-full">
            <TabsTrigger value="login" className="flex-1">
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="flex-1">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-3">
            <LoginTab />
          </TabsContent>
          <TabsContent value="register">
            <RegisterTab />
          </TabsContent>
          <TabsContent value="forgot">
            <ForgotPasswordTab />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </>
  );
};

export default AuthDialog;
