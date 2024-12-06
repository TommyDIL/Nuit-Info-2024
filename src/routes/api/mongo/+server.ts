import {add_score_mongo, get_all_score_mongo,test_connection} from "$lib/mongo/mongo";

export async function GET() {
    // Test connection
    try {
        let connection = await test_connection();
        if (!connection) {
            return new Response( 'Error connecting to the database' , { status: 500 });
        }
    }
    catch (e) {
        return new Response( 'Error connecting to the database' , { status: 500 });
    }
    return new Response( 'Connection to the database successful' , { status: 200 });

}
