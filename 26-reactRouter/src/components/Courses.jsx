import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import courses from "../data/Courses";
import queryString from "query-string";

const SORT_KEY = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEY.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey] = useState(query.sort);
  // console.log(sortCourses(courses, sortKey));
  const [sortedCourses] = useState(sortCourses(courses, sortKey));

  useEffect(() => {
    if (!SORT_KEY.includes(sortKey)) {
      navigate(".");
    }
  }, [sortKey, navigate]);

  return (
    <div>
      <h1>{sortKey ? `Courses sortet by ${sortKey}` : "Courses"} </h1>
      {sortedCourses.map((course) => (
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
