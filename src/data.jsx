import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { SiBlueprint, SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import {
  profile2,
  profile3,
  profile4,
  profile5,
  member1,
  member2,
  member3,
  member4,
  blog_1,
  blog_2,
  blog_3,
} from "./assets";
import building_5 from "../src/assets/proj_images/proj1.jpg";
import building_6 from "../src/assets/proj_images/proj2.jpg";
import building_7 from "../src/assets/proj_images/proj3.jpg";
import building_9 from "../src/assets/proj_images/proj5.jpg";
import building_10 from "../src/assets/proj_images/proj6.jpg";
import building_11 from "../src/assets/proj_images/proj8.jpg";

export const navTabs = [
  { name: "Home", id: "header" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Team", id: "team" },
  { name: "Project", id: "project" },
  { name: "Testimonial", id: "testimonial" },
  { name: "Blog", id: "blog" },
];

export const services = [
  {
    name: "General Contracting",
    icon: <SiBlueprint />,
    description: `This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name: "Design-Build Services",
    icon: <FaDrawPolygon />,
    description: `This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name: "Project Management",
    icon: <GrUserManager />,
    description: `Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  {
    name: "Renovation and Remodeling",
    icon: <SiHomeassistantcommunitystore />,
    description: `Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name: "Site Preparation",
    icon: <AiOutlineFileProtect />,
    description: `Before construction begins, companies often handle site preparation tasks such 
    as land clearing, excavation, grading, and utility installation to ensure the site is ready 
    for building.`,
  },
  {
    name: "Specialty Construction Services",
    icon: <IoConstructSharp />,
    description: `This can include services like roofing, concrete work, steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
];

export const teams = [
  {
    name: "Oluoma James",
    title: "Technician",
    profile: member1,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Mary Brown",
    title: "Technician",
    profile: member2,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Lawrence Onu",
    title: "Technician",
    profile: member3,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Joy Eze",
    title: "Technician",
    profile: member4,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
];

export const projects = [
  {
    title: "5 Marla Residential",
    image: building_5,
    description: `This 5 Marla residential house in Multan exemplifies our focus on quality and modern design. 
    With three bedrooms, a stylish kitchen, and elegant living spaces, the home blends contemporary architecture with 
    traditional elements. From the foundation to the final finishes, this project showcases our commitment to delivering durable,
     comfortable, and beautifully crafted homes.`,
  },
  {
    title: "5 Marla Residential",
    image: building_6,
    description: `This 5 Marla home in Multan reflects our expertise in crafting functional and stylish living spaces.
     Featuring a modern layout with three well-designed bedrooms, a contemporary kitchen, and open living areas,
      this house combines practicality with aesthetic appeal. Our attention to detail and commitment to quality are evident throughout, 
      making it a perfect blend of comfort and style.`,
  },
  {
    title: "5 Marla Residential",
    image: building_7,
    description: `This recently completed 5 Marla house in Multan showcases our dedication to creating beautiful and livable homes.
     With a focus on maximizing space, the house includes three bedrooms, a modern kitchen, and inviting living areas. 
     The design balances contemporary style with comfort, making it a perfect example of our ability to deliver quality 
     construction tailored to our clients' needs.`,
  },
  {
    title: "10 Marla Residential",
    image: building_9,
    description: `This 10 Marla residential house in Multan is a testament to our commitment to building spacious and elegant homes.
     Designed with a focus on luxury and functionality, the house features five bedrooms, a modern kitchen, expansive living areas,
      and a beautifully landscaped garden. Every detail, from the high-quality materials to the sophisticated design, 
      reflects our dedication to creating homes that offer both comfort and style.`,
  },
  {
    title: "Kitchen Renovation",
    image: building_10,
    description: `This kitchen renovation project in Multan highlights our expertise in transforming outdated spaces into modern, 
    functional, and stylish areas. We upgraded the layout to enhance efficiency, incorporated high-quality materials, 
    and added contemporary finishes. The result is a bright, inviting kitchen that seamlessly blends style with practicality,
    perfectly tailored to meet the client’s needs.`,
  },
  {
    title: "5 Marla Residential",
    image: building_11,
    description: `This custom-built 5 Marla house in Multan reflects our dedication to creating personalized living spaces. 
    With a thoughtfully designed layout, the home includes three bedrooms, a modern kitchen, and a cozy living area. 
    The blend of contemporary design elements and high-quality finishes ensures a comfortable and stylish environment tailored 
    to the client’s vision.

`,
  },
];

export const testimonial = [
  {
    image: profile2,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: profile3,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    image: profile4,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: profile5,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];

export const blogs = [
  {
    title: "Sustainable Construction: Building for the Future",
    image: blog_1,
    category: "Building",
    content: `
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
    date: new Date("January 10, 2024"),
    likeCount: 34,
    commentCount: 4,
    tags: ["Edu4CommDev", "CommGrowthEdu", "EducateCommunities"],
    poster: {
      name: "Johnson",
    },
  },
  {
    title: "The Importance of Quality Craftsmanship in Construction",
    image: blog_2,
    category: "Construction",
    content: `
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
    date: new Date("December 15, 2023"),
    likeCount: 201,
    commentCount: 123,
    tags: ["Skills4Growth", "EconSkillImpact", "GrowWithSkills"],
    poster: {
      name: "Bissi",
    },
  },
  {
    title: "Innovative Technologies Transforming the Construction Industry",
    image: blog_3,
    category: "Innovations",
    content: `
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
    date: new Date("July 20, 2023"),
    likeCount: 198,
    commentCount: 121,
    tags: ["CommEdu", "CommunityEngagement", "EduCommunity"],
    poster: {
      name: "Abisola",
    },
  },
];

export const contacts = [
  {
    name: "Email",
    value: "maymar@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    name: "Phone Number",
    value: "+2348149121918",
    icon: <IoCallOutline />,
  },
  {
    name: "Address",
    value: "Wapda Town, Multan",
    icon: <IoLocationOutline />,
  },
];

export const footer = [
  {
    name: "Explore",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
  {
    name: "Section",
    routes: [
      { name: "Home", id: "header" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      { name: "Team", id: "team" },
      { name: "Project", id: "project" },
      { name: "Testimonial", id: "testimonial" },
      { name: "Blog", id: "blog" },
    ],
  },
];
