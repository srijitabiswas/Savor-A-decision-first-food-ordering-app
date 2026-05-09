import { allDishesForCrave } from '../data/extendedMockData';
import { dishes as mainDishes, getRestaurantById } from '../data/mockData';

// Combine both datasets
const ALL_DISHES = [...allDishesForCrave, ...mainDishes];

// ── Keyword mappings ────────────────────────────────────────────────
const KEYWORD_MAPS = {
  spicy: ['spicy', 'spice', 'hot', 'chilli', 'chili', 'peri peri', 'schezwan', 'zinger', 'fiery', 'masala', 'jalapeño', 'jhol'],
  mild: ['mild', 'not spicy', 'less spicy', 'not too spicy', 'gentle', 'no spice'],
  healthy: ['healthy', 'health', 'diet', 'light', 'nutritious', 'fit', 'gym', 'salad', 'low calorie', 'clean', 'fresh', 'nutritional'],
  protein: ['protein', 'high protein', 'gym', 'workout', 'muscle', 'bodybuilding', 'egg', 'chicken', 'paneer', 'quinoa', 'boiled egg'],
  comfort: ['comfort', 'soul', 'cozy', 'warm', 'home', 'homestyle', 'maa ke haath', 'feel good', 'nostalgic', 'rainy', 'monsoon', 'cold'],
  cheesy: ['cheese', 'cheesy', 'cheezy', 'mozzarella', 'loaded', 'burst', 'melted', 'gooey'],
  filling: ['filling', 'heavy', 'full', 'hungry', 'starving', 'big', 'generous', 'large', 'feast'],
  light: ['light', 'snack', 'small', 'less', 'little', 'not heavy', 'digestive', 'easy'],
  snack: ['snack', 'munchies', 'nibble', 'quick bite', 'something small', 'tea time', 'evening'],
  lateNight: ['late night', 'midnight', 'night', '12am', '1am', '2am', 'late', 'night cravings', 'insomnia'],
  sweet: ['sweet', 'dessert', 'sugar', 'mithai', 'chocolate', 'ice cream', 'cake', 'candy', 'syrup'],
  quick: ['quick', 'fast', 'urgent', 'hurry', 'in a hurry', '15 min', '10 min', 'instant', 'asap'],
  budget: ['cheap', 'budget', 'affordable', 'less money', 'student', 'broke', 'tight budget', 'value', 'low cost', 'rs 50', 'rs 100', '₹50', '₹100', 'economical'],
  biryani: ['biryani', 'biriyani', 'dum', 'rice dish', 'pulao'],
  momo: ['momo', 'momos', 'dumpling', 'dim sum', 'jhol momo', 'steamed'],
  burger: ['burger', 'patty', 'bun', 'smash'],
  pizza: ['pizza', 'margherita', 'pepperoni', 'slice'],
  pasta: ['pasta', 'noodles pasta', 'spaghetti', 'penne', 'fettuccine', 'macaroni', 'mac'],
  noodles: ['noodles', 'hakka', 'chow mein', 'ramen', 'maggi'],
  dosa: ['dosa', 'idli', 'uttapam', 'south indian', 'crispy crepe'],
  roll: ['roll', 'kathi', 'frankie', 'wrap'],
  kebab: ['kebab', 'tikka', 'seekh', 'grill', 'tandoor', 'bbq'],
  chinese: ['chinese', 'indo chinese', 'manchurian', 'schezwan', 'fried rice'],
  streetFood: ['street food', 'chaat', 'pani puri', 'bhel', 'vada pav', 'pav bhaji'],
};

// ── Extract budget from text ────────────────────────────────────────
function extractBudget(text) {
  const t = text.toLowerCase();
  // Patterns: "under 200", "₹150", "rs 300", "less than 500", "below 400", "budget is 200"
  const patterns = [
    /(?:under|below|less than|within|₹|rs\.?\s*)(\d+)/i,
    /(\d+)\s*(?:rs|rupees|₹)/i,
    /budget\s*(?:is|of|around)?\s*(?:₹|rs\.?\s*)?(\d+)/i,
    /(?:max|maximum|upto|up to)\s*(?:₹|rs\.?\s*)?(\d+)/i,
  ];
  for (const pat of patterns) {
    const match = t.match(pat);
    if (match) return parseInt(match[1]);
  }
  return null;
}

// ── Detect keywords ─────────────────────────────────────────────────
function detectKeywords(text) {
  const t = text.toLowerCase();
  const detected = new Set();

  for (const [key, words] of Object.entries(KEYWORD_MAPS)) {
    if (words.some((w) => t.includes(w))) {
      detected.add(key);
    }
  }
  return detected;
}

