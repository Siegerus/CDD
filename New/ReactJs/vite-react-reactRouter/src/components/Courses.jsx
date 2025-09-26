
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import data  from '../data/courses';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
    let sorted = [...courses];    // делаем новый массив из заданного в параметрах ф-ции
    if(!key || !SORT_KEYS.includes(key)) return courses;
    sorted.sort((a ,b) => a[key] < b[key] ? -1 : 1);
    return sorted;
}

const Courses = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let query = Object.fromEntries(new URLSearchParams(location.search));

    let [sortKey, setSortKey] = useState(query.sort);

    let [sortedCourses, setSortedCourses] = useState(sortCourses(data, sortKey)/* sortKey ? sortCourses(data, sortKey) : data */); 
    /* выше закоментированный пример, что в "useState" может быть выражение */

    useEffect(() => {
        if(!SORT_KEYS.includes(sortKey)) {
            navigate('.');
            setSortKey();  // при вызове пустого set результат будет undefined, что и нужно, что бы сбросить sortKey, введённый в строку запроса
            setSortedCourses([...data])
        }
    }, [sortKey, navigate]);

	return (
        <>
            <div className="courses-list">
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1> 
                {sortedCourses.map(item => <Link to={`${item.slug}/${item.lang}`} key={item.id}>{item.title}</Link>)}
            </div>
        </>
        
    )
};

export default Courses;
