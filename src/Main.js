import React, { Component, Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <Fragment>
      <header>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          to="/props"
        >
          Props
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          to="/state"
        >
          State
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          to="/state/2"
        >
          State2
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          to="/event"
        >
          Event
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          to="/event/function"
        >
          Event2
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          to="/ref"
        >
          Ref
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          to="/ref/scroll"
        >
          RefScroll
        </NavLink>
      </header>
      <Outlet />
    </Fragment>
  );
}
