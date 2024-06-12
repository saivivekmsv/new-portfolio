import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFile,
  faDiagramProject,
  faIdCard,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { Link as ReactLink, Outlet, useLocation , useNavigate} from 'react-router-dom';
import {
  Show,
  Image,
  Link as ChakraLink,
  Text,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { MainContext } from '../../context/mainContext';
import { useContext, useEffect, useState } from 'react';

const menuContent = [
  {
    label: 'Home',
    icon: faHome,
    link: '/new-portfolio/home',
  },
  {
    label: 'Resume',
    icon: faFile,
    link: '/new-portfolio/resume',
  },
  {
    label: 'Projects',
    icon: faDiagramProject,
    link: '/new-portfolio/projects',
  },
  //   {
  //     label: 'Contact',
  //     icon: faIdCard,
  //     link: '/contact',
  //   },
];
const socialAccounts = [
  {
    icon: '/src/assets/linkedin.svg',
    link: 'https://www.linkedin.com/in/saivivek-msv/',
  },
  {
    icon: '/src/assets/github.svg',
    link: 'https://github.com/saivivekmsv?tab=repositories',
  },
  {
    icon: '/src/assets/medium.svg',
    link: 'https://medium.com/@saivivek.msv',
  },
];
function MainLayout(props) {
  const navigate = useNavigate();
    
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/home';
  useEffect(() => {
    navigate('/new-portfolio/home');
  },[]);
  useEffect(() => {
    if (!isHome) setVisible(false);
  }, [isHome]);
  console.log(visible, isHome, 'homee');
  return (
    <div>
      <Show below="md">
        <Flex
          position="fixed"
          w="100%"
          justify={
            isHome ? (!visible ? 'space-between' : 'end') : 'space-between'
          }
          h="8vh"
          align="center"
          p="0.5rem"
        >
          {isHome ? (
            !visible && (
              <Flex gap="4px" align="center">
                <Avatar name="MSV" />
                <Text fontSize="md" as="b">
                  SAI VIVEK
                </Text>
              </Flex>
            )
          ) : (
            <Flex gap="4px" align="center">
              <Avatar name="MSV" />
              <Text fontSize="md" as="b">
                SAI VIVEK
              </Text>
            </Flex>
          )}

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FontAwesomeIcon icon={faBars} />}
              variant="outline"
            />
            <MenuList zIndex={10}>
              {menuContent.map((e, i) => (
                <MenuItem
                  icon={<FontAwesomeIcon icon={e.icon} />}
                  as="a"
                  href={e.link}
                  key={i}
                  style={{
                    backgroundColor: location.pathname === e.link && '#cbcbca',
                  }}
                >
                  {e.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Show>
      <div className="main-layout">
        <Show above="md">
          <div className="menu-content">
            <div>
              {location.pathname === '/home' ? (
                !visible && (
                  <Flex gap="4px" align="center">
                    <Avatar name="MSV" />
                    <Text fontSize="md" as="b">
                      SAI VIVEK
                    </Text>
                  </Flex>
                )
              ) : (
                <Flex gap="4px" align="center">
                  <Avatar name="MSV" />
                  <Text fontSize="md" as="b">
                    SAI VIVEK
                  </Text>
                </Flex>
              )}
              {menuContent.map((e, i) => (
                <ChakraLink
                  as={ReactLink}
                  className="menu-content-icon"
                  key={i}
                  to={e.link}
                  style={{
                    backgroundColor: location.pathname === e.link && '#cbcbca',
                  }}
                >
                  <FontAwesomeIcon icon={e.icon} />
                  <Text>{e.label}</Text>
                </ChakraLink>
              ))}
            </div>
            <div className="social-accounts">
              {socialAccounts.map((e, i) => (
                <ChakraLink
                  as={ReactLink}
                  key={i}
                  to={e.link}
                  className="social-accounts-link"
                >
                  <Image src={e.icon} />
                </ChakraLink>
              ))}
            </div>
          </div>
        </Show>
        <Flex
          className="right-content"
          w="100%"
          mt={{ base: '7vh', sm: '7vh', md: '0' }}
        >
          <MainContext.Provider value={{ visible, setVisible }}>
            <Outlet />
          </MainContext.Provider>
        </Flex>
      </div>
    </div>
  );
}

export default MainLayout;