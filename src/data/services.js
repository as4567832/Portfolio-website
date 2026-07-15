import {
  FaCode,
  FaMicrochip,
  FaRobot,
  FaServer,
  FaMobileAlt,
} from "react-icons/fa";
import { MdElectricalServices, MdFlight } from "react-icons/md";

export const services = [
  {
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications using React, Next.js, Node.js, Express, and MongoDB.",
    icon: FaCode,
  },
  {
    title: "Flutter App Development",
    description:
      "Developing cross-platform Android and iOS applications with Flutter and Firebase integration.",
    icon: FaMobileAlt,
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Building smart IoT solutions using Arduino, ESP32, sensors, and embedded programming.",
    icon: FaMicrochip,
  },
  {
    title: "Drone Development",
    description:
      "Developing UAV systems, integrating sensors, and working on autonomous drone technologies and flight controllers.",
    icon: MdFlight,
  },
  {
    title: "Robotics & Electronics",
    description:
      "Designing electronic circuits, robotics prototypes, and hardware solutions for engineering projects.",
    icon: MdElectricalServices,
  },
];