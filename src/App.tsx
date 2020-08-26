import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

import React, { useState } from 'react';
import Form from './core/components/Form';
import Header from './core/components/Header';
import resolvers from './core/graphql/resolvers';
import typeDefs from './core/graphql/schema';

const initialValue: string = 'default value'
const cache = new InMemoryCache();
const httpLink = createHttpLink({
	uri: ''
});

const client: ApolloClient<any> = new ApolloClient({
	link: httpLink,
	cache,
	typeDefs,
	resolvers
});

cache.writeData({
	data: {
		state: ''
	}
});

function App() {
	const [defaultInput, setDefaultInput] = useState(initialValue);
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Header appName={'GraphQL InMemoryCache'}/>
				<Form defaultInput={defaultInput}
							setDefaultInput={setDefaultInput}/>
			</div>
		</ApolloProvider>
	);
}

export default App;
