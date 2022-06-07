import React from 'react';

import { Container, Content } from './styles';

interface DashboardProps {
  Component?: React.ComponentType;
}

const Dashboard: React.FC<DashboardProps> = ({ Component }) => {
  return (
    <Container>
      <Content>
        <Component />
      </Content>
    </Container>
  );
};

export default Dashboard;
