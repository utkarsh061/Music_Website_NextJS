import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36">
      <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">Courses</h1>
      <p className="text-center text-gray-400 w-1/3 m-auto">We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.</p>
          <div className="mt-5">
            <input placeholder="Your Email Address" type="text" className="bg-gray-600 h-10 w-"></input>
          </div>
          <div className="mt-5">
            <textarea placeholder="Your message" className="bg-gray-600 h-40"></textarea>
          </div>
      <Meteors number={20} />
    </div>
  );
}
export default page;
 