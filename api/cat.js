export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const url = 'https://cataas.com/cat/thug'
  const reponse = await fetch(url);
  
  const contentType = response.headers.get('content-type');
  res.setHeader('Content-Type', contentType);

        // 3. Convert the response to an ArrayBuffer, then into a Node.js Buffer
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

        // 4. Send the raw binary data back to the client
  res.send(buffer);

}
