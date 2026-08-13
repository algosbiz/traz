import React from "react";

export interface MaterialItem {
  icon: string;
  title: string;
  text: string;
  aosDelay: string;
}

interface MaterialsSectionProps {
  subtitle?: string;
  title: string;
  description?: string;
  items: MaterialItem[];
}

const MaterialsSection: React.FC<MaterialsSectionProps> = ({
  subtitle = "MATERIALS",
  title,
  description,
  items,
}) => {
  return (
    // Tanpa pt-*: section sebelumnya (ServiceDetailsContent) sudah pb-100.
    <div className="services-wrap-area without-bg-color materials-area pb-75">
      <div className="container">
        <div className="section-title-wrap">
          <span>{subtitle}</span>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <div className="row justify-content-center">
          {items.map((item) => (
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              data-aos-duration="600"
              data-aos-once="true"
              key={item.title}
            >
              <div className="services-item">
                <div className="icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaterialsSection;
