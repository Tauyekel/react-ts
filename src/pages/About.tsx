import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {IUser} from "../interfaces";
import {UserItem} from "../components/UserItem";
import {Loader} from "../components/Loader";

const url = 'https://jsonplaceholder.typicode.com/users'

export const About: React.FC = () => {

  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    axios.get(url)
      .then(users => {
        setUsers(users.data)
        setLoading(false)
        console.log(users)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {
        loading
          ? <Loader />
          : users.map(user => <UserItem key={user.id} user={user} />)
      }
    </>
  )
}

