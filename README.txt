COOKIE WOOKIE — WEBSITE DEMO
=============================

This is a plain, self-hosted static website (HTML + CSS + JS) — no builder,
no subscription, no CMS needed. Just upload these files to any hosting/domain
and it works.

WHAT'S INSIDE
-------------
index.html      Home
menu.html       Menu (cookies / mini cakes / cupcakes / gift boxes)
about.html      About / Our Story
gallery.html    Photo gallery with lightbox
contact.html    Contact info + enquiry form + FAQ
css/style.css   All styling (colours, fonts, layout, animations)
js/script.js    All interactivity (mobile menu, gallery, filters, FAQ, etc.)
assets/         Every image used on the site — ONE single folder, as requested

Open index.html by double-clicking it — it runs straight from your files,
no server required, and the same files can be uploaded as-is to any host.

HOW TO REMOVE THE "FREE DEMO" BANNER
-------------------------------------
Each page has a clearly marked block near the top of the <body>:

  <!-- DEMO BANNER — remove this whole block before going live -->
  <div class="demo-banner"> ... </div>
  <!-- END DEMO BANNER -->

Delete that block from all 5 .html files and the banner is gone — nothing
else needs to change. (Optional: you can also delete the ".demo-banner"
CSS rules in style.css and the small "DEMO BANNER close" section in
script.js, but leaving them in does nothing once the HTML block is removed.)

HOW TO ADD YOUR PHOTOS
------------------------
Every image slot in assets/photos/ is currently just empty space (a plain
fill with a thin gold outline) — there was no way for me to pull real
photos from Instagram (it blocks that), so I left them blank rather than
faking a design. Drop your own photos into assets/photos/ using the EXACT
SAME FILE NAMES listed in IMAGE-GUIDE.txt (e.g. save your cookie photo as
assets/photos/cookie-classic-choc-chunk.jpg, overwriting the empty one) —
every page updates automatically, since there's only the one assets folder
to manage. See IMAGE-GUIDE.txt for the full list of file names, what each
one is for, and the recommended size.

Recommended photo sizes: hero images ~1800x650–1150px, product/gallery
photos square (800x800px or larger), about-founder.jpg portrait-ish.

WHAT TO UPDATE BEFORE GOING LIVE
----------------------------------
- Email address: currently a placeholder, hello@cookiewookie.in — search
  and replace it in all 5 .html files with the real inbox.
- Exact studio/delivery address in contact.html if you want to show one
  (currently just says "Jaipur, Rajasthan" with address shared after
  order confirmation, which is a common approach for home bakeries).
- WhatsApp number is already wired to +91 98299 00044 across every
  "Order Now" / WhatsApp button and the floating WhatsApp icon.
- Instagram is already linked to instagram.com/cookiewookiejpr everywhere.
- Menu items, prices and flavours are realistic placeholders — swap in the
  real menu and pricing.
- The contact form is front-end only (no backend) — it shows a "thank you"
  message but doesn't actually send anywhere yet. Wire it up to a form
  service (e.g. Formspree, Google Forms) or a backend once you're live.

FEATURES INCLUDED
------------------
- 5 real pages (not a single-page site), shared nav + footer
- Mobile-first responsive design with a slide-in mobile menu
- Sticky header, back-to-top button, floating WhatsApp button
- Scroll-reveal animations, testimonial slider, Instagram teaser grid
- Menu filter tabs (All / Cookies / Mini Cakes / Cupcakes / Gift Boxes)
- Gallery with click-to-enlarge lightbox
- FAQ accordion, enquiry form, custom-cake callout section
- One shared assets/ folder for every image on the site
