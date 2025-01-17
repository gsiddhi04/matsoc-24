import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="main">
      {/* Origin Section */}
      <div className="origin">MATSOC</div>
      <p className="para">
        The Materials Society (MatSoc) is the student community of the
        Department of Materials Science and Engineering (MSE) at the Indian
        Institute of Technology Kanpur (IIT Kanpur). INDIAN INSTITUTE OF
        TECHNOLOGY KANPUR MatSoc serves as a platform for students to engage in
        various academic and extracurricular activities related to materials
        science. One of the notable events organized by MatSoc is the Materials
        Science Sports League (MSSL). For instance, on October 1st and 2nd,
        2023, MatSoc, in collaboration with Material Advantage at IIT Kanpur
        (MA@IITK), hosted MSSL-1, which included sports such as volleyball,
        badminton, and cricket.
      </p>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <hr
          style={{
            backgroundColor: "#3b3b3b",
            borderWidth: 0,
            color: "#000000",
            height: "2px",
            width: "60%",
          }}
        />
      </div>

      {/* Vision Section */}
      <div className="vision">VISION OF MATSOC</div>
      <p className="para-2">
        <h3>
          The vision of MATSOC (Materials Society) at IIT Kanpur centers around
          fostering a vibrant and inclusive community for students passionate
          about materials science and engineering. It aims to:{" "}
        </h3>
        1.Enhance Learning and Knowledge Sharing: Create a platform for students
        to explore the multidisciplinary aspects of materials science through
        workshops, guest lectures, seminars, and discussions. <br></br>
        2.Promote Research and Innovation: Encourage students to engage in
        cutting-edge research and innovative projects that address real-world
        challenges in materials science and engineering. <br></br>
        3.Build a Collaborative Environment: Foster collaboration among
        students, faculty, and industry professionals to exchange ideas and gain
        exposure to advancements in the field. <br></br>
        4.Develop Leadership and Teamwork Skills: Organize events and activities
        that enable students to develop organizational, leadership, and teamwork
        abilities while pursuing their academic goals. <br></br>
        5.Celebrate Materials Science Beyond the Classroom: Engage in
        extracurricular activities like sports, cultural events, and social
        gatherings to strengthen the sense of community within the department.{" "}
        <br></br>
        MATSOC envisions empowering students to contribute significantly to the
        field of materials science, leveraging their skills and knowledge for
        innovation and societal benefit.
      </p>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <hr
          style={{
            backgroundColor: "#3b3b3b",
            borderWidth: 0,
            color: "#000000",
            height: "2px",
            width: "60%",
          }}
        />
      </div>

      {/* Mission Section */}
      <div className="mission">MISSION OF MATSOC</div>
      <p className="para-3">
        The mission of MATSOC (Materials Society) at IIT Kanpur is to foster a
        vibrant and inclusive community for materials science enthusiasts. It
        aims to promote academic excellence by organizing guest lectures,
        workshops, and interactive sessions with experts to inspire and inform
        students. The society is dedicated to encouraging research and
        development through innovative projects, competitions, and platforms for
        showcasing student work. By building strong industry connections, MATSOC
        facilitates networking events, industrial visits, and internships to
        prepare students for successful careers in materials science.
        Additionally, it fosters a collaborative culture by uniting students
        from diverse backgrounds to work on interdisciplinary projects and
        engage in peer-to-peer learning. Beyond academics, MATSOC strengthens
        the sense of community through extracurricular events such as sports,
        cultural activities, and social initiatives, celebrating achievements
        and contributions within the department. The society strives to empower
        students to excel academically, professionally, and personally in the
        field of materials science and engineering.
      </p>
    </div>
  );
};

export default About;
