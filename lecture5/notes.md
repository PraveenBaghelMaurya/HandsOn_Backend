# 📌 **Sessions, Cookies & Blob - Simple Explanation**  

## 🍪 **Cookies**  
✅ **Cookies ek chhoti file hoti hai** jo **browser** me store hoti hai. Yeh **user ko remember** karne ke liye use hoti hai.  
✅ Websites cookies ka use karti hain **login session, preferences, aur tracking** ke liye.  

### 🔹 **Example:**  
Jab tum **Amazon pe login** karte ho aur **browser band karke dubara open** karte ho, tab bhi login rehte ho. Yeh **cookies ki wajah se hota hai!**  

### 🛠 **Cookies Set Karna (JavaScript)**  
```js
document.cookie = "username=Praveen; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
```

### ⛔ **Cookies ke Issues**  
❌ User **cookies delete** kar sakta hai  
❌ Storage **limit (4KB) hoti hai**  
❌ **Security risk** hota hai (cross-site scripting attacks)  

---

## 🔑 **Session**  
✅ **Session ek temporary storage hoti hai** jo **server** pe store hoti hai. Jab user **login karta hai**, toh ek **unique session ID generate hoti hai** jo browser ke **cookies me store hoti hai**.  
✅ Jab tak **session active hai, tab tak user logged-in rehta hai**.  

### 🔹 **Example:**  
Jab tum **banking website** pe login karte ho aur **10 min tak idle rehte ho**, toh session **expire ho jata hai aur dubara login karna padta hai**. Yeh **security ke liye hota hai**.  

### 🛠 **Session Set Karna (Express.js Example)**  
```js
const session = require('express-session');

app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));
```

### ⚡ **Session vs Cookies**  
| Feature  | Cookies 🍪  | Session 🔑  |
|----------|------------|-------------|
| **Storage** | Browser (Client-side) | Server (Server-side) |
| **Size** | Small (4KB) | Large |
| **Security** | Less secure | More secure |
| **Expiry** | Defined by developer | Expires after logout or timeout |

---

## 🟢 **Blob (Binary Large Object)**  
✅ **Blob ek JavaScript object hai** jo **badi files (images, videos, PDFs, audio, etc.) ko handle karne ke liye use hota hai**.  
✅ Yeh files **download, upload, preview aur modify** karne ke liye kaam aata hai.  

### 🔹 **Example:**  
Tumne dekha hoga jab **WhatsApp pe ek image upload hoti hai toh preview dikhta hai**, yeh Blob ka use hai!  

### 🛠 **Blob Create Karna (JavaScript)**  
```js
let text = "Hello, this is a Blob!";
let blob = new Blob([text], { type: "text/plain" });

console.log(blob);
```

### 📸 **Blob Se Image Kaise Banaye?**
```js
let imgUrl = URL.createObjectURL(blob);
let img = document.createElement("img");
img.src = imgUrl;
document.body.appendChild(img);
```

### ⚡ **Blob vs File**
| Feature | Blob 🟢 | File 📂 |
|---------|--------|--------|
| **Kya hai?** | Raw binary data | Ek special Blob jo file system se aata hai |
| **Data Source** | JavaScript me create hota hai | User ka file system (input type="file") |
| **Use Case** | API requests, large data handling | User-uploaded files |

---



Agar aur easy explanation chahiye, toh batao! 🚀😃