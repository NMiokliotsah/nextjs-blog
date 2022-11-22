import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react"
import AuthForm from "../../components/Auth/AuthForm";

function AuthPage() {
  const [isLoading, setLoadingState] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    getSession()
      .then(session => {
        if (session) {
          router.replace('/');
        } else {
          setLoadingState(false);
        }
      });
  }, [router]);

  if (isLoading) {
    return <></>
  }

  return <AuthForm />
}

export default AuthPage;
