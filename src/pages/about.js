import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <div>
        {/* Origin Section */}
        <div className="origin">Origin of Election Commission</div>
        <p className="para">
          The Election Commission (EC) at IIT Kanpur was established to ensure the
          democratic spirit and fairness in the election processes within the
          Students' Gymkhana. The Students' Gymkhana, founded in 1962, serves as the
          student government organization aimed at cultivating leadership qualities
          and promoting the general welfare of the student body. The primary role of
          the EC is to conduct free and fair elections, adhering to the norms and
          Model Code of Conduct of the Students' Gymkhana.
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
        <div className="vision">Vision of Election Commission</div>
        <p className="para-2">
          Our vision is to cultivate a robust and engaged student community where
          every individual's voice is heard and valued through the power of their
          vote. We envision a campus where high voter turnout reflects a united and
          proactive student body, capable of influencing university decisions and
          policies effectively. By fostering a culture of democratic participation,
          we aim to develop future leaders who understand the significance of
          governance and are dedicated to advocating for the interests and
          well-being of their peers.
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
        <div className="mission">Mission of Election Commission</div>
        <p className="para-3">
          The Election Commission at IIT Kanpur is committed to nurturing and
          maintaining the democratic spirit within the Students’ Gymkhana. Our
          mission is to ensure that the process of electing student representatives
          is conducted freely and fairly, upholding the principles of transparency,
          integrity, and inclusivity. By doing so, we empower students to actively
          participate in self-governance, shaping the policies and decisions that
          affect their daily lives on campus.
        </p>
      </div>
    );
};

export default About;