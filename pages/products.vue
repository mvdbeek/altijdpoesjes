<template>
  <div class="products-page">
    <h1>Our Products</h1>
    <p class="intro">Browse through our collection of handmade items. Each piece is crafted with care and attention to detail.</p>
    
    <div class="filter-controls">
      <button class="filter-btn active">All Products</button>
      <button class="filter-btn">Plushies</button>
      <button class="filter-btn">Artwork</button>
      <button class="filter-btn">Jewelry</button>
    </div>
    
    <div class="products-grid">
      <!-- Product 1 -->
      <div class="product-card">
        <div class="product-image" style="background-color: #ffcdd2;"></div>
        <div class="product-details">
          <h2>Handmade Cat Plushie</h2>
          <p class="price">€35.00</p>
          <p class="description">Soft and cuddly handmade plushie, perfect as a gift or home decor item. Made with high-quality materials.</p>
          <button class="btn">View Details</button>
        </div>
      </div>
      
      <!-- Product 2 -->
      <div class="product-card">
        <div class="product-image" style="background-color: #e1bee7;"></div>
        <div class="product-details">
          <h2>Custom Cat Portrait</h2>
          <p class="price">€75.00</p>
          <p class="description">A beautiful custom portrait of your beloved pet. Available in multiple styles and sizes.</p>
          <button class="btn">View Details</button>
        </div>
      </div>
      
      <!-- Product 3 -->
      <div class="product-card">
        <div class="product-image" style="background-color: #d1c4e9;"></div>
        <div class="product-details">
          <h2>Cat Earrings</h2>
          <p class="price">€22.00</p>
          <p class="description">Elegant cat-shaped earrings handcrafted with attention to detail. Makes a perfect gift.</p>
          <button class="btn">View Details</button>
        </div>
      </div>
      
      <!-- Product 4 -->
      <div class="product-card">
        <div class="product-image" style="background-color: #c5cae9;"></div>
        <div class="product-details">
          <h2>Cat Embroidery</h2>
          <p class="price">€45.00</p>
          <p class="description">Hand-embroidered cat design on quality fabric, ready to be framed and displayed in your home.</p>
          <button class="btn">View Details</button>
        </div>
      </div>
      
      <!-- Product 5 -->
      <div class="product-card">
        <div class="product-image" style="background-color: #bbdefb;"></div>
        <div class="product-details">
          <h2>Cat-themed Notebook</h2>
          <p class="price">€18.00</p>
          <p class="description">Handbound notebook with cat-themed cover design. Features quality paper suitable for various mediums.</p>
          <button class="btn">View Details</button>
        </div>
      </div>
      
      <!-- Product 6 -->
      <div class="product-card">
        <div class="product-image" style="background-color: #b3e5fc;"></div>
        <div class="product-details">
          <h2>Cat Keychain</h2>
          <p class="price">€12.00</p>
          <p class="description">Adorable cat-shaped keychain made from quality materials. Each one is uniquely handcrafted.</p>
          <button class="btn">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-page {
  padding: 20px 0;
}

h1 {
  text-align: center;
  color: #d81b60;
  margin-bottom: 10px;
}

.intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  color: #555;
}

.filter-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-btn {
  background-color: transparent;
  border: 1px solid #d81b60;
  color: #d81b60;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover, .filter-btn.active {
  background-color: #d81b60;
  color: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
  border: 1px solid #f1a7bc;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 220px;
  background-color: #f8bbd0;
}

.product-details {
  padding: 20px;
}

.product-details h2 {
  color: #d81b60;
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.price {
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.description {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.btn {
  background-color: #d81b60;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #ad1457;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>