import { GET_STATE_VALUE } from './queries';

export const resolvers = {
	Mutation: {
			updateState: (_: any, { state }: { state: string }, { cache }: any): string => {
			const data = {
				state: state
			};
			cache.writeQuery({ query: GET_STATE_VALUE, data });
			return state;
		},
	}
};

export default resolvers;
