import { Menu } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export interface IMainPageMenuProps {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
}

export const MainPageMenu: FC<IMainPageMenuProps> = (props) => (
  <Menu
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    selectedKeys={[props.route]}
    mode="horizontal">
    <Menu.Item key="/">
      <Link
        onClick={(): void => {
          props.setRoute('/');
        }}
        to="/">
        Home
      </Link>
    </Menu.Item>
    <Menu.Item key="/hints">
      <Link
        onClick={(): void => {
          props.setRoute('/settings');
        }}
        to="/settings">
        Profile
      </Link>
    </Menu.Item>
    {/* <Menu.Item key="/contracts">
      <Link
        onClick={(): void => {
          props.setRoute('/contracts');
        }}
        to="/contracts">
        Contracts
      </Link>
    </Menu.Item> */}
  </Menu>
);
