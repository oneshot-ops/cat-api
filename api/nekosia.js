export const config = {
  runtime: 'edge',
};
/**
 * Handler function for fetching a random catgirl image from the Nekosia API.
 * @param {Request} _request - The incoming HTTP request (unused).
 * @returns {Promise<Response>} The HTTP response containing the image or an error message.
 */
export default async function handler(_request) {
  const TARGET_URL = 'https://api.nekosia.cat/api/v1/images/catgirl';

  try {
    const response = await fetch(TARGET_URL);

    if (!response.ok) {
      return new Response(`Error: ${response.statusText}`, { status: response.status });
    }

    const data = await response.json();
    const imageUrl = data.image.original.url;

    // Fetch the image binary data
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();
    const contentType = imageResponse.headers.get('content-type') || 'application/octet-stream';

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

