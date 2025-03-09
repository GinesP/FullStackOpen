const Header = (props) => {
	return <h1>{props.course.name}</h1>
}

const Part = (props) => {
	return <p>{props.part.name} {props.part.exercises} exercises</p>
}

const Content = (props) => {
	const parts = props.course.parts

	return (
		<div>
			{
				parts.map(part => <Part key={part.id} part={part} />)
			}
		</div>
	)
}

const Total = (props) => {
	const totalExercices = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
	return <p><b>Total of {totalExercices} exercises</b></p>
}

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	)
}

export default Course