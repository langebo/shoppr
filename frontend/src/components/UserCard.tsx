import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import { UserCard_user } from '../__generated__/UserCard_user.graphql';
import styled from 'styled-components';

export interface IUserCardProps {
  user: UserCard_user;
}

const UserCard: React.FC<IUserCardProps> = (props) => {
  const { user } = props;
  return (
    <Container key={user.id}>
      <Info>added by</Info>
      <Name>
        {user.firstName} {user.surname}
      </Name>
      <Email>{user.email}</Email>
    </Container>
  );
};

export default createFragmentContainer(UserCard, {
  user: graphql`
    fragment UserCard_user on User {
      id
      email
      firstName
      surname
    }
  `,
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 33vw;
`;

const Name = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

const Email = styled(Name)`
  font-weight: 300;
`;

const Info = styled.span`
  font-size: 0.8rem;
  font-style: italic;
  color: gray;
`;
