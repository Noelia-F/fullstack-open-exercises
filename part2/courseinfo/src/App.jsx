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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      {
        courses.map((course) => (
          <Course key={course.id} course={course} />
        ))
      }
    </div>
  )
}

export default App