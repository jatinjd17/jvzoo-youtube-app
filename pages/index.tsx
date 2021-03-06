// import Example from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import dynamic from "next/dynamic";

const DynamicExample = dynamic(() => import("../components/header"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      {/* <Example /> */}
      {typeof window !== "undefined" && <DynamicExample />}
      <Body />
      <Footer />
    </div>
  );
}
