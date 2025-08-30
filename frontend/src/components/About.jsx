import React from "react";
import Header from "./Header";



const About = () => {


  return (
    <> 
      <div className="mb-15">
         <Header />
      </div>

        <div className="bg-gray-50 min-h-screen">

          <section className=" bg-gradient-to-r from-blue-500 to-gray-800 text-white py-16 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">About JobLink</h1>
            <p className="max-w-2xl mx-auto text-lg">
              At JobLink, we connect talent with opportunities. Our mission is to make job hunting and hiring simpler, faster, and more transparent.
            </p>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We aim to bridge the gap between companies and job seekers by providing a platform that is easy to use, reliable, and focused on growth. Whether you're looking for your dream job or the perfect candidate, JobLink has you covered.
            </p>
          </section>


          <section className="bg-white py-16 px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-6 shadow-lg rounded-xl bg-gray-50 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Trust</h3>
                <p className="text-gray-600">
                  We believe in building trust with our users by ensuring transparency and security in every interaction.
                </p>
              </div>
              <div className="p-6 shadow-lg rounded-xl bg-gray-50 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Innovation</h3>
                <p className="text-gray-600">
                  We continuously improve our platform to adapt to the changing needs of employers and job seekers.
                </p>
              </div>
              <div className="p-6 shadow-lg rounded-xl bg-gray-50 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Community</h3>
                <p className="text-gray-600">
                  We are committed to creating a supportive community that helps people achieve their career goals.
                </p>
              </div>
            </div>
          </section>


          <section className="max-w-6xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
            <p className="text-gray-600 mb-10">
              A passionate group of developers, designers, and career experts working together to make job hunting smarter.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-500">Lead Developer</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-xl font-semibold">Alex Johnson</h3>
                <p className="text-gray-500">Community Manager</p>
              </div>
            </div>
          </section>
        </div>
    </> 

  );
};

export default About;
