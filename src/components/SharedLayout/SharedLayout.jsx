import { NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = ({ children }) => (
  <>
    <header className={css.header}>
      <div className={css.container}>
        <nav>
          <NavLink
            className={({ isActive }) => `${isActive ? css.active : ''}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive ? css.active : ''}`}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
    <main>
      <section>
        <div className={css.container}>{children}</div>
      </section>
    </main>
  </>
);
