import Link from "next/link";

export function ContactMe() {
    return (
      <div
        id="contact"
        className="mx-auto max-w-2xl my-24 p-8 flex flex-col items-center text-center"
      >
        <h2 className="font-bold font-heading text-6xl mt-8 ">Get in touch</h2>
        <p className=" text-lg opacity-80 mt-8 max-w-lg">
          I'm always looking for new challenges and opportunities. Let's create
          something together!
        </p>
        <Link
          href="mailto:vitor.hw@sempreceub.com"
          className="mt-10 flex flex-row gap-4 p-4 border border-gray-800 hover:border-gray-700 transition-all duration-200 rounded-md"
        >
          Say Hello
        </Link>
      </div>
    );
}