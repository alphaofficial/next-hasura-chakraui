import AuthLayout from "@/client/layout/auth-layout";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
}
