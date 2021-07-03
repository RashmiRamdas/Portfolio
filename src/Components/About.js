import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            Hello! My name is Rashmi based in Bangalore and currently working at{" "}
            <a href="https://www.informatica.com/in/">INFORMATICA</a>{" "}
            .Passionate and enthusiastic <strong> Front-end Developer </strong>{" "}
            with a Bachelor's Degree and over 7+ years of professional
            experience in delivering device agnostic web applications. As a
            Front End developer I've worked both with small and large scale
            industries to help build &amp; scale their companies. I describe
            myself as a passionate developer who loves to code and also explore
            new technologies.
          </p>
          <p>The technologies I have been working recently</p>
          <ul class="skills-list">
            <li>HTML5</li>
            <li>React</li>
            <li>Jest</li>
            <li>CSS3 ( Sass )</li>
            <li>Redux</li>
            <li>Cypress</li>
            <li>JavaScript ( ES6 )</li>
            <li>TypeScript</li>
            <li>Firebase</li>
            <li>Responsive Web</li>
            <li>Node.js</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
