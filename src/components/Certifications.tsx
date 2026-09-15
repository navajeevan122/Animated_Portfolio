import "./styles/Certifications.css";
import { config } from "../config";
import { TbRibbonHealth } from "react-icons/tb";

const Certifications = () => {
  return (
    <div className="certifications-section" id="certifications">
      <div className="certifications-container">
        {/* Header */}
        <div className="cert-header">
          <div className="cert-header-icon">
            <TbRibbonHealth />
          </div>
          <div className="cert-header-text">
            <h2>
              Certifications & Hackathons - <span>Learning Milestones!</span>
            </h2>
            <p className="cert-subtitle">
              National Competitions, ISRO Hackathon & Professional Credentials
            </p>
          </div>
        </div>

        {/* Hackathons Grid */}
        <div className="hackathons-grid">
          {config.achievements.map((item, index) => (
            <div className="hackathon-card" key={index}>
              <div className="hackathon-card-header">
                <h3 className="hackathon-title">🏆 {item.title}</h3>
                <span className="hackathon-badge">{item.year}</span>
              </div>
              {item.certId && (
                <p className="hackathon-cert-id">
                  Certificate ID: {item.certId}
                </p>
              )}
              {item.bullets && (
                <ul className="hackathon-bullets">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Professional Certifications Section */}
        <div className="prof-cert-section">
          <h3 className="prof-cert-heading">PROFESSIONAL CERTIFICATIONS:</h3>
          <div className="prof-cert-grid">
            {config.certifications.map((cert, index) => (
              <div className="prof-cert-card" key={index}>
                <div className="prof-cert-info">
                  <h4>{cert.name}</h4>
                  <p>Issued by: {cert.issuer}</p>
                </div>
                <div className="prof-cert-icon">
                  <TbRibbonHealth />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
