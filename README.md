# Theme Mode React 


#### summary: 
- step: 1, useContext এর  সাহায্য  ThemeContext.js ফাইলকে  ready করা। 

- step: 2, ThemeContext কে  index.js এ  গিয়ে <ThemeContext></ThemeContext> দ্বারা  <App /> কে  wrap করা।   

- step: 3, App.js এ  গিয়ে, ThemeContext ফাইল এর  মধ্যে  থেকে, ChooseContext কে  নিয়ে  আসা, সেখান  থেকে {theme, setTheme} কে ব্যবহার  করা।  

- step: 4, Home.js এ  গিয়ে, ChooseContext কে নিয়ে  এসে , সেখান  থেকে  theme কে নিয়ে  আসা, এবং  সেখানে , প্রথম div এর ভিতরে, data-theme={theme} সেট কর।  

- step: 5, index.css এ গিয়ে, root ফাইল এর মধ্যে  color/theme এর  css গুলা লিখা। সেখানে  [data-theme="dark"] এর  জন্য  css গুলা লিখা।   
