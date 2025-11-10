// -------- Registration --------
const registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();

    if (user && pass) {
      localStorage.setItem("stylemateUser", user);
      localStorage.setItem("stylematePass", pass);
      alert("✅ Registration successful! Please login.");
      window.location.href = "login.html";
    } else {
      alert("⚠️ Please enter username and password.");
    }
  });
}

// -------- Login --------
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();
    const storedUser = localStorage.getItem("stylemateUser");
    const storedPass = localStorage.getItem("stylematePass");

    if (user === storedUser && pass === storedPass) {
      localStorage.setItem("currentUser", user);
      window.location.href = "chatbot.html";
    } else {
      alert("❌ Invalid credentials. Try again!");
    }
  });
}
// -------- Logout --------
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });
}

// -------- Chatbot --------
const app = document.getElementById("app");
if (app) {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    app.classList.remove("hidden");
  } else {
    window.location.href = "login.html"; // force login
  }
}

const questions = {
  // Skincare
  "best skincare routine":
    "🌸 Cleanser → Toner → Serum → Moisturizer → Sunscreen. Keep it simple & consistent!",
  "tips for glowing skin":
    "💧 Hydrate well, eat fresh fruits & veggies, and use Vitamin C serum daily!",
  "how to reduce pimples":
    "🧴 Wash your face twice daily, avoid oily food, and use salicylic acid-based products.",
  "oily skin care routine":
    "✨ Use a gentle foaming cleanser, oil-free moisturizer, and always use matte sunscreen.",
  "dry skin care routine":
    "💦 Use hydrating cleansers, hyaluronic acid serum, thick moisturizer & SPF 30+.",
  "best sunscreen for oily skin":
    "☀️ Gel-based, non-comedogenic sunscreen with at least SPF 50 is perfect.",
  "best sunscreen for dry skin":
    "🌞 Use cream-based SPF 30+ with moisturizing ingredients like ceramides.",
  "best moisturizer for dry skin":
    "🧴 Choose thick creams with hyaluronic acid, glycerin, or shea butter.",
  "best moisturizer for oily skin":
    "💧 Lightweight, oil-free, gel-based moisturizer works best.",
  "face pack for glowing skin":
    "🍯 Mix honey + lemon + turmeric, apply for 15 mins, and rinse for instant glow.",
  "dark circles remedy":
    "👀 Use under-eye cream with caffeine, sleep well, and apply cold compresses.",
  "lip care tips":
    "💋 Exfoliate lips weekly with sugar scrub & apply lip balm with SPF daily.",
  "anti-aging skincare":
    "⏳ Use retinol serum, sunscreen daily, and include antioxidants in your diet.",
  "best night cream":
    "🌙 Choose one with retinol, hyaluronic acid, or peptides for overnight repair.",
  "acne scars treatment":
    "✨ Use niacinamide, vitamin C serum, and sunscreen daily to fade marks.",

  // Haircare
  "hair care tips":
    "🪮 Oil once a week, use sulfate-free shampoo, and trim split ends regularly.",
  "how to reduce dandruff":
    "❄️ Use anti-dandruff shampoo with zinc pyrithione or ketoconazole twice a week.",
  "hair fall solution":
    "🌿 Apply onion juice, eat protein-rich diet, and massage scalp with oil.",
  "best shampoo for dry hair":
    "💧 Moisturizing shampoos with argan oil, coconut milk, or keratin work well.",
  "best shampoo for oily hair":
    "🍋 Use clarifying shampoos with lemon, tea tree, or charcoal ingredients.",

  // Fashion & Outfits
  "summer fashion trends":
    "👗 Flowy dresses, pastel shades, linen shirts, and oversized sunglasses are trending!",
  "winter fashion ideas":
    "🧥 Layer with coats, boots, mufflers, and warm neutral colors like beige & grey.",
  "monsoon fashion tips":
    "🌧️ Wear quick-dry fabrics, avoid denim, and carry colorful umbrellas & crocs.",
  "office wear ideas":
    "👔 Formal trousers, pastel shirts, pencil skirts, or blazers always look classy!",
  "casual college outfits":
    "👕 Graphic tees, denim jackets, sneakers, and joggers are perfect!",
  "best dress for party":
    "✨ Bodycon, sequined mini-dress, or elegant maxi dress depending on the vibe.",
  "traditional wear ideas":
    "👘 Sarees, lehengas, kurta sets, or Anarkali suits always look graceful.",
  "bridal outfit ideas":
    "💍 Heavy embroidered lehengas, red sarees, or pastel gowns are perfect.",
  "best shoes for casual look":
    "👟 White sneakers, loafers, or slip-ons go with almost anything!",
  "best shoes for party":
    "👠 Heels, wedges, or embellished sandals look stylish.",
  "denim outfit ideas":
    "👖 Pair ripped jeans with crop tops, denim jackets, or oversized shirts.",
  "formal wear for men":
    "🤵 Blazers, suits, white shirts, and leather shoes never go out of style.",
  "casual wear for men":
    "👕 Polo tees, chinos, cargo pants, and sneakers look trendy.",
  "date night outfits":
    "💞 For women: bodycon dresses, heels. For men: shirts with blazers & jeans.",
  "airport look ideas":
    "🧳 Joggers, hoodies, sneakers, and oversized sunglasses are best for travel.",
  "best outfits for interview":
    "🕴️ Women: formal shirt + trousers/skirt. Men: blazer, tie, and formal shoes.",
  "festival outfit ideas":
    "🎉 Bright-colored kurta, saree, lehenga, or Indo-western fusion dresses.",

  // Health & Wellness
  "tips for healthy skin":
    "🥗 Eat leafy greens, drink water, exercise regularly, and sleep 7–8 hours daily.",
  "tips for weight loss":
    "⚡ Eat high-protein meals, avoid sugary drinks, and walk 30 mins daily.",
  "tips for weight gain":
    "🍲 Add nuts, milkshakes, potatoes, bananas, and strength training to your routine.",
  "healthy breakfast ideas":
    "🥣 Oats, eggs, smoothies, fruit salad, or avocado toast.",
  "foods for glowing skin":
    "🍓 Berries, carrots, avocados, nuts, and lots of water.",
  "foods to avoid for acne":
    "🚫 Avoid dairy, fried food, sugar, and excessive caffeine.",
  "morning skincare routine":
    "🌞 Cleanser → Moisturizer → Sunscreen. Keep it minimal before stepping out.",
  "night skincare routine":
    "🌙 Cleanser → Toner → Serum → Moisturizer. Use retinol if needed.",
  "self care tips":
    "🧘‍♀️ Meditate, sleep well, read books, and take breaks from social media.",
  "daily health tips":
    "🍎 Drink 2–3L water, eat veggies, walk 10k steps, and avoid junk food.",

  // Fashion Accessories
  "accessories for girls":
    "👒 Hoop earrings, layered chains, stylish handbags, sunglasses & watches.",
  "accessories for men":
    "⌚ Watches, belts, sunglasses, caps, and bracelets look stylish.",
  "trendy bags for girls":
    "👜 Tote bags, mini backpacks, sling bags, and clutches.",
  "sunglasses trends":
    "😎 Oversized frames, cat-eye shades, aviators, and round glasses.",

  // Makeup & Beauty
  "bridal makeup tips":
    "💄 Go for waterproof products, set with setting spray, and highlight the cheekbones!",
  "daily makeup routine":
    "✨ Moisturizer → Sunscreen → BB cream → Kajal → Lip balm for a natural look.",
  "party makeup look":
    "🌟 Smokey eyes, bold red lips, and highlighted cheekbones stand out!",
  "minimal makeup look":
    "😊 Use tinted moisturizer, mascara, blush, and nude lipstick.",
  "summer makeup tips":
    "🌞 Use waterproof foundation, matte products, and minimal layering.",
  "winter makeup tips":
    "❄️ Use dewy foundation, creamy blush, and hydrating lipsticks.",
  "best foundation for oily skin":
    "💧 Oil-free, matte finish foundations are best.",
  "best foundation for dry skin":
    "🌸 Dewy, hydrating liquid foundations work well.",
};
function handleUserMessage(text) {
  appendMessage(text, "user");

  // show typing animation before reply
  const typingEl = showTyping();

  setTimeout(() => {
    let response = findResponse(text);
    messages.removeChild(typingEl); // remove typing
    appendMessage(response, "bot");
  }, 1200); // small delay for realism
}
// -------- Clear Chat --------
const clearBtn = document.getElementById("clearBtn");
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    messages.innerHTML = ""; // remove all chat messages
    appendMessage("Chat cleared 🧹 Start a new conversation!", "bot");
  });
}

