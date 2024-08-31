import styles from './ProjectsStyles.module.css';
import age_gender from "../../assets/AgeAndGenderDetection.png";
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={age_gender}
          link="https://github.com/BHARATHKUMARREDDY2004/Age-and-Gender-Detection-using-Tensorflow-and-Computer-Vison.git"
          h3="Aga and Gender Detection"
          p="Using Tensorflow and Computer Vision"
        />
      </div>
    </section>
  );
}

export default Projects;
