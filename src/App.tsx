import Message from "./Message";
import Image from "./Image";
import About from "./About";
import { Service } from "./Service";
import Blog from "./Blog";

import Footer from "./Footer";

function App() {
  const servicesData = [
    {
      name: "Web Developer",
      text: "As a Web Developer, I specialize in creating dynamic and interactive websites that not only look great but also provide seamless user experiences. I am proficient in front-end and back-end technologies, ensuring that your web applications are robust and efficient.",
    },
    {
      name: "UI/UX Designer",
      text: "In the realm of UI/UX Design, I bring creativity and user-centric design principles to the forefront. My focus is on creating visually appealing interfaces that enhance user engagement. I pay meticulous attention to user experience, ensuring that your digital products are both aesthetically pleasing and easy to navigate.",
    },
    {
      name: "App Developer",
      text: "Being an App Developer, I excel in crafting mobile applications that cater to the specific needs of your audience. I am experienced in both iOS and Android development, utilizing the latest technologies to deliver high-performance and user-friendly mobile solutions.",
    },
  ];
  return (
    <div>
      <Message />
      <Image
        src="./src/assets/homeimage.jpg"
        alt="BackgroundImage"
        heading="Shankaran Giritharan"
        text=""
      />
      <About />
      <Service services={servicesData} />
      <Blog />

      <Footer />
    </div>
  );
}
export default App;
