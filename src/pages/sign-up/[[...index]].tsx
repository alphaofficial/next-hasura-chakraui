import AuthLayout from "@/client/layout/auth-layout";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}
