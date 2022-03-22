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
      justifyContent: 'center'

    }}
    selectedKeys={[props.route]}
    mode="horizontal">
    <Menu.Item key="/">
      <Link
        onClick={(): void => {
          props.setRoute('/');
        }}
        to="/">
        Contracts
      </Link>
    </Menu.Item>
    <Menu.Item key="/hints">
      <Link
        onClick={(): void => {
          props.setRoute('/hints');
        }}
        to="/hints">
        Hints
      </Link>
    </Menu.Item>
    <Menu.Item key="/exampleui">
      <Link
        onClick={(): void => {
          props.setRoute('/exampleui');
        }}
        to="/exampleui">
        ExampleUI
      </Link>
    </Menu.Item>

  </Menu>
);
