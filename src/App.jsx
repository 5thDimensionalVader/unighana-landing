import FadeInWhenVisible from "./Components/FadeInWhenVisible";
import AnchorButton from "./Components/AnchorButton";
import { useState } from "react";
import uniData from "./data/universitiesData.json";
import { MdLocalPhone, MdLocationOn, MdMail } from "react-icons/md";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUniversities = uniData.filter((university) =>
    university.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <FadeInWhenVisible>
        <section
          id="#"
          className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:w-full py-[50px]"
        >
          <div className="flex flex-col items-center lg:items-start justify-center gap-6 text-center">
            <h1 className="tracking-wide text-4xl lg:text-5xl lg:font-bold lg:text-left text-custom-red max-w-lg">
              Find your future at UniGhana!
            </h1>
            <p className="text-lg lg:text-xl lg:text-left text-center text-slate-400 max-w-lg">
              Discover the perfect university for you with our comprehensive
              directory of schools across Ghana.
            </p>
            <div className="flex items-center justify-center lg:justify-normal">
              <AnchorButton href="#schools" name="Get Started" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="assets/students_cover.png"
              alt="education"
              className="w-[650px] rounded-md lg:rounded-tl-[250px]"
            />
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section
          id="about"
          className="flex flex-col lg:flex-row-reverse justify-between gap-5 lg:w-full py-[50px]"
        >
          <div className="flex flex-col items-center lg:items-start justify-center gap-6 text-center">
            <h1 className="tracking-wide text-4xl lg:text-5xl lg:font-bold lg:text-left text-center text-custom-red max-w-lg">
              Who We Are
            </h1>
            <p className="text-lg lg:text-xl lg:text-left text-center text-slate-400 max-w-lg">
              Connecting You to Your Future
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-center text-lg font-normal lg:max-w-2xl">
              UniGhana is the ultimate destination for students seeking to find
              their perfect university in Ghana. Our mission is to provide a
              comprehensive directory of schools and universities across Ghana,
              with up-to-date and accurate information on admission
              requirements, available programs, campus life, and more. Our
              vision is to empower students to make informed decisions about
              their educational future by providing them with the tools they
              need to explore their options and find their best fit. Whether
              you&apos;re a high school student just starting to think about
              college or a working professional looking to further your
              education, UniGhana is here to help you take the first step
              towards your future.
            </p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section
          id="schools"
          className="flex flex-col lg:flex-row justify-between gap-5 lg:w-full py-[50px]"
        >
          <div className="flex flex-col items-center lg:items-start justify-center gap-6 text-center">
            <h1 className="tracking-wide text-4xl lg:text-5xl lg:font-bold lg:text-left text-center text-custom-red max-w-lg">
              Find Your School
            </h1>
            <p className="text-lg lg:text-xl lg:text-left text-center text-slate-400 max-w-lg">
              Looking for a specific school? Use our search function to find the
              perfect match for you. With UniGhana, the perfect school is just a
              few clicks away.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Search universities..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="bg-[#0b1323] border-slate-400 border-2 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-500 text-slate-600"
            />
            <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-4">
              {filteredUniversities.map((university) => (
                <div
                  key={university.id}
                  className="bg-[#0b1323] border-slate-400 border-2 rounded-lg shadow-lg p-2 spapce-y-4"
                >
                  <div className="flex justify-center">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="object-fill h-48 w-96 rounded-md"
                    />
                  </div>
                  <h2 className="text-lg font-bold mt-4">{university.name}</h2>
                  <p className="text-base text-slate-400">
                    {university.location}
                  </p>
                  <AnchorButton href={university.website} name="Learn More" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section
          id="contact"
          className="flex flex-col lg:flex-row justify-between gap-5 lg:w-full py-[50px]"
        >
          <div className="flex flex-col items-center lg:items-start justify-center gap-6 text-center">
            <h1 className="tracking-wide text-4xl lg:text-5xl lg:font-bold lg:text-left text-center text-custom-red max-w-lg">
              Contact Us
            </h1>
            <p className="text-lg lg:text-xl lg:text-left text-center text-slate-400 max-w-lg">
              Have a question or suggestion? Contact us today and we&apos;ll be
              happy to help.
            </p>
            <span className="inline-flex items-baseline">
              <MdLocalPhone className="self-center w-5 h-5 mx-1 text-custom-red" />
              <span>+233 00 000 0000</span>
            </span>
            <span className="inline-flex items-baseline">
              <MdLocationOn className="self-center w-5 h-5 mx-1 text-custom-red" />
              <span>Accra, Ghana</span>
            </span>
            <span className="inline-flex items-baseline">
              <MdMail className="self-center w-5 h-5 mx-1 text-custom-red" />
              <span>info@unighana.com</span>
            </span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="border-slate-400 border-2 rounded-md p-4 space-y-3">
              <h2 className="text-lg font-bold text-custom-red">Send Us a Message</h2>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#0b1323] border-slate-400 border-2 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-500 text-slate-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#0b1323] border-slate-400 border-2 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-500 text-slate-600"
                />
                <textarea
                  placeholder="Message"
                  className="bg-[#0b1323] border-slate-400 border-2 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-500 text-slate-600"
                />
                <AnchorButton href="#" name="Send Message" />
              </form>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>
    </>
  );
}

export default App;
