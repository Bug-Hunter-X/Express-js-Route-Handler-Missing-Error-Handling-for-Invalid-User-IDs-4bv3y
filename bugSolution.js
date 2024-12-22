const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // Validate user ID (e.g., check if it's a number, positive, etc.)
    if (isNaN(userId) || parseInt(userId) <= 0) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    // ... code to fetch user data using userId ...
    const user = await getUserData(userId); //Example Async operation
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

async function getUserData(id){
  //Simulate fetching user data from database
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if(id === '1'){
        resolve({userId: id, name: 'John Doe'})
      }else{
        resolve(null);
      }
    },500);
  })
}

app.listen(3000, () => console.log('Server listening on port 3000'));