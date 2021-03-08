import React from 'react';
import coco_logo from 'shared/assets/coco_logo.svg';
import Dashboard from 'apps/dashboard/Dashboard';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 38px;
`;

const Header = styled.header`
  margin-bottom: 27px;
`;

const Layout = () => (
  <LayoutWrapper>
    <Header>
      <div className="logo">
        <img src={coco_logo} alt=""/>
      </div>
    </Header>
    <main>
      <Dashboard />
    </main>
  </LayoutWrapper>
);

export default Layout;
