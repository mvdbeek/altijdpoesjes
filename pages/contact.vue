<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p class="intro">Have questions about our products or interested in a custom order? Get in touch with us!</p>
    
    <div class="contact-container">
      <div class="contact-info">
        <h2>Contact Information</h2>
        <div class="info-item">
          <span class="icon">✉️</span>
          <p>info@altijdpoesjes.com</p>
        </div>
        <div class="info-item">
          <span class="icon">📱</span>
          <p>+31 6 12345678</p>
        </div>
        <div class="info-item">
          <span class="icon">📍</span>
          <p>Amsterdam, The Netherlands</p>
        </div>
        
        <div class="social-media">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="#" class="social-icon">Instagram</a>
            <a href="#" class="social-icon">Facebook</a>
            <a href="#" class="social-icon">Etsy</a>
          </div>
        </div>
      </div>
      
      <div class="contact-form">
        <h2>Send a Message</h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your name">
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Your email address">
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject of your message">
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message"></textarea>
          </div>
          
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </div>
    
    <div class="faq-section">
      <h2>Frequently Asked Questions</h2>
      
      <div class="faq-item">
        <h3>Do you ship internationally?</h3>
        <p>Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.</p>
      </div>
      
      <div class="faq-item">
        <h3>Can I request a custom design?</h3>
        <p>Absolutely! We love creating custom pieces. Please contact us with your ideas and requirements.</p>
      </div>
      
      <div class="faq-item">
        <h3>What payment methods do you accept?</h3>
        <p>We accept credit/debit cards, PayPal, and bank transfers for international orders.</p>
      </div>
      
      <div class="faq-item">
        <h3>How long does shipping take?</h3>
        <p>Domestic orders typically take 2-5 business days. International orders can take 1-3 weeks depending on the destination.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
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

.contact-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
}

@media (min-width: 768px) {
  .contact-container {
    flex-direction: row;
  }
  
  .contact-info,
  .contact-form {
    flex: 1;
  }
}

h2 {
  color: #d81b60;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.contact-info {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #f1a7bc;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.icon {
  font-size: 1.5rem;
  margin-right: 15px;
  color: #d81b60;
}

.social-media {
  margin-top: 30px;
}

.social-media h3 {
  color: #d81b60;
  margin-bottom: 15px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  color: #d81b60;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #ad1457;
}

.contact-form {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1a7bc;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

textarea {
  resize: vertical;
}

.btn {
  background-color: #d81b60;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
}

.btn:hover {
  background-color: #ad1457;
}

.faq-section {
  margin-top: 60px;
}

.faq-section h2 {
  text-align: center;
  margin-bottom: 30px;
}

.faq-item {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1a7bc;
  margin-bottom: 20px;
}

.faq-item h3 {
  color: #d81b60;
  margin-bottom: 10px;
}

.faq-item p {
  color: #555;
  line-height: 1.6;
}
</style>