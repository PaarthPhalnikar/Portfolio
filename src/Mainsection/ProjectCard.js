import { NavLink } from 'react-router';

export default function ProjectCard({ name, image, path, animation }) {
  return (
    <div className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ${animation}`}>
      <NavLink to={path} end>
        <div className="landing-demo-box">
          <div className="mob-scroll">
            <span className="feature-mob-scroll" style={{ backgroundImage: `url(${image})` }}></span>
          </div>
          <div className="project-title">
            <h3>{name}</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
}