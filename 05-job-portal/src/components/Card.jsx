import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({logo, company, datePost, post, tag1, tag2, Salary, location}) => {
 
    
  return (
    <>
      <div className="card">
        <div>
          {/* top */}
          <div className="top">
            <img src={logo} />
            <button className="btn">
              Save <Bookmark size={10} />
            </button>
          </div>

          {/* Center */}
          <div className="center">
            <h3>
              {company} <span>{datePost}</span>
            </h3>
            <h2>{post}</h2>
            <div className="tag">
              <h4>{tag1}</h4>
              <h4>{tag2}</h4>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom">
          <div>
            <h3>{Salary}</h3>
            <p>{location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
