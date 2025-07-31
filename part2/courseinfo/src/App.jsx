const Header = (props) => <h1>{props.course}</h1>

const Content = ({parts}) => (
  <ul>
    {
      parts.map((part) => (<Part key={part.id} part={part} />) )
    }
  </ul>
)

const Part = ({part}) => (
  <li>
    {part.name} {part.exercises}
  </li>
)

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Total = ({total}) => (<p><b>Total of {total} exercises</b></p>);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ],
  };
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      <Course course={course} />
      <Total total={total} />
    </div>
  )
}

export default App