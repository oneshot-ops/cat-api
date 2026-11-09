export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  res.setHeader('content-type', 'image/png');


  if (password === validPassword) {
    return res.status(200).json({ 
      success: true, 
      message: 'Congratulations! You solved this challenge!' 
    });
  } else {
    return res.status(401).json({ 
      success: false, 
      error: 'Incorrect flag. Keep trying!' 
    });
  }
}
