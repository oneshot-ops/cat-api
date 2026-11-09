export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const TARGET_URL = 'https://cataas.com/cat/thug/';

  try {
    const response = await fetch(TARGET_URL);

    if (!response.ok) {
      return new Response(`Error: ${response.statusText}`, { status: response.status });
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
