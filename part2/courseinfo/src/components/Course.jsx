const Header = (props) => <h2>{props.course}</h2>

const Content = ({parts}) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <div>
      <ul>
        {
          parts.map((part) => (<Part key={part.id} part={part} />) )
        }
      </ul>
      <Total total={total} />
    </div>
  )
}

const Part = ({part}) => (
  <li>
    {part.name} {part.exercises}
  </li>
)

const Total = ({total}) => (<p><b>Total of {total} exercises</b></p>);

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
};

export default Course;