export const config = {
    runtime: 'edge',
};



export default async function handler(_request) {
    const api = {
        first_port: "https://cat-api-blond.vercel.app/api/cat",
        second_port: "https://cat-api-blond.vercel.app/api/nekosia",
        third_port: "https://cat-api-blond.vercel.app/api/autre"
    };

    return new Response(JSON.stringify(api), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
