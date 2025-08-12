import Header from "../header/Header";
// import Testimonial from "./testimonial/Testimonial";
import Benefit from "./benefit/Benefit"
import Course from "./course/Course";
import Faq from "./faq/Faq";

function MainBody() {
  return (
    <>
      <Header />
      <Course />
      <Benefit />
      {/* <Testimonial /> */}
      <Faq />
    </>
  );
}

export default MainBody;
