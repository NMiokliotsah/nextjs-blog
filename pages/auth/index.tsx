import { useRouter } from "next/router";
import { useEffect } from "react";
import { getSession } from "next-auth/react"
import AuthForm from "../../components/Auth/AuthForm";

function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    getSession()
      .then(session => {
        if (session) {
          router.replace('/');
        }
      });
  }, [router]);

  return <AuthForm />
}

export default AuthPage;
