import React, { Component, Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <Fragment>
      <header>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/props"
        >
          Props
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/state"
        >
          State
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/state-2"
        >
          State2
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/event"
        >
          Event
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/event-function"
        >
          Event2
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/ref"
        >
          Ref
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/ref-scroll"
        >
          RefScroll
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/map"
        >
          Map
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/lifecycle"
        >
          LifeCycle
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/hook/counter"
        >
          Hook-Counter
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/hook/info-useEffect"
        >
          Hook-Info-useEffect
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/hook/Info-reducer"
        >
          Hook-Info-reducer
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/hook/useMemo"
        >
          Hook-use-Memo
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}
