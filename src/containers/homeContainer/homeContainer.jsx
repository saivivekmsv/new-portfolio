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
const skills = [
  {
    category: "Development",
    subCategory: [
      {
        label: "HTML",
        icon: "/src/assets/html.svg",
      },
      {
        label: "CSS",
        icon: "/src/assets/css.svg",
      },

      {
        label: "Bootstrap",
        icon: "/src/assets/bootstrap.svg",
      },
      {
        label: "ChakraUI",
        icon: "/src/assets/chakraui.svg",
      },
      {
        label: "SASS",
        icon: "/src/assets/sass.svg",
      },
      {
        label: "JavaScript",
        icon: "/src/assets/javascript.svg",
      },
      {
        label: "C#",
        icon: "/src/assets/csharp.svg",
      },
      {
        label: "Python",
        icon: "/src/assets/python.svg",
      },
    ],
  },
  {
    category: "DataBase",
    subCategory: [
      {
        label: "SQL",
        icon: "/src/assets/mysql.svg",
      },
      {
        label: "Mongodb",
        icon: "/src/assets/mongo.png",
      },
      {
        label: "Redis",
        icon: "/src/assets/redis.svg",
      },
    ],
  },
  {
    category: "Tools & Libraries",
    subCategory: [
      {
        label: "Azure",
        icon: "/src/assets/azure.svg",
      },
      {
        label: "Figma",
        icon: "/src/assets/figma.svg",
      },
      {
        label: "GIT",
        icon: "/src/assets/git.svg",
      },
      {
        label: "LINUX",
        icon: "/src/assets/linux.png",
      },
      {
        label: "Firebase",
        icon: "/src/assets/firebase.svg",
      },
      {
        label: "NodeJS",
        icon: "/src/assets/nodejs.svg",
      },
      {
        label: "ReactJS",
        icon: "/src/assets/react.svg",
      },
      {
        label: "Webpack",
        icon: "/src/assets/webpack.svg",
      },
      {
        label: "ViteJS",
        icon: "/src/assets/vite.svg",
      },
      {
        label: "Visual Studio",
        icon: "/src/assets/visualstudio.svg",
      },
      {
        label: "Visual Studio Code",
        icon: "/src/assets/visualstudiocode.svg",
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
