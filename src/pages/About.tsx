import React from "react";
import Hero from "@/components/about/Hero";
export default function About() {
  return (
    <>
      <Hero />
      <div className="p-8 max-w-[1400px] mx-auto">
        <div className="my-4 w-full md:w-[60%] lg:w-[70%] mx-auto text-center">
          <h2 className="font-lora text-[30px] md:text-[40px] font-bold leading-[35px] md:leading-[48px] mb-4">
            Welcome to MentorMall – the platform where knowledge meets
            opportunity.
          </h2>
          <p className="text-gray-700">
            At MentorMall, we are dedicated to creating an engaging ecosystem
            where mentors, students, professionals, and clients can connect,
            learn, grow, and succeed together. Our mission is to bridge the gap
            between expertise and learning by providing a space for individuals
            to share knowledge, collaborate on projects, and build meaningful
            relationships.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="basis-[50%] p-6 lg:p-10">
            <img src="/about-us.crdownload" alt="" className="rounded-lg" />
          </div>
          <div className="basis-[50%] px-6 pt-0 pb-6 lg:p-10 flex items-center">
            <div>
              <h3 className="text-3xl font-medium text-gray-800 mb-2 font-lora">Mentors</h3>
              <p className="text-gray-700">
                Whether you're looking to enhance your skills, start a new
                career, or dive deeper into a specific subject, MentorMall
                offers a wide range of courses designed to help you achieve your
                goals. With access to experienced mentors who can guide you
                through every step of the learning process, you'll have the
                tools and support needed to succeed.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="order-2 md:order-1 basis-[50%] px-6 pt-0 pb-6 lg:p-10 flex items-center">
            <div>
              <h3 className="text-3xl font-medium text-gray-800 mb-2 font-lora">Professionals</h3>
              <p className="text-gray-700">
                Professionals can take on work posted by clients, showcasing
                their skills and expanding their portfolios. Our platform offers
                a wide variety of opportunities for professionals to engage in
                real-world projects. Whether you're working on development,
                design, or any other field, you’ll find an array of clients who
                value your expertise.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 basis-[50%] p-6 lg:p-10">
            <img src="/about-us.crdownload" alt="" className="rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="basis-[50%] p-6 lg:p-10">
            <img src="/about-us.crdownload" alt="" className="rounded-lg" />
          </div>
          <div className="basis-[50%] px-6 pt-0 pb-6 lg:p-10 flex items-center">
            <div>
              <h3 className="text-3xl font-medium text-gray-800 mb-2 font-lora">Clients</h3>
              <p className="text-gray-700">
                Clients can post orders for tasks, similar to freelancing
                platforms like Fiverr or Upwork. Once an order is placed, the
                top mentors in the relevant field will have the opportunity to
                connect with you and discuss the project. If the task involves
                development, it will be assigned to a development mentor; if it
                involves graphic design, it will be assigned to a design mentor.
                Mentors can handle the tasks themselves or assign them to
                students as part of their learning journey.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 mt-6">
          <h3 className="font-medium text-3xl font-lora mb-4 text-gray-800">MentorMall Team</h3>
          <div className="py-4">
            <div className="grid gap-2 grid-cols-12 border border-gray-300 p-4 my-10">
              <div className="col-span-12 md:col-span-2"><img src="/Mentor2.JPG" alt="" /></div>
              <div className="col-span-12 md:col-span-10 p-3">
                <h3 className="text-3xl font-medium text-gray-600 mb-2 font-lora">Muhammad Ehsan | Visionary and Cofounder</h3>
                <p className="text-gray-700">The man behind the vision. A chiropractor, traditional acupuncturist, philosopher, and martial artist, John created the BodyTalk and MindScape systems and cofounded the IBA. He also developed the Veltheim Method of Lymphatic Drainage. John wrote nine books on Acupuncture, Reiki, and BodyTalk. His accolades included developing the curriculum as Principal of the Brisbane College of Acupuncture and Natural Therapies and serving as Chairman of the Federation of Australian Acupuncture Colleges. John was a strong and bold leader but with the biggest heart you'd ever find. We’ve all deeply missed him since his passing in 2022 but still consider him the heart of our team.</p>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-12 border border-gray-300 p-4">
              <div className="col-span-12 md:col-span-10 p-3">
                <h3 className="text-3xl font-medium text-gray-600 mb-2 font-lora">Muhammad Ehsan | Cofounder</h3>
                <p className="text-gray-700">Esther created the BreakThrough System and cofounded the IBA. She’s traveled globally since her teens and now generally resides somewhere in Europe. Esther teaches interactive workshops, trains Instructors, and offers private, online sessions, all in BreakThrough. She is author of Beyond Concepts: The Investigation of Who You Are Not and Who Am I? The Seeker’s Guide to Nowhere. A mentor to many, she has a gift for finding the best quotes that speak to the gentleness and understanding we must have toward our human journey, like "You need not push life about." ~Sri Nisargadatta Maharaj</p>
              </div>
              <div className="col-span-12 md:col-span-2"><img src="/Mentor1.JPG" alt="" /></div>
            </div>
            <div className="grid gap-2 grid-cols-12 border border-gray-300 p-4 my-10">
              <div className="col-span-12 md:col-span-2"><img src="/Hero.webp" alt="" /></div>
              <div className="col-span-12 md:col-span-10 p-3">
                <h3 className="text-3xl font-medium text-gray-600 mb-2 font-lora">Muhammad Ehsan | Finances</h3>
                <p className="text-gray-700">If it's related to finances, legal matters, contracts, agreements—you know, all the serious stuff—Karen will handle it with firmness and fairness. Despite her savvy business sense, you will find nothing but a soft and compassionate center.</p>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-12 border border-gray-300 p-4">
              <div className="col-span-12 md:col-span-10 p-3">
                <h3 className="text-3xl font-medium text-gray-600 mb-2 font-lora">Muhammad Ehsan | Projects</h3>
                <p className="text-gray-700">A jack of all trades, Alex has his hands in every pot, although his focus is always on developing and growing the business. He oversees all major projects and handles all our filming and video editing. He has a knack for lightening the mood in any room and inducing bouts of laughter.</p>
              </div>
              <div className="col-span-12 md:col-span-2"><img src="/Mentor3.JPG" alt="" /></div>
            </div>
            <div className="grid gap-2 grid-cols-12 border border-gray-300 p-4 my-10">
              <div className="col-span-12 md:col-span-2"><img src="/Mentor1.JPG" alt="" /></div>
              <div className="col-span-12 md:col-span-10 p-3">
                <h3 className="text-3xl font-medium text-gray-600 mb-2 font-lora">Muhammad Ehsan | Member Support</h3>
                <p className="text-gray-700">Being a membership-based organization, Dawn makes Members her number one-priority. In addition to handling accounting and balancing the books, Dawn is the one who handles all your worries without ever losing her smile, patience and positive attitude.</p>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-12 border border-gray-300 p-4">
              <div className="col-span-12 md:col-span-10 p-3">
                <h3 className="text-3xl font-medium text-gray-600 mb-2 font-lora">Muhammad Ehsan | Instructor Support</h3>
                <p className="text-gray-700">Along with supporting Instructors, Sherry oversees all business policy and procedure, ensuring that our certification and training processes are top notch. Sherry's own experience from the perspective of the client, student, Practitioner and Instructor gives her awesome flexibility in envisioning the bigger picture.</p>
              </div>
              <div className="col-span-12 md:col-span-2"><img src="/Mentor2.JPG" alt="" /></div>
            </div>
            <div className="grid gap-2 grid-cols-12 border border-gray-300 p-4 my-10">
              <div className="col-span-12 md:col-span-2"><img src="/Mentor1.JPG" alt="" /></div>
              <div className="col-span-12 md:col-span-10 p-3">
                <h3 className="text-3xl font-medium text-gray-600 mb-2 font-lora">Muhammad Ehsan | Communication</h3>
                <p className="text-gray-700">Whether it's course content, elegant prose in newsletters, carefully worded business emails, or the written words on our website, it has mostly flowed from Miranda's quill. She is also a fastidious organizer and supports the team by keeping projects on task.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
