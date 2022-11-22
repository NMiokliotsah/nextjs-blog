import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface AuthProps {
  children?: React.ReactNode,
}

const isNotRequiredAuth = ['/auth'];

function Auth({ children }: AuthProps) {
  const [isLoading, setLoadingState] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const session = await getSession();

      if (!session && !isNotRequiredAuth.includes(router.pathname)) {
        window.location.href = '/auth';
      } else {
        setLoadingState(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <></>
  }

  return children;
}

export default Auth;
