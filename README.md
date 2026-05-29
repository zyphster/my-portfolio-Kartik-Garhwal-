# Kartik Portfolio Website

This is my portfolio website for showcasing landing pages, websites, ad creatives and digital marketing work.

## Main Files

- `index.html` = Main portfolio homepage
- `style.css` = Main website styling
- `script.js` = Filter and search functionality
- `assets/images/` = Project preview images
- `landing-pages/` = Landing page demos
- `websites/` = Website demos

## How To Add New Landing Page

### Step 1

Create new folder:

landing-pages/design-2/

### Step 2

Add your landing page code here:

landing-pages/design-2/index.html

### Step 3

Add preview image:

assets/images/design-2-preview.jpg

### Step 4

Add this card inside main `index.html` projects section:

```html
<div class="card" data-category="landing" data-name="design 2 landing page">
  <span class="badge">Landing Page</span>
  <img src="assets/images/design-2-preview.jpg" alt="Landing Page Design 2">

  <h3>Landing Page Design 2</h3>
  <p>Premium landing page for business growth.</p>

  <div class="card-buttons">
    <a href="landing-pages/design-2/" target="_blank">View Live</a>
    <a href="https://wa.me/916353527607?text=Hi%20Kartik%2C%20mujhe%20aisa%20hi%20landing%20page%20banwana%20hai" target="_blank">
      Get Similar
    </a>
  </div>
</div>
