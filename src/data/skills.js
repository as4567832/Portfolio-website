import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaDocker, FaGithub, FaFigma, FaLinux, FaMicrochip, FaWifi, FaCalculator, FaDraftingCompass, FaGitAlt } from 'react-icons/fa';
import { SiC, SiCplusplus, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiOpencv, SiTensorflow, SiArduino, SiRaspberrypi, SiEspressif } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { MdDeveloperBoard, MdSensors } from 'react-icons/md';
import { GiElectric, GiPowerGenerator, GiCircuitry } from 'react-icons/gi';

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "C", icon: SiC, percentage: 90 },
      { name: "C++", icon: SiCplusplus, percentage: 85 },
      { name: "Python", icon: FaPython, percentage: 95 },
      { name: "Java", icon: FaJava, percentage: 80 },
      { name: "JavaScript", icon: SiJavascript, percentage: 92 },
      { name: "TypeScript", icon: SiTypescript, percentage: 88 }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5, percentage: 98 },
      { name: "CSS", icon: FaCss3Alt, percentage: 95 },
      { name: "Tailwind CSS", icon: SiTailwindcss, percentage: 90 },
      { name: "React", icon: FaReact, percentage: 92 },
      { name: "Next.js", icon: SiNextdotjs, percentage: 85 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, percentage: 88 },
      { name: "Express", icon: SiExpress, percentage: 85 },
      { name: "MongoDB", icon: SiMongodb, percentage: 82 },
      { name: "Firebase", icon: SiFirebase, percentage: 80 }
    ]
  },
  {
    category: "AI",
    items: [
      { name: "Machine Learning", percentage: 85 },
      { name: "Deep Learning", percentage: 80 },
      { name: "OpenCV", icon: SiOpencv, percentage: 75 },
      { name: "TensorFlow", icon: SiTensorflow, percentage: 78 },
      { name: "Generative AI", percentage: 85 },
      { name: "Prompt Engineering", percentage: 90 }
    ]
  },
  {
    category: "Electrical",
    items: [
      { name: "Electrical Machines", icon: GiPowerGenerator, percentage: 85 },
      { name: "PLC", icon: MdDeveloperBoard, percentage: 78 },
      { name: "MATLAB", icon: FaCalculator, percentage: 75 },
      { name: "AutoCAD Electrical", icon: FaDraftingCompass, percentage: 80 },
      { name: "Power Systems", icon: GiElectric, percentage: 82 }
    ]
  },
  {
    category: "Electronics",
    items: [
      { name: "Arduino", icon: SiArduino, percentage: 90 },
      { name: "ESP32", icon: SiEspressif, percentage: 85 },
      { name: "Raspberry Pi", icon: SiRaspberrypi, percentage: 82 },
      { name: "Embedded Systems", icon: FaMicrochip, percentage: 84 },
      { name: "IoT", icon: FaWifi, percentage: 88 },
      { name: "PCB Design", icon: GiCircuitry, percentage: 80 },
      { name: "Sensors", icon: MdSensors, percentage: 86 }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, percentage: 90 },
      { name: "GitHub", icon: FaGithub, percentage: 92 },
      { name: "VS Code", icon: VscVscode, percentage: 95 },
      { name: "Linux", icon: FaLinux, percentage: 85 },
      { name: "Figma", icon: FaFigma, percentage: 75 },
      { name: "Docker", icon: FaDocker, percentage: 70 }
    ]
  }
];
