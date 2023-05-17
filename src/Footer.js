import React from 'react'

const Footer = () => {
  return (
    
      <footer className="w-screen text-white mt-10 bg-black flex flex-col items-center">
        <div className="text-white text-xl underline p-2">Stories</div>
        <div className="flex flex-col lg:flex-row gap-10 mb-10 ">
          <div className="basis-[30%]">
            <ul className="flex flex-col gap-3">
              <li>
                Customer Marketing: What is it and how do you get started?
              </li>
              <li>7 Ways Social Proof Can Grow Your SaaS Business</li>
              <li>How Video Reviews Helps To Close More Deals</li>
              <li>5 reasons why you shouldn't remove negative reviews</li>
              <li>What is a video testimonial?</li>
            </ul>
          </div>
          <div className="basis-[30%]">
            <ul className="flex flex-col gap-3">
              <li>What is the purpose of Video testimonials</li>
              <li>Why Video Testimonials Plays Key Roles For Customer Trust</li>
              <li>Why create videos to promote your event?</li>
              <li>7 Proven Tips To Create Incredible Product Review</li>
              <li>Why Employee Testimonial Videos are Important ?</li>
            </ul>
          </div>
          <div className="basis-[30%]">
            <ul className="flex flex-col gap-3">
              <li>7 Ways to win by listening to your customers</li>
              <li>4 Of the worst ways to respond to negative feedback</li>
              <li>Why do we need video testimonials?</li>
              <li>3 essential Ingredients of Customer Experience</li>
              <li>Do's and don'ts: best practices for responding to reviews</li>
            </ul>
          </div>
        </div>

        <hr className="border w-[90%] m-4" />
        <div className="flex gap-10">
          <h1>Servide Review</h1>
          <h1>Become Partner</h1>
        </div>
        <div className="flex ">
          <h1>Feedback</h1>
        </div>
        <div className="flex gap-5">
          <h1>T & C</h1>
          <h1>Privacy Policy</h1>
          <h1>Refund Policy</h1>
          <h1>Cancellation Policy</h1>
        </div>
        <hr className=" w-[90%] m-4" />
        <div className="flex mb-4 w-[80%] flex-col justify-center items-center gap-5">
          <h1 className="underline text-xl">Contact Us</h1>
          <div className="text-sm flex flex-col w-[100%] justify-around text-center ">
            <div className="flex justify-between">
              <span>TribeVibe Experiences Private Limited</span>
              <span>76, Pragati Nagar, Indore , M. P. 452012</span>
            </div>
            <div className="flex justify-between">
              <span>Email: connect@myrevue.app</span>
              <span>Phone: +91 8450022182</span>
            </div>
          </div>
        </div>
      </footer>

  )
}

export default Footer
