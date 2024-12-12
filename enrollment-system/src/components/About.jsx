import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <header className="section-header">
        <h1>About</h1>
        <p>Cavite State University - Bacoor Campus was created on September 28, 2007, through Board Resolution No. 62, series of 2007.  
          It is one of the campuses of Cavite State University (CVSU), an institution of learning that started out in 1906 as the Indang Intermediate School.</p>
      </header>

      <div className="about-contents">
        <table className="about-table" style={{ width: '100%', border: '1px solid black' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid green', padding: '10px' }}>
                <div className="service-box">
                  <div className="service-desc">
                    <h2>Mandate</h2>
                    <p>Section 2 of Republic Act No. 8468 “An Act Converting the Don Severino Agricultural College in the Municipality of Indang, 
                      Province of Cavite into a State University, to be Known as the Cavite State University” states that, 
                      “The University shall primarily provide advance instruction and professional training in agriculture, science and technology, 
                      education and other related fields, undertake research and extension services, and provide progressive leadership in these areas.”
                    </p>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ border: '1px solid green', padding: '10px' }}>
                <div className="service-box">
                  <div className="service-desc">
                    <h2>Mission</h2>
                    <p>Cavite State University shall provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology 
                      through quality instruction and responsive research and development activities. It shall produce professional, skilled and morally upright 
                      individuals for global competitiveness.
                    </p>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ border: '1px solid green', padding: '10px' }}>
                <div className="service-box">
                  <div className="service-desc">
                    <h2>Vision</h2>
                    <p>The premier university in historic Cavite globally recognized for excellence in character development, academics, research, 
                      innovation and sustainable community engagement.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default About;
