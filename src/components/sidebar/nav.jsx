import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const SideBarNav = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <ul className="side-nav">
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <FontAwesomeIcon
                icon={Icons.faTachometerAlt}
                style={{ width: '18px', marginRight: '7px' }}
              />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="active">
              <FontAwesomeIcon
                icon={Icons.faUser}
                style={{ width: '18px', marginRight: '7px' }}
              />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" activeClassName="active">
              <FontAwesomeIcon
                icon={Icons.faTasks}
                style={{ width: '18px', marginRight: '7px' }}
              />
              <span>Pricing and Plans</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" activeClassName="active">
              <FontAwesomeIcon
                icon={Icons.faChartLine}
                style={{ width: '18px', marginRight: '7px' }}
              />
              <span>Insights</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">
              <FontAwesomeIcon
                icon={Icons.faTools}
                style={{ width: '18px', marginRight: '7px' }}
              />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" activeClassName="active">
              <FontAwesomeIcon
                icon={Icons.faInfo}
                style={{ width: '18px', marginRight: '7px' }}
              />
              <span>Help</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              <FontAwesomeIcon
                icon={Icons.faSignOutAlt}
                style={{ width: '18px', marginRight: '7px' }}
              />
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

export default SideBarNav;
