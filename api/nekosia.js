export const config = {
  runtime: 'edge',
};
export default async function handler(request) {
  const TARGET_URL = 'https://api.nekosia.cat/api/v1/images/catgirl';

  try {
    const response = await fetch(TARGET_URL);

    if (!response.ok) {
      return new Response(`Error: ${response.statusText}`, { status: response.status });
    }

    const imageBuffer = await JSON.parse(response)arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store',
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
