import React from 'react';
import {IUser} from "../interfaces";

type  UserItemProps = {
  user: IUser
}

export const UserItem: React.FC<UserItemProps> = ({user}) => {

  return (
    <div className="card custom-card mb-2">
      <div className="card-body">
        <h5 className="card-title"><u>{user.name}</u></h5>
        <p className="card-text"><strong>Имя пользователя:</strong> {user.username}</p>
        <p className="card-text"><strong>Электронная почта:</strong> {user.email}</p>
        <p className="card-text">
          <strong>Адресс:</strong>
          <br/>
          <span className="badge badge-primary custom-badge mx-1">улица: {user.address.street}</span>
          <span className="badge badge-secondary custom-badge mr-1">квартира: {user.address.suite}</span>
          <span className="badge badge-info custom-badge mr-1">город: {user.address.city}</span>
          <span className="badge badge-dark custom-badge">индекс: {user.address.zipcode}</span>
          <br/>
          Геолокация:
          <br/>
          <span className="badge badge-success custom-badge mx-1">широта: {user.address.geo.lat}</span>
          <span className="badge badge-danger custom-badge">долгота: {user.address.geo.lng}</span>
        </p>
        <p className="card-text"><strong>Телефон:</strong> {user.phone}</p>
        <p className="card-text"><strong>Веб-сайт:</strong><a href={'http://www.' + user.website} target="_blank" rel="noopener noreferrer"> {user.website}</a></p>
        <p className="card-text">
          <strong>Компания:</strong>
          <br/>
          <span className="badge badge-primary custom-badge mx-1">название: {user.company.name}</span>
          <span className="badge badge-success custom-badge mr-1">слоган: {user.company.catchPhrase}</span>
          <span className="badge badge-warning custom-badge mr-1">отрасль: {user.company.bs}</span>
        </p>
      </div>
    </div>
  )
}

// lat - широта; lng - долгота
