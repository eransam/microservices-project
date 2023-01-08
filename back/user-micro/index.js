const express = require('express');

// בגלל שאנחנו משתמשים פה בכמה סרברים זה אומר שאנו נקבל בקשה מדומיין אחר
//שהיא בעצם מאשרת לסרבר שלנו cors מכיוון שהפרונט בפורט אחר אז אנו נקרא לפקודת ה
// לקבל בקשות מדומיין אחר
const cors = require('cors');

const app = express();

//cors כך אנו מפעילים את פקודת ה
app.use(cors());

// יוצרים קונטרולרים
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.send({ id, name: 'John Doe', email: 'john@example.com' });
});

// קובעים על איזה פורט להיות
app.listen(3000, () => {
  console.log('User service listening on port 3000');
});