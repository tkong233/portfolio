import React from 'react';
import { Affix, Menu, Icon} from 'antd';

const { SubMenu } = Menu;

class TopNavBar extends React.Component {
    state = {
        current: 'home',
        };

        handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

  render() {
    return (
      <div
        className="scrollable-container top-nav-bar"
        ref={node => {
          this.container = node;
        }}
      >
        <div className="background">
          <Affix target={() => this.container}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

                {/* home */}
                <Menu.Item key="home">
                    <Icon type="home" />
                         Home
                </Menu.Item>

                {/* Projects */}
                <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                    <Icon type="profile" />
                    Projects
                    </span>
                }
                >
                <Menu.ItemGroup>
                    <Menu.Item key="code">Code</Menu.Item>
                </Menu.ItemGroup>

                <Menu.ItemGroup>
                    <Menu.Item key="music">Music</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>

                {/* contact */}
                <Menu.Item key="contact">
                    <Icon type="mail" />
                         Contact
                </Menu.Item>

                {/* <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
                </Menu.Item> */}

            </Menu>
          </Affix>
        </div>
      </div>
    );
  }

}

export default TopNavBar;