import {
  Avatar,
  Text,
  Box,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Wrap,
  WrapItem,
  Badge,
  Highlight,
  Tag,
  Icon,
  Image,
  Flex,
} from "@chakra-ui/react";
// import React from '../../assets/react.svg';
import { useContext, useEffect } from "react";
import { MainContext } from "../../context/mainContext";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import BootStrap from "../../assets/bootstrap.svg";
import ChakraUI from "../../assets/chakraui.svg";
import SASS from "../../assets/sass.svg";
import JS from "../../assets/javascript.svg";
import CSHARP from "../../assets/csharp.svg";
import PYTHON from "../../assets/python.svg";
import SQL from "../../assets/mysql.svg";
import MONGO from "../../assets/mongo.png";
import REDIS from "../../assets/redis.svg";
import AZURE from "../../assets/azure.svg";
import FIGMA from "../../assets/figma.svg";
import GIT from "../../assets/git.svg";
import LINUX from "../../assets/linux.png";
import FIREBASE from "../../assets/firebase.svg";
import NODE from "../../assets/nodejs.svg";
import REACT from "../../assets/react.svg";
import WEBPACK from "../../assets/webpack.svg";
import VITE from "../../assets/vite.svg";
import VS from "../../assets/visualstudio.svg";
import VSC from "../../assets/visualstudiocode.svg";
const skills = [
  {
    category: "Development",
    subCategory: [
      {
        label: "HTML",
        icon: HTML,
      },
      {
        label: "CSS",
        icon: CSS,
      },

      {
        label: "Bootstrap",
        icon: BootStrap,
      },
      {
        label: "ChakraUI",
        icon: ChakraUI,
      },
      {
        label: "SASS",
        icon: SASS,
      },
      {
        label: "JavaScript",
        icon: JS,
      },
      {
        label: "C#",
        icon: CSHARP,
      },
      {
        label: "Python",
        icon: PYTHON,
      },
    ],
  },
  {
    category: "DataBase",
    subCategory: [
      {
        label: "MYSQL",
        icon: SQL,
      },
      {
        label: "Mongodb",
        icon: MONGO,
      },
      {
        label: "Redis",
        icon: REDIS,
      },
    ],
  },
  {
    category: "Tools & Libraries",
    subCategory: [
      {
        label: "Azure",
        icon: AZURE,
      },
      {
        label: "Figma",
        icon: FIGMA,
      },
      {
        label: "GIT",
        icon: GIT,
      },
      {
        label: "LINUX",
        icon: LINUX,
      },
      {
        label: "Firebase",
        icon: FIREBASE,
      },
      {
        label: "NodeJS",
        icon: NODE,
      },
      {
        label: "ReactJS",
        icon: REACT,
      },
      {
        label: "Webpack",
        icon: REACT,
      },
      {
        label: "ViteJS",
        icon: VITE,
      },
      {
        label: "Visual Studio",
        icon: VS,
      },
      {
        label: "Visual Studio Code",
        icon: VSC,
      },
    ],
  },
];
function HomeContainer(props) {
  const { visible, setVisible } = useContext(MainContext);
  const [ref, { entry }] = useIntersectionObserver();
  useEffect(() => {
    entry && setVisible(entry.isIntersecting);
  }, [entry]);
  return (
    <div className="home-container">
      <div className="profile-pic" ref={ref}>
        <Avatar name="MSV" />
        <Text fontSize="2xl" as="b">
          SAI VIVEK MADUGONDA
        </Text>
      </div>
      <div className="introduction">
        <Highlight query="Full Stack Engineer" styles={{ fontWeight: "bold" }}>
          Full Stack Engineer with expertise in Full-stack web application
          development, Security integration, and Technical skills in .NET MVC,
          MySQL, ReactJS, Azure, and more
        </Highlight>
      </div>

      <Flex direction="column" gap="3" className="skill-set">
        <Text fontSize="2xl" as="b">
          SKILLS
        </Text>
        {skills.map((f, k) => (
          <Flex key={k}>
            <Card
              width="100%"
              variant="outline"
              backgroundColor="#DEE4E5"
              position="static"
            >
              <CardHeader>
                <Text fontSize="lg" as="b" textTransform="uppercase">
                  {f.category}
                </Text>
              </CardHeader>
              <CardBody>
                <>
                  {f.subCategory.map((e, i) => (
                    <Tag m="1" key={i} p="1">
                      <Image src={e.icon} w="40px" h="40px" mr="2px" />

                      <Text>{e.label}</Text>
                    </Tag>
                  ))}
                </>
              </CardBody>
            </Card>
          </Flex>
        ))}
      </Flex>
      <div className="about-section">
        <Text fontSize="2xl" as="b">
          About
        </Text>
        <Text noOfLines={[1, 10, 5]}>
          Senior Software Engineer with over 4 years of experience and about 2
          years of leading a team of 4-8 developers in designing, developing,
          and deploying full-stack web applications. Skilled in integrating SAST
          and DAST platforms, with expertise in .NET MVC, MySQL, ReactJS, and
          Azure. Successfully streamlined CI/CD management flow for deployments
          on Linux VMs.
        </Text>
      </div>
    </div>
  );
}

export default HomeContainer;
