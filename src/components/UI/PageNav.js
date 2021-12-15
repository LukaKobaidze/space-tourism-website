/*
  Props:
    className,
    page,
    content { path, active, element}
*/

import { NavLink } from 'react-router-dom';

const PageNav = props => {
  return (
    <nav className={props.className}>
      <ul>
        {props.content.map(item => {
          return (
            <li key={item.path}>
              <NavLink
                to={`/${props.page}/${item.path.toLowerCase()}`}
                className={item.active}
              >
                {item.element}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNav;