// ── Score a dish against the query ─────────────────────────────────
function scoreDish(dish, detectedKeywords, budget, rawText) {
  let score = 0;
  const t = rawText.toLowerCase();
  const dishKeywords = dish.keywords || [];

  // Budget filter (hard cutoff)
  if (budget && dish.price > budget) return -1;

  // Direct keyword match in dish keywords array
  for (const kw of dishKeywords) {
    if (t.includes(kw)) score += 10;
  }

  // Dish name match
  if (t.includes(dish.name.toLowerCase())) score += 20;

  // Category match
  if (t.includes(dish.category)) score += 8;

  // Keyword map scoring
  if (detectedKeywords.has('spicy') && (dish.spiceLevel === 'Spicy' || dish.spiceLevel === 'Medium')) score += 8;
  if (detectedKeywords.has('spicy') && dish.spiceLevel === 'Mild') score -= 5;
  if (detectedKeywords.has('mild') && dish.spiceLevel === 'Mild') score += 8;
  if (detectedKeywords.has('mild') && dish.spiceLevel === 'Spicy') score -= 5;
  if (detectedKeywords.has('healthy') && dishKeywords.includes('healthy')) score += 10;
  if (detectedKeywords.has('healthy') && dish.category === 'salad') score += 8;
  if (detectedKeywords.has('protein') && dishKeywords.includes('protein')) score += 10;
  if (detectedKeywords.has('comfort') && dishKeywords.includes('comfort')) score += 8;
  if (detectedKeywords.has('cheesy') && dishKeywords.includes('cheesy')) score += 10;
  if (detectedKeywords.has('cheesy') && dishKeywords.includes('cheese')) score += 8;
  if (detectedKeywords.has('filling') && dish.portionSize === 'Filling') score += 8;
  if (detectedKeywords.has('light') && dish.portionSize === 'Light') score += 8;
  if (detectedKeywords.has('snack') && dishKeywords.includes('snack')) score += 8;
  if (detectedKeywords.has('lateNight') && dishKeywords.includes('late night')) score += 12;
  if (detectedKeywords.has('sweet') && dish.category === 'dessert') score += 10;
  if (detectedKeywords.has('quick') && dishKeywords.includes('quick')) score += 8;
  if (detectedKeywords.has('budget') && dish.price <= 100) score += 10;
  if (detectedKeywords.has('budget') && dish.price <= 150) score += 5;

  // Cuisine matches
  if (detectedKeywords.has('biryani') && dish.category === 'biryani') score += 15;
  if (detectedKeywords.has('momo') && dish.category === 'momo') score += 15;
  if (detectedKeywords.has('burger') && dish.category === 'burger') score += 15;
  if (detectedKeywords.has('pizza') && dish.category === 'pizza') score += 15;
  if (detectedKeywords.has('pasta') && dish.category === 'pasta') score += 15;
  if (detectedKeywords.has('noodles') && (dish.category === 'noodles' || dish.category === 'snack')) score += 12;
  if (detectedKeywords.has('dosa') && dish.category === 'dosa') score += 15;
  if (detectedKeywords.has('roll') && (dish.category === 'roll' || dish.category === 'wrap')) score += 15;
  if (detectedKeywords.has('kebab') && dish.category === 'kebab') score += 15;
  if (detectedKeywords.has('chinese') && dish.cuisine === 'chinese') score += 12;
  if (detectedKeywords.has('streetFood') && dishKeywords.includes('street food')) score += 12;

  // Rating boost
  score += dish.rating * 2;

  // Tags boost
  if (dish.tags?.includes('Best Seller')) score += 3;
  if (dish.tags?.includes('High Rated')) score += 2;

  // Price efficiency score (lower price = slight bonus for budget queries)
  if (detectedKeywords.has('budget') || detectedKeywords.has('light')) {
    score += Math.max(0, (300 - dish.price) / 50);
  }

  return score;
}

// ── Main recommendation function ────────────────────────────────────
export function getRecommendations(query, count = 3) {
  if (!query.trim()) {
    // Return top-rated dishes if no query
    return [...ALL_DISHES]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count)
      .map((d) => ({
        ...d,
        restaurant: getRestaurantById(d.restaurantId),
      }));
  }

  const budget = extractBudget(query);
  const detectedKeywords = detectKeywords(query);

  const scored = ALL_DISHES.map((dish) => ({
    dish,
    score: scoreDish(dish, detectedKeywords, budget, query),
  }))
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score);

  // Deduplicate by name (keep highest scored)
  const seen = new Set();
  const unique = scored.filter(({ dish }) => {
    if (seen.has(dish.name)) return false;
    seen.add(dish.name);
    return true;
  });

  return unique.slice(0, count).map(({ dish }) => ({
    ...dish,
    restaurant: getRestaurantById(dish.restaurantId),
  }));
}

export { extractBudget, detectKeywords };