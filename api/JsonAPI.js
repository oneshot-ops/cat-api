export const config = {
  runtime: 'edge',
};
export default async function handler(request) {
  const TARGET_URL = 'cat.js';
  const TARGET_URL_NEKOSIA = 'nekosia.js';

  try {
    const response = await fetch(TARGET_URL);
    const reponseNekosia = await fetch(TARGET_URL_NEKOSIA);

    if (!response.ok && !reponseNekosia.ok) {
      return new Response(`Error: ${response.statusText}`, { status: response.status });
    }
    let api = JSON.parse(api.json);
    api.first_port = reponseNekosia;
    api.second_port = response;

    return new Response(api.json);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
