import Navigation from "../Navigation/Navigation";

interface LayoutProps {
  children: React.ReactNode,
}

function Layout({ children }: LayoutProps) {
  return <>
    <Navigation />
    <main>{children}</main>
  </>
}

export default Layout;
