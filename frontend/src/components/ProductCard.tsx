import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import { ProductCard_product } from '../__generated__/ProductCard_product.graphql';
import styled from 'styled-components';

export interface IProductCardProps {
  product: ProductCard_product;
}

const ProductCard: React.FC<IProductCardProps> = (props) => {
  const { product } = props;
  return (
    <Container key={product.id}>
      <Info>product</Info>
      <Title>{product.title}</Title>
    </Container>
  );
};

export default createFragmentContainer(ProductCard, {
  product: graphql`
    fragment ProductCard_product on Product {
      id
      title
    }
  `,
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

const Info = styled.span`
  font-size: 0.8rem;
  font-style: italic;
  color: gray;
`;
