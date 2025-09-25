
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import data  from '../data/courses';

function sortCourses(courses, key) {
    let sorted = [...courses];      // делаем новый массив из заданного в параметрах ф-ции
}

const Courses = () => {
    let location = useLocation();
    let query = Object.fromEntries(new URLSearchParams(location.search));

    let [sortKey, setSortKey] = useState(query.sort);
    let [sortedCourses, setSortedCourses] = useState(data);


	return (
        <>
            <div className="courses-list">
            <h1>Courses</h1> 
                {sortedCourses.map(item => <Link to={`${item.slug}/${item.lang}`} key={item.id}>{item.title}</Link>)}
            </div>
        </>
        
    )
};

export default Courses;
