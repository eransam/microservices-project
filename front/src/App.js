import React, { useState, useEffect } from 'react';
import axios from 'axios';

//axios פה אנו יוצרים מופע של 
//היוצאת מהדפדפן api  זה בעצם בקשת  axios
const userApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

//axios פה אנו יוצרים מופע של 
//היוצאת מהדפדפן api  זה בעצם בקשת  axios
const orderApi = axios.create({
  baseURL: 'http://localhost:3001/api',
});

// יוצרים את הפונ הראשית
const App = () => {
  
  //שערכו משתנה במהלך הפונ' useState משתנים מסוג 
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(null);

  //  פונ שקוראת בעת טעינת הקומפוננטה useEffect
//  במידה והפרמטר הזה ריק הפקודות שבתוך פונ זו יקרו רק פעם אחת , []
// ובמידה ויש משתנים בתוך המערך הזה אז הרינדור הפקודות בפונ זו יהיו תלויות בשינויים של המשתנים
  useEffect(() => {
    fetchUser();
    fetchOrders();
  }, []);

//   
  const fetchUser = async () => {
    try {

      //users/1 כולל המשך היואראל  userApi- axiosלהביא מידע מהכתובת אשר נמצאת תחת מופע ה api מבצעים בקשת 
      const response = await userApi.get('/users/1');
    
      //setUser בעזרת  User את התשובה לבקשה אנו שמים כערך למשתנה
      setUser(response.data);
    
    } catch (error) {
      console.error(error);
    }
  }

  const fetchOrders = async () => {
    try {
        //כנ''ל
      const response = await orderApi.get('/orders/1');

        //כנ''ל
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  }

//  Loading... עד שהמשתנים האלה לא מקבלים ערך אנו נציג
  if (!user || !orders) return <div>Loading...</div>;

// api  כתוצאה אנו נציג כך את הנתונים שהבאנו מהבקשות
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>Orders:</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;