import React, { useContext } from 'react'
import { ChooseTheme } from '../../context/ThemeContext';

import './Home.css'

const Home = () => {
  const { theme } = useContext(ChooseTheme);
  return (
    <div data-theme={theme} className='home_container'>
      <div>
        <h1 className="home_heading">Home</h1>
        <p className='home_content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ab, necessitatibus asperiores illum quibusdam voluptates quae tenetur temporibus non tempora, ex explicabo? Delectus sapiente ad nam optio consequuntur ipsa nobis voluptatum voluptas, dolorum neque in quasi sunt odit rem inventore molestiae excepturi magni illo incidunt cum explicabo. Architecto corrupti nostrum tenetur aut quis explicabo deserunt, perspiciatis officia mollitia impedit error doloremque a aperiam natus laudantium. A voluptates officia voluptas illo animi minima porro id ad earum quaerat laborum illum dicta reiciendis neque voluptatibus repellendus quo vel dolore cupiditate, placeat, consequuntur ab minus omnis. Ab placeat quos minima aliquam quo!</p>
      </div>
    </div>
  )
}

export default Home