<template>
  <div class="home-page">
    <section class="hero">
      <h1>Welcome to altijdpoesjes</h1>
      <p>Handcrafted art with passion and love</p>
    </section>
    
    <section class="about">
      <h2>About the Artist</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            altijdpoesjes was founded by a passionate artist who loves creating unique handmade items.
            With years of experience in various art forms, each piece is created with attention to detail
            and a touch of whimsy.
          </p>
          <p>
            The artist draws inspiration from nature, animals (especially cats!), and everyday life to create
            pieces that bring joy and character to your home or as gifts for loved ones.
          </p>
        </div>
      </div>
    </section>

    <section class="featured">
      <h2>Featured Products</h2>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-image"></div>
          <h3>Handmade Cat Plushie</h3>
          <p>Adorable soft plushie made with love</p>
          <NuxtLink to="/products" class="btn">View Details</NuxtLink>
        </div>
        <div class="product-card">
          <div class="product-image"></div>
          <h3>Cat Portrait</h3>
          <p>Custom pet portraits in various styles</p>
          <NuxtLink to="/products" class="btn">View Details</NuxtLink>
        </div>
        <div class="product-card">
          <div class="product-image"></div>
          <h3>Cat-themed Jewelry</h3>
          <p>Unique handcrafted accessories</p>
          <NuxtLink to="/products" class="btn">View Details</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  padding: 20px 0;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1a7bc;
}

.hero h1 {
  font-size: 2.5rem;
  color: #d81b60;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.hero p {
  font-size: 1.2rem;
  color: #555;
}

.about, .featured {
  margin-bottom: 60px;
}

h2 {
  text-align: center;
  color: #d81b60;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #f8bbd0;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
  }
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 20px;
  line-height: 1.8;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #f1a7bc;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  background-color: #f8bbd0;
}

.product-card h3 {
  padding: 15px 15px 5px;
  color: #d81b60;
}

.product-card p {
  padding: 0 15px 15px;
  color: #777;
}

.btn {
  display: inline-block;
  background-color: #d81b60;
  color: white;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 4px;
  margin: 0 15px 15px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #ad1457;
}
</style>