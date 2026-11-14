export default async function handler(_request) {
    const api = {
        first_port: "URL_CAT",
        second_port: "URL_NEKOSIA",
        third_port: "URL_AUTRE"
    };

    return new Response(JSON.stringify(api), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}