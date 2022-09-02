import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  Flex,
  Image,
  Center,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link as Link } from "react-router-dom";
import "../components/about/C.css";
const names = [
  { id: "1", name: "Aditya" },
  { id: "2", name: "Santanu" },
  { id: "3", name: "Susmita" },
];

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
      
          <Center>
            <Heading className="btn-shine">Made with LOVE ❤️</Heading>
         


          </Center>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "black", color: "white" }}>
                  <Image
                    borderRadius="100%"
                    h="100px"
                    w="100px"
                    src="https://i.postimg.cc/L8YQhnJQ/Whats-App-Image-2022-09-02-at-5-54-07-PM.jpg"
                  />
                  <Box flex="1" className="animate-charcter">
                    Aditya
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                bg="lightgray"
                align="center"
                m="auto"
                p="auto"
              >
                <Center>
                  {" "}
                  <ul>
                    <li>
                      <a
                        target="open"
                        href="https://www.facebook.com/aditya.sekhar.bej/"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        target="open"
                        href="https://www.linkedin.com/in/aditya-sekhar-bej/"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="open"
                        href="https://github.com/adityasekharbej"
                      >
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="open"
                        href="https://www.instagram.com/i.maverick.exe/"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </Center>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "black", color: "white" }}>
                  <Image
                    borderRadius="100%"
                    fit="cover"
                    h="100px"
                    w="100px"
                    src="https://i.postimg.cc/BQ46Q0kF/resumepic.png"
                  />
                  <Box flex="1" className="animate-charcter">
                    Santanu
                  </Box>{" "}
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                bg="lightgray"
                align="center"
                m="auto"
                p="auto"
              >
                <Center>
                  {" "}
                  <ul>
                    <li>
                      <a
                        target="open"
                        href="https://www.facebook.com/7008467376.shaaN/"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        target="open"
                        href="https://www.linkedin.com/in/santanu-mohapatra-880204200/"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a target="open" href="https://github.com/santanu55555">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="open"
                        href="https://www.instagram.com/shantanu_469/"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </Center>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "black", color: "white" }}>
                  <Image
                    borderRadius="100%"
                    h="100px"
                    w="100px"
                    src="https://i.postimg.cc/wjLrjCmC/99960489.jpg"
                  />
                  <Box flex="1" className="animate-charcter">
                    Susmita
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                bg="lightgray"
                align="center"
                m="auto"
                p="auto"
              >
                <Center>
                  {" "}
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/susmita.mandal.50746"
                        target="open"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="open"
                        href="https://www.linkedin.com/in/susmitamandal549/"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a target="open" href="https://github.com/Susmita549">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </Center>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
      
      </Box>
    </>
  );
};

export default About;
