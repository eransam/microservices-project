const express = require('express');

// בגלל שאנחנו משתמשים פה בכמה סרברים זה אומר שאנו נקבל בקשה מדומיין אחר
//שהיא בעצם מאשרת לסרבר שלנו cors מכיוון שהפרונט בפורט אחר אז אנו נקרא לפקודת ה
// לקבל בקשות מדומיין אחר
const cors = require('cors');

const app = express();

//cors כך אנו מפעילים את ה
app.use(cors());

// יוצרים רונטרולרים
app.get('/api/orders/:userId', (req, res) => {
  const { userId } = req.params;
  res.send([
    { id: 1, userId, amount: 100 },
    { id: 2, userId, amount: 200 },
  ]);
});

// קובעים על איזה פורט להיות
app.listen(3001, () => {
  console.log('Order service listening on port 3001');
});