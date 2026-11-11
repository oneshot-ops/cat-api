export const config = {
  runtime: 'edge',
};
export default async function handler(request) {
  const TARGET_URL = 'api/cat.js';
  const TARGET_URL_NEKOSIA = 'api/nekosia.js';
  
    const response = await fetch(TARGET_URL);
    const reponseNekosia = await fetch(TARGET_URL_NEKOSIA);

    if (!response.ok && !reponseNekosia.ok) {
      return new Response(`Error: ${response.statusText}`, { status: response.status });
    }
    let api = JSON.parse(api/api.json);
    api.first_port = reponseNekosia;
    api.second_port = response;

    return new Response(api.json);
  }
}
