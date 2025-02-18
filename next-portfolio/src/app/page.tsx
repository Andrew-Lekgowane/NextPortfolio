import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h3>Full stack developer</h3>
      <div>hello i'm</div>
      <div> Andrew Lekgowane</div>
      <div>
        {" "}
        a passionate full-stack web developer. I specialize in building robust
        and scalable web applications by combining both front-end and back-end
        technologies. I enjoy creating seamless, user-friendly interfaces and
        implementing efficient, powerful back-end systems. Always eager to learn
        and explore new technologies, I strive to deliver high-quality,
        well-structured code that pushes the boundaries of what’s possible on
        the web.
      </div>
    </div>
  );
}
