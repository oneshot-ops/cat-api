export const config = {
  runtime: 'edge',
};
export default async function handler() {

  try {
    const axios = require('axios');

    const fetchNekoImage = async () => {
       try {
          const res = await axios.get('https://api.nekosia.cat/api/v1/images/catgirl');
          const json = res.data;
      
          return json.image.original.url;
       } catch (err) {
          console.error(err.message);
       }
    };
    return new Response(fetchNekoImage, {
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



