export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const url = 'https://cataas.com/cat/thug'
  const reponse = await fetch(url);
  
  res.setHeader('content-type', 'image/png');

}
