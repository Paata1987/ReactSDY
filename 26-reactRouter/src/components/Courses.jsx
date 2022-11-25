import React from "react";
import { Link } from "react-router-dom";
import courses from "../data/Courses";
const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link
            className="courseLink"
            to={course.slug}
          >
            {course.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
