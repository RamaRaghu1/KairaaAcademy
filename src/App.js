import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import Courses from "./pages/Courses";
import GalleryPage from "./pages/GalleryPage";
import CourseSyllabus from "./pages/CourseSyllabus";
// import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SelfPacedCourses from "./pages/SelfPacedCourses";
import { SiBlockchaindotcom } from "react-icons/si";
import BootCamp from "./pages/BootCamp";
import ViewCourseDetails from "./pages/Top_courses/ViewCourseDetails";
import Blockchain from "./pages/Top_courses/Blockchain";
import InternshipProgram from "./pages/Top_courses/Blockchain1";
import OtherCourse from "./pages/Top_courses/OtherCourses";
import CourseRegistration from "./pages/CourseRegistration";
import BlockChainCertification from "./pages/BlockChainCertification";





 function AppLayout() {
  return (
    <div className="App overflow-hidden">
      <NavBar/>
      <Outlet />
     <Footer/>
    </div>
  );
}


 const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-kairaa-blockchain-academy",
        element: <AboutPage />,
      },
      {
        path:"/resources",
        element:<BlogPage/>
      },
      {
        path:"/gallery",
        element:<GalleryPage/>
      },
      {
        path:"/courses",
        element:<Courses/>,
       
      },
      {
        path:'/course/selfpaced-course',
        element:<SelfPacedCourses/>
      },
      {
        path:'/course/blockchain',
        element:<Blockchain/>
      },
      {
        path:'/course/othercourse',
        element:<OtherCourse/>
      } ,    
      {
        path:'/course/bootcamp',
        element:<BootCamp/>

      } ,
      {
        path:'/course/internship-program',
        element:<InternshipProgram/>

      } ,
      {
        path:'/course/bockchaincertification',
        element:<BlockChainCertification/>,

      } ,
      {
        path:'/courseregistration',
        element:<CourseRegistration/>,

      } ,
      {
        path:'/viewcoursedetails',
        element:<ViewCourseDetails/>,

      } ,
    
    
    ],
   
  },
]);
export default appRouter;