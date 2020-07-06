import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { DemandCard_demand } from '../__generated__/DemandCard_demand.graphql';
import ProductCard from './ProductCard';
import UserCard from './UserCard';
import styled from 'styled-components';

export interface IDemandCardProps {
  demand: DemandCard_demand;
}

const DemandCard: React.FC<IDemandCardProps> = (props) => {
  const { demand } = props;

  const parsedCreatedAt = new Date(demand.createdAt as string);

  return (
    <Container key={demand.id}>
      {demand.product && <ProductCard product={demand.product} />}
      {demand.user && <UserCard user={demand.user} />}
      <DateWrapper>
        <Info>added at</Info>
        <DateText>{parsedCreatedAt.toLocaleDateString()}</DateText>
        <TimeText>{parsedCreatedAt.toLocaleTimeString()}</TimeText>
      </DateWrapper>
    </Container>
  );
};

export default createFragmentContainer(DemandCard, {
  demand: graphql`
    fragment DemandCard_demand on Demand {
      id
      createdAt
      user {
        ...UserCard_user
      }
      product {
        ...ProductCard_product
      }
    }
  `,
});

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 2rem;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 33vw;
`;

const Info = styled.span`
  font-size: 0.8rem;
  font-style: italic;
  color: gray;
`;

const DateText = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

const TimeText = styled(DateText)`
  font-weight: 300;
`;
