import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import data from '../data/courses';

const SingleCourse = () => {
	let params = useParams();
	let navigate = useNavigate();
	let course = data.find(item => item.slug == params.courseSlug);

	useEffect(() => {
		/* navigate импользуется только внутри useEffect */
		if (!course) {
			navigate('../..', {
				relative: 'path'
			}); /* navigate перенаправляет по нужному адресу 'path' - относительно текущего пути 'route' - отню корня */
		}
	}, [course, navigate]);

	return (
		<>
			{params.courseSlug == 'js' && <h1>This is JS</h1>}
			{params.lang == 'ru' && <h1>Русский язык</h1>}
			<div className="single-course">
				<h2>
					{course.title} {course.id}
				</h2>
				{`${course.slug}  ---> `}Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Vel omnis in repudiandae beatae voluptate amet
				corrupti incidunt maxime, cumque minus corporis quisquam quae
				distinctio adipisci ducimus sed delectus perferendis quam quasi
				error at enim! Labore obcaecati tenetur dolor aliquid magni.
			</div>
			<Link to="../.." relative="path">
				{' '}
				Back to All Courses
			</Link>{' '}
			{/* Перейти на уровень выше отностительно пути(без "relative" переходит в корень /) */}
		</>
	);
};

export default SingleCourse;
