import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* About Internship Program Section */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">MERN Stack Internship Program</h2>

        <div className="text-lg text-gray-700">
          <p className="mb-4">
            Welcome to the MERN Stack Internship Program! We are looking for passionate and motivated individuals who are eager to enhance their skills in web development using the MERN stack (MongoDB, Express.js, React, Node.js).
          </p>
          <p className="mb-4">
            This program is designed to provide you with hands-on experience in building full-stack web applications. Whether you're a beginner or have some experience with web development, this internship is a great opportunity to learn and grow with real-world projects.
          </p>

          <h3 className="text-2xl font-semibold mb-4">What You'll Learn</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Develop full-stack applications using MongoDB, Express.js, React, and Node.js (MERN stack).</li>
            <li>Collaborate in a team and follow agile development practices.</li>
            <li>Learn about API development, front-end and back-end integration, and deployment.</li>
            <li>Understand the importance of clean code and best practices in a production environment.</li>
            <li>Work on real projects with guidance and mentorship from experienced developers.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-6">Eligibility Criteria</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Basic knowledge of HTML, CSS, and JavaScript.</li>
            <li>Willingness to learn and work with modern web development technologies.</li>
            <li>Familiarity with Git and version control systems (optional but preferred).</li>
            <li>Strong communication skills and the ability to work in a team.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-6">Benefits of the Internship</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Gain practical experience in MERN stack development.</li>
            <li>Work on live projects and contribute to the development of real-world applications.</li>
            <li>Flexible working hours (Remote work option available).</li>
            <li>Receive mentorship from experienced MERN stack developers.</li>
            <li>Get a certificate upon successful completion of the internship.</li>
            <li>Possibility of a full-time job offer after successful completion of the internship.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-6">How to Apply</h3>
          <p className="mb-4">
            If you're interested in joining our MERN Stack Internship Program, please follow the steps below to apply:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Send your updated resume to <strong>internships@company.com</strong>.</li>
            <li>Include a brief cover letter explaining why you're interested in the program and what skills you want to develop.</li>
            <li>If selected, you will be contacted for an interview and a technical assessment.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-6">Deadline for Applications</h3>
          <p>Applications will be accepted until <strong>June 30, 2025</strong>.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
