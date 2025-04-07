import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        // invoked on successful sign in
        async signIn({profile}){
            // 1. Connect to DB
            // 2. Check if user exists
            // 3. if not, create user
            // 4. return true to allow sign in
        },
        // session callback function that modifies the session object
        async session ({session}){
            // 1. Get user from DB
            // 2. Assign ID from session
            // 3. return session
        }
    }
}