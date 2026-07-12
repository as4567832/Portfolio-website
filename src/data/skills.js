import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaFigma,
  FaLinux,
  FaMicrochip,
  FaWifi,
  FaCalculator,
  FaDraftingCompass,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiOpencv,
  SiTensorflow,
  SiArduino,
  SiRaspberrypi,
  SiEspressif,
  SiFlutter,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { MdDeveloperBoard, MdSensors } from "react-icons/md";
import { GiElectric, GiPowerGenerator, GiCircuitry } from "react-icons/gi";

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", icon: FaPython, percentage: 90 },
      { name: "JavaScript", icon: SiJavascript, percentage: 90 },
      { name: "TypeScript", icon: SiTypescript, percentage: 82 },
      { name: "C++", icon: SiCplusplus, percentage: 82 },
      { name: "C", icon: SiC, percentage: 80 },
      { name: "Java", icon: FaJava, percentage: 70 },
    ],
  },

  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, percentage: 90 },
      { name: "Next.js", icon: SiNextdotjs, percentage: 82 },
      { name: "Flutter", icon: SiFlutter, percentage: 85 },
      { name: "HTML", icon: FaHtml5, percentage: 92 },
      { name: "CSS", icon: FaCss3Alt, percentage: 88 },
      { name: "Tailwind CSS", icon: SiTailwindcss, percentage: 90 },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, percentage: 85 },
      { name: "Express.js", icon: SiExpress, percentage: 84 },
      { name: "MongoDB", icon: SiMongodb, percentage: 82 },
      { name: "Firebase", icon: SiFirebase, percentage: 75 },
    ],
  },

  // {
  //   category: "AI & Computer Vision",
  //   items: [
  //     { name: "Generative AI", percentage: 88 },
  //     { name: "Prompt Engineering", percentage: 88 },
  //     { name: "Machine Learning", percentage: 75 },
  //     { name: "Deep Learning", percentage: 68 },
  //     { name: "OpenCV", icon: SiOpencv, percentage: 75 },
  //     { name: "TensorFlow", icon: SiTensorflow, percentage: 70 },
  //   ],
  // },

  {
    category: "Electrical & Robotics",
    items: [
      { name: "Power Systems", icon: GiElectric, percentage: 82 },
      { name: "Electrical Machines", icon: GiPowerGenerator, percentage: 80 },
      { name: "PLC", icon: MdDeveloperBoard, percentage: 75 },
      { name: "MATLAB", icon: FaCalculator, percentage: 75 },
      { name: "AutoCAD Electrical", icon: FaDraftingCompass, percentage: 78 },
    ],
  },

  {
    category: "Embedded & IoT",
    items: [
      { name: "Arduino", icon: SiArduino, percentage: 90 },
      { name: "ESP32", icon: SiEspressif, percentage: 86 },
      { name: "Raspberry Pi", icon: SiRaspberrypi, percentage: 80 },
      { name: "Embedded Systems", icon: FaMicrochip, percentage: 84 },
      { name: "IoT", icon: FaWifi, percentage: 85 },
      { name: "PCB Design", icon: GiCircuitry, percentage: 75 },
      { name: "Sensors", icon: MdSensors, percentage: 85 },
      { name: "Drone Development", percentage: 82 },
    ],
  },

  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt, percentage: 90 },
      { name: "GitHub", icon: FaGithub, percentage: 90 },
      { name: "VS Code", icon: VscVscode, percentage: 95 },
      { name: "Linux", icon: FaLinux, percentage: 82 },
      { name: "Figma", icon: FaFigma, percentage: 75 },
      { name: "Docker", icon: FaDocker, percentage: 65 },
    ],
  },
];