import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
	const client = await MongoClient.connect(
		'mongodb+srv://brenton:brenton>@cluster0.dakdy6k.mongodb.net/?retryWrites=true&w=majority'
	);

	return client;
}
