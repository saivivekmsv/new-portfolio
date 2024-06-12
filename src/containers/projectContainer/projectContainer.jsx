import {
    Card,
    CardBody,
    Image,
    Stack,
    Text,
    Heading,
    Divider,
    UnorderedList,
    ListItem,
    CardFooter,
    Wrap,
    WrapItem,
    Badge,
  } from '@chakra-ui/react';
  const projects = [
    {
      title: 'Skin Care Website',
      year: 'Nov - 2022',
      description: 'Website for a client to sell hand made skin care products.',
      scope: 
        {
          type: 'WebApp',
          functionRequirements:
            'basic features of an ecommerce website to order the product',
          deployment: 'github pages',
          skills: ['React', 'sass', 'Bootstrap', 'github', 'firebase'],
        },
      
    },
    {
      title: 'Integrated React with .net6',
      year: 'May - 2022',
      description:
        'Webapp project for testing feasibility of react app with .net fusion as a single host',
      scope: 
        {
          type: 'webapp',
          functionRequirements: 'create react app with .net ',
          skills: ['React', '.net6', 'webpack', 'sass', 'tailwind'],
        },
      
    },
    {
      title: 'Forest',
      year: 'Dec - 2021',
      description: 'WebUI for dApps',
      scope: 
        {
          type: 'WebUI',
          functionRequirements: 'UI for integrating dApps project',
          skills: ['React', 'Bootstrap', 'sass'],
        },
      
    },
    {
      title: 'TheFsCompany',
      year: 'Nov - 2021',
      description: 'Food delivery app for a client',
      scope: 
        {
          type: 'WebApp - PWA',
          functionRequirements:
            'Food delivery app with ordering & order tracking feature',
          skills: ['React', 'Bootstrap', 'sass', 'firebase'],
        },
      
    },
    // {
    //   title: 'PurchaseAlley',
    //   year:'Nov - 2021',
    //   description:'Food delivery app for a client',
    //   scope:[
    //     {
    //       type:'WebApp - PWA',
    //       functionRequirements:"Food delivery app with ordering & order tracking feature",
    //       skills:["React","Bootstrap","sass","firebase"]
  
    //     }
    //   ]
  
    // },
  ];
  function ProjectsContainer(props) {
    return (
      <>
        {projects.map((h, j) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}
            variant="outline"
            key={j}
            my="2"
            position="static"
          >
            <Stack>
              <CardBody>
                <Heading size="md">{h.title}</Heading>
                <Divider my="2" />
                <Text fontSize="md" as="b">
                  {h.year}
                </Text>
                <Text pt="2">
                  {h.description}
                </Text>
                <Text py="2">Scope of the project:</Text>
                <UnorderedList styleType="'-'">
                <ListItem>{h.scope.type}</ListItem>
                <ListItem>{h.scope.functionRequirements}</ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter>
                <Wrap>
                  {h.scope.skills.map((e, i) => (
                    <WrapItem key={i}>
                      <Badge variant="outline">{e}</Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </CardFooter>
            </Stack>
            {/* <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              maxH={{ base: '200px', sm: '200px' }}
              my="2rem"
              src="data:image/jpeg;base64,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"
            /> */}
          </Card>
        ))}
      </>
    );
  }
  
  export default ProjectsContainer;