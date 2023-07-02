
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(children: Element) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
