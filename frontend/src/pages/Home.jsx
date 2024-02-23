import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className="bg-[url('https://squeezegrowth.com/wp-content/uploads/2022/06/ID-1579-111-Best-Task-Management-Tools-Apps-and-software.png')] bg-cover bg-center text-gray-600 h-[92vh] py-6 text-center">
            <h1 className='text-5xl  font-serif'>Welcome to Your Productivity Space!!</h1>
            <Link to="/signup" className='mt-10 text-xl block space-x-2 hover:space-x-4'>
              <span className='transition-[margin] text-3xl  font-serif'>Join Now for Seamless Task Management </span>
              <span className='relative ml-4 text-base transition-[margin]'><i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </div>
        ) : (
          <>
            <h1 className='text-lg mt-8 mx-8 border-b border-b-gray-300'>Welcome {authState.user.name}</h1>
            <Tasks />
          </>
        )}
      </MainLayout>

                  {/* First Section */}
                  <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 md:order-2">
                <img src="https://img.freepik.com/free-vector/multicultural-people-standing-together_74855-6583.jpg?w=1380&t=st=1704447322~exp=1704447922~hmac=161c6eb23c5b567ccfe6c46418465fee0755a030a63497935e19ef46aae2a2e2" alt="Add Task" className="w-full h-auto" />
              </div>
              <div className="md:w-1/2 md:order-1 text-left font-serif leading-relaxed md:text-left" style={{ marginTop: '20px' }}>
                <h2 className="text-3xl text-primary mb-4">"Ignite your workflow! Add tasks seamlessly."</h2>
                <p classname="mb-6">Ready to conquer your day? Dive into productivity by tapping the lively 'New Task' button—it's your gateway to transforming thoughts into actionable items! Scribble down your task's essence, fill in the task name, and pour in details like a storyteller. Your task is now set to soar among the stars of productivity!"</p>
              </div>
            </div>

            {/* Second Section */}
            <div className="mt-12 flex flex-col md:flex-row-reverse items-center justify-center">
              <div className="md:w-1/2 md:order-2">
                <img src="https://img.freepik.com/free-vector/time-management-concept-woman-clock_23-2148827879.jpg?w=740&t=st=1704449733~exp=1704450333~hmac=91b3ed9513fb0b89d99e3c0b8c5a2243744520323fb98ab2695c3555bf996cb2" alt="Delete Task" className="w-full h-auto" />
              </div>
              <div className="md:w-1/2 md:order-1 text-right  font-serif md:text-left" style={{ marginTop: '20px' }}>
                <h2 className="text-3xl text-blue-900 mb-4">"Purge your to-dos! Delete with a single tap."</h2>
                <p classname="mb-6">Ready to declutter your task list? Deleting a task is as easy as a few clicks! Locate the task you're ready to bid farewell to. Click on it to reveal a world of options. Look for the vibrant 'Delete' button—it's often adorned with a trash bin icon or a striking removal symbol. Once tapped, confirm your action, and watch that task vanish into the digital cosmos! Keep in mind, some tasks might ask for a quick confirmation to ensure your intentions are crystal clear. Sweep away the completed tasks and make way for fresh accomplishments!</p>
              </div>
            </div>

            {/* Third Section */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 md:order-2">
                <img src="https://img.freepik.com/free-vector/students-employees-adding-events-deadlines-calendar-app-young-people-using-time-organizer-planner-flat-illustration_74855-20735.jpg?w=826&t=st=1704449307~exp=1704449907~hmac=d12e9be8449927ed0253aa405ea85ae6a42d768ba3acdfce5e417999d2e51a8f" alt="Update task" className="w-full h-auto" />
              </div>
              <div className="md:w-1/2 md:order-1 text-left  font-serif md:text" style={{ marginTop: '20px' }} >
                <h2 className="text-3xl text-blue-400 mb-4">Rejuvenate your to-dos! Update in a flash."</h2>
                <p classname="mb-6">Ready to revamp your tasks? Updating a task is your ticket to staying on top! Locate the task you're looking to spruce up. Tap to reveal its details, then hunt for the vivid 'Edit' or 'Update' button—it's like unlocking a treasure chest! Make your tweaks, adjust the details, and save your refreshed task. Presto! Your task now sparkles with the latest info. Keep your tasks in sync with your progress and enjoy a more organized workflow!</p>
              </div>
            </div>

            {/* Fourth Section */}
            <div className="mt-12 flex flex-col md:flex-row-reverse items-center justify-center">
              <div className="md:w-1/2 md:order-2">
                <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=1060&t=st=1704447709~exp=1704448309~hmac=0d4695ca6c42050223404e1d4115da064b5ef282a78a2c56bb86354685081135" alt="Reset task" className="w-full h-auto" />
              </div>
              <div className="md:w-1/2 md:order-1 text-right  font-serif md:text-left" style={{ marginTop: '20px' }}>
                <h2 className="text-3xl text-red-500 mb-4">"Reboot your agenda! Reset tasks in a snap."</h2>
                <p classname="mb-6">Need to rewind a task? The 'Reset' button is your time machine! Locate the task that needs a redo. Tap or click to unveil its details. Look for the vivid 'Reset' option—it's like hitting the refresh button on your task! Confirm your choice, and witness your task magically revert to its prior state, erasing recent changes. Embrace the power to rewind, ensuring your tasks stay aligned with your original plan! Reset, refresh, and conquer your tasks with ease!</p>
              </div>
            </div>

          {/* Fifth Section */}
          <div className="mt-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl text-center text-purple-600 font-serif mb-4">"Streamline your tasks effortlessly with our dynamic tracker!"</h2>
         <p className="text-center">Welcome aboard ProdigiTask, your ultimate productivity companion where organization meets flair! Step into a world of streamlined task management designed to energize your workflow. From sorting tasks into personalized categories to receiving vibrant deadline alerts that keep you on your toes, our platform is your go-to hub for efficient task handling. With collaborative features that spark teamwork and progress tracking that feels like a victory lap, you're in control of your productivity story. Customization is at your fingertips—pick themes and layouts that match your vibe and watch as your productivity soars. Whether it's conquering work goals or conquering the world, our task manager turns daunting to-do lists into vibrant, manageable achievements. At ProdigiTask, we're not just about tasks; we're about empowering you to chase dreams, smash goals, and make productivity an exhilarating journey.</p>
         <div className="mt-4">
        <img src="https://img.freepik.com/premium-vector/business-planning-deadline-concept-illustration-cartoon-tiny-people-work-employee-characters-make-plan-business-task-organizer_109722-1191.jpg?w=1060" alt="Task tracker" className="w-full h-auto" />
       </div>
      </div>

{/* Footer */}
     <footer className="bg-gray-900 text-white py-11 text-center">
     <div className="flex justify-center space-x-4 mb-4">
       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
         <i className="fa-brands fa-facebook-square text-2xl"></i>
       </a>
       <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
         <i className="fa-brands fa-twitter-square text-2xl"></i>
       </a>
       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
         <i className="fa-brands fa-linkedin text-2xl"></i>
       </a>
       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
         <i className="fa-brands fa-instagram-square text-2xl"></i>
       </a>
     </div>
     <nav className="flex justify-center space-x-4">
       <Link to="/" className="hover:underline">Home</Link>
       <Link to="/about" className="hover:underline">About Us</Link>
       <Link to="/contact" className="hover:underline">Contact</Link>
     </nav>
     <p className="mt-4 text-sm">Copyright &copy; 2024 ProdigiTask. All rights reserved.</p>
   </footer> 
   </>

  )
}

export default Home;
