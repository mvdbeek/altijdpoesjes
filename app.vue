<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo-container">
            <img src="/images/logo.png" alt="altijdpoesjes Logo" class="logo">
          </div>
          <nav>
            <ul>
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/products">Products</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="container">
      <NuxtPage />
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 altijdpoesjes. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8e0e7; /* Light pink background based on logo */
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  background-color: #0069B4; /* Blue from screenshot (approximated) */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin-bottom: 30px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.logo {
  max-height: 90px;
  width: auto;
}

nav {
  display: flex;
  align-items: center;
  padding-right: 10px;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin: 0 15px;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 5px 10px;
  border-radius: 4px;
}

nav a:hover, 
nav a.router-link-active,
nav a.router-link-exact-active {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
}

main {
  min-height: 70vh;
  padding: 20px 0;
}

.footer {
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.07);
  padding: 20px 0;
  margin-top: 30px;
  text-align: center;
  color: #777;
  border-top: 3px solid #f1a7bc; /* Add a subtle pink border to the footer */
}

/* Responsive styles */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 5px;
    padding: 15px 0;
  }
  
  .logo-container {
    margin-bottom: 10px;
  }
  
  .logo {
    max-height: 80px;
  }
  
  nav {
    width: 100%;
    padding-bottom: 10px;
  }
  
  nav ul {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  
  nav ul li {
    margin: 5px 10px;
  }
}
</style>