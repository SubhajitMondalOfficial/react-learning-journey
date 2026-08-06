import { useState } from "react"; 
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const jobOpenings = [
    {
      id: 1,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=google.com",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      id: 2,
      brandLogo:
        "https://www.google.com/s2/favicons?sz=128&domain=microsoft.com",
      companyName: "Microsoft",
      datePosted: "5 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Hyderabad, India",
    },
    {
      id: 3,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=amazon.com",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Seattle, USA",
    },
    {
      id: 4,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=meta.com",
      companyName: "Meta",
      datePosted: "3 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hr",
      location: "Menlo Park, USA",
    },
    {
      id: 5,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=apple.com",
      companyName: "Apple",
      datePosted: "6 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Cupertino, USA",
    },
    {
      id: 6,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=netflix.com",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      post: "Cloud Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Los Gatos, USA",
    },
    {
      id: 7,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=nvidia.com",
      companyName: "NVIDIA",
      datePosted: "10 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$88/hr",
      location: "Pune, India",
    },
    {
      id: 8,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=adobe.com",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Hybrid",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Noida, India",
    },
    {
      id: 9,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=uber.com",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Bangalore, India",
    },
    {
      id: 10,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=openai.com",
      companyName: "OpenAI",
      datePosted: "5 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "San Francisco, USA",
    },
    {
      id: 11,
      brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=intel.com",
      companyName: "Intel",
      datePosted: "1 day ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Bangalore, India",
    },
    {
      id: 12,
      brandLogo:
        "https://www.google.com/s2/favicons?sz=128&domain=salesforce.com",
      companyName: "Salesforce",
      datePosted: "4 days ago",
      post: "Frontend Developer",
      tag1: "Hybrid",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Hyderabad, India",
    },
  ];

  return (
    <>
      {/* Header Components */}
      <Navbar />

      <div className="parent">
        {/* Main Components */}
        {jobOpenings.map((val, idx) => {
          return (
            <div key={idx}>
              <Card
                logo={val.brandLogo}
                company={val.companyName}
                datePost={val.datePosted}
                post={val.post}
                tag1={val.tag1}
                tag2={val.tag2}
                Salary={val.pay}
                location={val.location}
              />
              ;
            </div>
          );
        })}
      </div>
      {/* Footer Components */}
      <Footer />
    </>
  );
}

export default App;
