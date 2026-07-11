import { FaCode, FaMicrochip, FaRobot, FaServer } from 'react-icons/fa';
import { MdElectricalServices, MdOutlineHomeRepairService } from 'react-icons/md';

export const services = [
  {
    title: "Full Stack Development",
    description: "Building responsive, performant, and scalable web applications using the MERN stack and Next.js.",
    icon: FaCode
  },
  {
    title: "IoT Solutions",
    description: "Designing end-to-end Internet of Things ecosystems connecting hardware devices with cloud platforms.",
    icon: FaServer
  },
  {
    title: "Embedded Systems",
    description: "Programming microcontrollers (Arduino, ESP32) and designing custom embedded logic for smart devices.",
    icon: FaMicrochip
  },
  {
    title: "AI Solutions",
    description: "Integrating Machine Learning models and Generative AI capabilities into web and hardware projects.",
    icon: FaRobot
  },
  {
    title: "Electrical Design",
    description: "Drafting circuit schematics, PCB designs, and system architectures for electronics projects.",
    icon: MdElectricalServices
  },
  {
    title: "Automation",
    description: "Creating automated workflows and intelligent control systems for home and industrial applications.",
    icon: MdOutlineHomeRepairService
  }
];
