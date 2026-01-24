  import {
  Smartphone,
  Globe,
  ShoppingBag,
  Monitor,
} from "lucide-react";

export type ProjectLogo = {
  name: string;
  image: string;
  link: string;
};

export type Category = "Dynamic" | "E-commerce" | "Static" | "Mobile";

export interface ProjectCategory {
  id: Category;
  title: string;
  shortTitle: string;
  icon: any;
  description: string;
  logos: ProjectLogo[];
}
  
export const projectData: ProjectCategory[] = [
    {
      id: "Dynamic",
      title: "Dynamic Applications",
      shortTitle: "Dynamic",
      icon: Monitor,
      description:
        "Enterprise-grade web systems featuring real-time data sync and complex backend architectures",
      logos: [
        {
          name: "24sju",
          image: "./assets/images/24sju.png",
          link: "https://www.24-sju.se/",
        },
        {
          name: "Rorstrand Museum",
          image: "./assets/images/rorstrand.png",
          link: "https://rorstrand-museum.se/",
        },
        {
          name: "FP Analyzer",
          image: "./assets/images/fpanalyzer.png",
          link: "https://www.fpanalyzer.se/",
        },
        {
          name: "ThingsAtWeb",
          image: "./assets/images/thingsatweb.png",
          link: "https://www.thingsatweb.se/",
        },
        {
          name: "Value Charts",
          image: "./assets/images/valueflow.png",
          link: "https://www.valueflowsoft.com/",
        },
        {
          name: "Vrickade Teatern",
          image: "./assets/images/vrickade.png",
          link: "https://vrickadeteatern.se/",
        },
        {
          name: "LaserClean",
          image: "./assets/images/laserclean.png",
          link: "https://laserclean.se/",
        },
        {
          name: "Hindustan",
          image: "./assets/images/hindustan.png",
          link: "https://hcaschennai.edu.in/",
        },
        {
          name: "Sahayya Finserve",
          image: "./assets/images/sahaya.png",
          link: "https://www.sahayyafinserve.com/",
        },
        {
          name: "Sri Balaji",
          image: "./assets/images/sribalaji.png",
          link: "https://www.sribalajiscience.com/",
        },
      ],
    },
    {
      id: "E-commerce",
      title: "Digital Commerce",
      shortTitle: "E-comm",
      icon: ShoppingBag,
      description:
        "High-conversion retail platforms integrated with global payment gateways and inventory logic",
      logos: [
        {
          name: "Bovalls",
          image: "./assets/images/bovalls.png",
          link: "https://www.bovalls.com/",
        },
        {
          name: "Smart Storing",
          image: "./assets/images/smartstoring.png",
          link: "https://smartstoring.eu/",
        },
        {
          name: "Snus24",
          image: "./assets/images/snus24.png",
          link: "https://www.snus24.com/",
        },
      ],
    },
    {
      id: "Static",
      title: "Corporate Identity",
      shortTitle: "Static",
      icon: Globe,
      description:
        "Ultra-high performance static sites optimized for maximum SEO reach and global distribution",
      logos: [
        {
          name: "SLE Dack",
          image: "./assets/images/sledack.png",
          link: "https://www.sledack.se/",
        },
      ],
    },
    {
      id: "Mobile",
      title: "Mobile Ecosystems",
      shortTitle: "Mobile",
      icon: Smartphone,
      description:
        "Custom iOS and Android solutions engineered for high performance and intuitive user experiences",
      logos: [
        {
          name: "24sju App",
          image: "./assets/images/24sju1.png",
          link: "https://24-sju.se/apps/",
        },
        {
          name: "Value Charts",
          image: "./assets/images/valueflow.png",
          link: "https://play.google.com/store/apps/details?id=com.valuecharts.app&hl=en_IN&gl=US&pli=1",
        },
        {
          name: "Lean",
          image: "./assets/images/lean.png",
          link: "https://play.google.com/store/apps/details?id=com.leanvaluestream.app&hl=en_IE&gl=US",
        },
        {
          name: "Matmed Smak",
          image: "./assets/images/matmed.png",
          link: "https://store-tech.se/norlandia/apps/",
        },
        {
          name: "24sju App",
          image: "./assets/images/24sju2.png",
          link: "https://www.24-sju.se/apps/no/",
        },
      ],
    },
  ];