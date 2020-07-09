import * as React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import DemandCard from './DemandCard';
import ErrorCard from './ErrorCard';
import RelayEnvironment from '../relay/RelayEnvironment';
import LoadingIndicator from './LoadingIndicator';
import { DemandsListQuery } from '../__generated__/DemandsListQuery.graphql';

const query = graphql`
  query DemandsListQuery {
    demands {
      nodes {
        id
        createdAt
        ...DemandCard_demand
      }
    }
  }
`;

const DemandsList = () => {
  return (
    <QueryRenderer<DemandsListQuery>
      environment={RelayEnvironment}
      query={query}
      variables={{}}
      render={({ error, props }) => {
        if (error) return <ErrorCard {...error} />;
        if (!props) return <LoadingIndicator />;

        const demands = props.demands?.nodes ?? [];
        return demands.map(
          (demand) => demand && <DemandCard key={demand.id} demand={demand} />
        );
      }}
    />
  );
};

export default DemandsList;
