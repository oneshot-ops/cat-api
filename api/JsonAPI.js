export const config = {
  runtime: 'edge',
};
export default async function handler(_request) {
  const TARGET_URL = './api/cat.js';
  const TARGET_URL_NEKOSIA = './nekosia.js';
  const JsonFile = './api.json';
  
    const response = await fetch(TARGET_URL);
    const reponseNekosia = await fetch(TARGET_URL_NEKOSIA);

    if (!response.ok && !reponseNekosia.ok) {
      return new Response(`Error: ${response.statusText}`, { status: response.status });
    }
    let api = JSON.parse(JsonFile);
    api.first_port = reponseNekosia;
    api.second_port = response;

    return new Response(JSON.stringify(api), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  }
