// ! Modules
import { Spring, animated } from 'react-spring';
import { useState } from 'react';

// ! Components
import Stepper from '../../components/Stepper.jsx/Stepper';
import Layout from '../../components/Layout/Layout';
import StepperNav from '../../components/StepperNav/StepperNav';
import PersonalInfoSection from '../../components/Sections/PersonalInfoSection/PersonalInfoSection';
import StatementSection from '../../components/Sections/StatementSection/StatementSection';
import SkillsSection from '../../components/Sections/SkillsSection/SkillsSection';
import ProjectsSection from '../../components/Sections/ProjectsSection/ProjectSection';
import HistorySection from '../../components/Sections/HistorySection/HistorySection';
import EducationSection from '../../components/Sections/EducationSection/EducationSection';

export default function ConstructionPage({ user }) {
  const [step, setStep] = useState(0);
  const steps = [
    'PersonalInfo',
    'Statement',
    'Skills',
    'Projects',
    'History',
    'Education',
  ];
  const [currentSection, setCurrentSection] = useState(steps[step]);
  const [sections, setSections] = useState({
    PersonalInfo: true,
    Statement: false,
    Skills: false,
    Projects: false,
    History: false,
    Education: false,
  });

  // SECTIONS STATES
  const [personal, setPersonal] = useState({
    email: '',
    phone: '',
    linkedIn: '',
    github: '',
    portfolio: '',
  });

  // OBJECTIVE/STATEMENT STATES
  const [statement, setStatement] = useState({
    title: '',
    body: '',
  });

  // SKILLS STATES
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState({ id: '', skill: '', priority: 'normal' });

  // PROJECTS STATES
  const [project, setProject] = useState({
    header: '',
    priority: 'normal',
    subSections: [{ subHeader: 'Time Travel Tour Guide', dateState: '' }],
  });

  const [projects, setProjects] = useState([]);
  const [projectSubSection, setProjectSubSection] = useState({
    subHeader: '',
    dateStart: '',
    dateEnd: '',
    lineItems: [],
  });
  const [projectLineItem, setProjectLineItem] = useState({
    body: '',
    priority: 'normal',
  });

  const projectSectionProps = {
    project,
    setProject,
    projects,
    setProjects,
    projectSubSection,
    setProjectSubSection,
    projectLineItem,
    setProjectLineItem,
  };

  const renderSection = (section) => {
    switch (section) {
      case 'PersonalInfo':
        return (
          <PersonalInfoSection
            section={section}
            personal={personal}
            setPersonal={setPersonal}
          />
        );

      case 'Statement':
        return (
          <StatementSection
            section={section}
            statement={statement}
            setStatement={setStatement}
          />
        );

      case 'Skills':
        return (
          <SkillsSection
            section={section}
            skills={skills}
            setSkills={setSkills}
            skill={skill}
            setSkill={setSkill}
          />
        );

      case 'Projects':
        return <ProjectsSection section={section} {...projectSectionProps} />;

      case 'History':
        return <HistorySection section={section} />;

      case 'Education':
        return <EducationSection section={section} />;

      default:
        return null;
    }
  };

  return (
    <Layout active={'construction'} user={user}>
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {(props) => (
          <animated.div style={props}>
            <div className="bg-gray-200 h-screen">
              <div>
                <Stepper
                  step={step}
                  steps={steps}
                  section={currentSection}
                  setSections={setSections}
                  sections={sections}
                />
              </div>
              <div className="flex items-center justify-center gap-x-96 mt-20">
                {renderSection(currentSection)}
              </div>
              <StepperNav
                step={step}
                setStep={setStep}
                setCurrentSection={setCurrentSection}
                steps={steps}
                currentSection={currentSection}
                setSections={setSections}
                sections={sections}
              />
            </div>
          </animated.div>
        )}
      </Spring>
    </Layout>
  );
}
