import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/59897978?v=4",
        name: 'Igor Tibério',
        role: 'Web Developer'
      },

      content: [
        {type: 'paragraph', content: 'Fala galera'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
        {type: 'link', content: 'jane.design/doctorcare'},      
      ],
      publishedAt: new Date('2023-05-10 16:34:00'),
    },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: 'Diegão',
        role: 'CTO @Rocketseat'
      },

      content: [
        {type: 'paragraph', content: 'Fala galera'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
        {type: 'link', content: 'jane.design/doctorcare'},      
      ],
      publishedAt: new Date('2023-05-13 06:14:00')
    }
  ]

  return (
   <div>
    <Header />
    <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
          {posts.map(post => {
            return (
              <Post
               key={post.id}
               author={post.author}
               content={post.content}
               publishedAt={post.publishedAt}
              />
            )
          })}
      </main>
    </div>
      
   </div>
  )
}

export default App
