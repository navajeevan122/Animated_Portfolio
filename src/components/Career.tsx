import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  // Combine education and experience items from PDF resume for complete timeline
  const educationItems = config.education.map((edu) => ({
    title: edu.degree,
    subtitle: `${edu.institution} (${edu.score})`,
    period: edu.period,
    description: (edu as any).description || `${edu.location} — Completed with high academic performance.`,
    isEducation: true,
  }));

  const experienceItems = config.experiences.map((exp) => ({
    title: exp.position,
    subtitle: exp.company,
    period: exp.period,
    description: exp.description,
    isEducation: false,
  }));

  const timelineData = [...educationItems, ...experienceItems];

  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {timelineData.map((item, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.title}</h4>
                  <h5>{item.subtitle}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
