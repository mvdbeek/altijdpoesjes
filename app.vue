<template>
  <div>
    <div class="overlay" :class="{ 'active': menuOpen }" @click="closeMenu"></div>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo-container">
            <img src="/images/logo.png" alt="altijdpoesjes Logo" class="logo">
          </div>
          <button class="menu-button" @click="toggleMenu" aria-label="Menu">
            <svg viewBox="0 0 100 80" width="30" height="30" fill="#ffffff">
              <rect width="100" height="12" rx="8"></rect>
              <rect y="30" width="100" height="12" rx="8"></rect>
              <rect y="60" width="100" height="12" rx="8"></rect>
            </svg>
            <span class="menu-text">Menu</span>
          </button>
          <nav :class="{ 'active': menuOpen }">
            <div class="close-button" @click="closeMenu">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <ul>
              <li><NuxtLink to="/" @click="closeMenu">Home</NuxtLink></li>
              <li><NuxtLink to="/products" @click="closeMenu">Products</NuxtLink></li>
              <li><NuxtLink to="/contact" @click="closeMenu">Contact</NuxtLink></li>
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

<script setup>
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  
  // Prevent scrolling when menu is open
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = '';
};
</script>

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

.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 20;
  padding: 8px 12px;
  border-radius: 4px;
  color: white;
  transition: background-color 0.3s;
}

.menu-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.menu-text {
  margin-left: 8px;
  font-weight: 500;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 5;
}

.overlay.active {
  visibility: visible;
  opacity: 1;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background-color: #0069B4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 20px;
  transition: right 0.3s ease;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

nav.active {
  right: 0;
}

nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav ul li {
  margin: 15px 0;
  width: 100%;
  text-align: center;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  padding: 10px;
  border-radius: 4px;
  display: block;
  font-size: 1.2rem;
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
</style>