const suggList = document.getElementById("suggList");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const searchInput = document.getElementById("searchInput");

if (suggList) {
  for (let q in questions) {
    let btn = document.createElement("button");
    btn.className = "btn-sugg";
    btn.textContent = q;
    btn.onclick = () => handleUserMessage(q);
    suggList.appendChild(btn);
  }
}

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (text) {
      handleUserMessage(text);
      userInput.value = "";
    }
  });
}

function handleUserMessage(text) {
  appendMessage(text, "user");
  setTimeout(() => {
    let response = findResponse(text);
    appendMessage(response, "bot");
  }, 600);
}

function findResponse(text) {
  text = text.toLowerCase();
  for (let q in questions) {
    if (text.includes(q)) return questions[q];
  }
  return "🤔 Sorry, I don’t have a direct answer. Try another fashion or skincare question!";
}

function appendMessage(msg, sender) {
  const div = document.createElement("div");
  div.className = `msg ${sender}`;
  div.innerHTML = `<div class="meta">${
    sender === "user" ? localStorage.getItem("currentUser") : "StyleMate"
  }</div>${msg}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// Suggestion search filter
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const val = searchInput.value.toLowerCase();
    Array.from(suggList.children).forEach((btn) => {
      btn.style.display = btn.textContent.toLowerCase().includes(val)
        ? "block"
        : "none";
    });
  });
}
