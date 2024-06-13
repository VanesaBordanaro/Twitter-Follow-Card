import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const Users = [
    {
      userName: 'kikobeats',
      name: 'Kiko Beats',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo Hernández',
      isFollowing: false
    },
    {
      userName: 'VanaVB',
      name: 'Vanesa VB',
      isFollowing: true
    },
    {
      userName: 'dan_abramov',
      name: 'Dan Abramov',
      isFollowing: true
    },
    {
      userName: 'gaearon',
      name: 'Andrew Clark',
      isFollowing: false
    },
    {
      userName: 'sophiebits',
      name: 'Sophie Alpert',
      isFollowing: true
    },
    {
      userName: 'sebmarkbage',
      name: 'Sebastian Markbåge',
      isFollowing: false
    },
    {
      userName: 'ryanflorence',
      name: 'Ryan Florence',
      isFollowing: true
    },
    {
      userName: 'mjackson',
      name: 'Michael Jackson',
      isFollowing: false
    },
    {
      userName: 'mxstbr',
      name: 'Max Stoiber',
      isFollowing: true
    }
  ]

export function App () {
    return (
        <section className='App'>
            {
                Users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}>
                            </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}