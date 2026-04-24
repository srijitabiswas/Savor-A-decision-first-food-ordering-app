<<<<<<< HEAD
// ─── RESTAURANTS ────────────────────────────────────────────────────────────
export const restaurants = [
  {
    id: 'r1',
    name: 'The Biryani House',
    rating: 4.7,
    deliveryTime: '25–35 min',
    cuisine: 'Mughlai, Biryani',
    area: 'Park Street',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop',
    tags: ['Top Rated'],
  },
  {
    id: 'r2',
    name: 'Pizzeria Napoli',
    rating: 4.5,
    deliveryTime: '20–30 min',
    cuisine: 'Italian, Pizza',
    area: 'Ballygunge',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop',
    tags: ['Must Try'],
  },
  {
    id: 'r3',
    name: 'Golden Bowl',
    rating: 4.3,
    deliveryTime: '30–40 min',
    cuisine: 'Chinese, Pan-Asian',
    area: 'Salt Lake',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop',
    tags: ['Best Value'],
  },
  {
    id: 'r4',
    name: 'South Spice',
    rating: 4.6,
    deliveryTime: '20–30 min',
    cuisine: 'South Indian',
    area: 'Alipore',
    image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&auto=format&fit=crop',
    tags: ['Healthy'],
  },
  {
    id: 'r5',
    name: 'Burger Foundry',
    rating: 4.4,
    deliveryTime: '15–25 min',
    cuisine: 'American, Burgers',
    area: 'New Town',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop',
    tags: ['Quick Bite'],
  },
  {
    id: 'r6',
    name: 'Thali & Co.',
    rating: 4.2,
    deliveryTime: '35–45 min',
    cuisine: 'North Indian',
    area: 'Howrah',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop',
    tags: ['Good for Sharing'],
  },
  {
    id: 'r7',
    name: 'Roll House',
    rating: 4.5,
    deliveryTime: '15–25 min',
    cuisine: 'Rolls, Wraps, Kathi',
    area: 'Gariahat',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&auto=format&fit=crop',
    tags: ['Quick Bite'],
  },
  {
    id: 'r8',
    name: 'Pasta Madre',
    rating: 4.6,
    deliveryTime: '25–35 min',
    cuisine: 'Italian, Pasta',
    area: 'Park Circus',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop',
    tags: ['Top Rated'],
  },
  {
    id: 'r9',
    name: 'Momo Studio',
    rating: 4.4,
    deliveryTime: '20–30 min',
    cuisine: 'Tibetan, Momos, Dumplings',
    area: 'New Town',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop',
    tags: ['Trending'],
  },
  {
    id: 'r10',
    name: 'The Kebab Corner',
    rating: 4.7,
    deliveryTime: '25–35 min',
    cuisine: 'Mughlai, Kebabs, Grills',
    area: 'Shyambazar',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop',
    tags: ['Top Rated'],
  },
  {
    id: 'r11',
    name: 'Sweet Endings',
    rating: 4.3,
    deliveryTime: '20–30 min',
    cuisine: 'Desserts, Ice Cream, Mithai',
    area: 'Camac Street',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop',
    tags: ['Premium'],
  },
  {
    id: 'r12',
    name: 'Soup & Co.',
    rating: 4.1,
    deliveryTime: '20–30 min',
    cuisine: 'Asian, Continental, Soups',
    area: 'Rajarhat',
    image: 'https://images.unsplash.com/photo-1578374173713-74ef32b7bd50?w=600&auto=format&fit=crop',
    tags: ['Healthy'],
  },
  {
    id: 'r13',
    name: 'Sushi Koi',
    rating: 4.8,
    deliveryTime: '30–45 min',
    cuisine: 'Japanese, Sushi',
    area: 'Ballygunge',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop',
    tags: ['Premium'],
  },
  {
    id: 'r14',
    name: 'Sandwich Republic',
    rating: 4.2,
    deliveryTime: '15–20 min',
    cuisine: 'Sandwiches, Subs, Burgers',
    area: 'Jadavpur',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop',
    tags: ['Quick Bite'],
  },
  {
    id: 'r15',
    name: 'Greens & Grains',
    rating: 4.5,
    deliveryTime: '20–30 min',
    cuisine: 'Salads, Bowls, Healthy',
    area: 'Salt Lake',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop',
    tags: ['Healthy'],
  },
];

// ─── DISHES ─────────────────────────────────────────────────────────────────
export const dishes = [
  // BIRYANI
  { id: 'd1', name: 'Chicken Dum Biryani', restaurantId: 'r1', category: 'biryani', price: 299, rating: 4.8, ratingCount: 1240, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Gravy', description: 'Slow-cooked in sealed pot with aged Basmati, whole spices, and free-range chicken. Served with raita and salan.' },
  { id: 'd2', name: 'Mutton Biryani', restaurantId: 'r1', category: 'biryani', price: 399, rating: 4.7, ratingCount: 860, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Tender slow-braised mutton layered with saffron-infused Basmati. Rich, aromatic, and deeply satisfying.' },
  { id: 'd3', name: 'Veg Dum Biryani', restaurantId: 'r1', category: 'biryani', price: 199, rating: 4.3, ratingCount: 540, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Seasonal vegetables and paneer layered with fragrant Basmati and whole spices.' },
  { id: 'd4', name: 'Prawn Biryani', restaurantId: 'r1', category: 'biryani', price: 449, rating: 4.6, ratingCount: 380, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&auto=format&fit=crop', tags: ['Premium'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Gravy', description: 'Juicy tiger prawns marinated in coastal spices, slow-cooked with golden Basmati.' },

  // PIZZA
  { id: 'd5', name: 'Margherita Pizza', restaurantId: 'r2', category: 'pizza', price: 249, rating: 4.6, ratingCount: 980, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '6 slices', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Thin-crust Neapolitan style with San Marzano tomato, fresh mozzarella, and basil. Simple. Perfect.' },
  { id: 'd6', name: 'Pepperoni Overload', restaurantId: 'r2', category: 'pizza', price: 349, rating: 4.5, ratingCount: 720, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: '6 slices', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Dry', description: 'Hand-stretched dough, double-layer pepperoni, and three-cheese blend.' },
  { id: 'd7', name: 'Truffle Mushroom Pizza', restaurantId: 'r2', category: 'pizza', price: 449, rating: 4.7, ratingCount: 410, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop', tags: ['Premium'], quantity: '6 slices', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Wild mushrooms, truffle oil drizzle, parmesan shavings, and fresh thyme on white sauce.' },
  { id: 'd8', name: 'BBQ Chicken Pizza', restaurantId: 'r2', category: 'pizza', price: 379, rating: 4.4, ratingCount: 560, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '6 slices', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Smoky BBQ base, grilled chicken chunks, red onion, and mozzarella.' },

  // CHINESE
  { id: 'd9', name: 'Hakka Noodles', restaurantId: 'r3', category: 'noodles', price: 179, rating: 4.2, ratingCount: 630, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Wok-tossed thin noodles with crisp vegetables and dark soy.' },
  { id: 'd10', name: 'Chicken Manchurian', restaurantId: 'r3', category: 'chinese', price: 249, rating: 4.4, ratingCount: 780, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 2', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Crispy chicken tossed in tangy manchurian sauce with garlic, ginger and spring onions.' },
  { id: 'd11', name: 'Chicken Fried Rice', restaurantId: 'r3', category: 'rice', price: 199, rating: 4.3, ratingCount: 540, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop', tags: ['Quick Bite'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Wok-fried long-grain rice with tender chicken, scrambled egg, scallions and soy.' },
  { id: 'd12', name: 'Crispy Honey Chilli Potato', restaurantId: 'r3', category: 'chinese', price: 159, rating: 4.1, ratingCount: 420, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 2', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Crispy potato fingers tossed in sweet-spicy honey chilli glaze. Irresistible.' },

  // SOUTH INDIAN
  { id: 'd13', name: 'Masala Dosa', restaurantId: 'r4', category: 'dosa', price: 129, rating: 4.6, ratingCount: 1100, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Crispy fermented crepe with spiced potato filling, served with coconut chutney and sambar.' },
  { id: 'd14', name: 'Chettinad Chicken Curry', restaurantId: 'r4', category: 'curry', price: 319, rating: 4.8, ratingCount: 560, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Bold, aromatic chicken curry with freshly ground Chettinad masala.' },
  { id: 'd15', name: 'Ghee Roast Dosa', restaurantId: 'r4', category: 'dosa', price: 149, rating: 4.5, ratingCount: 680, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Paper-thin dosa crisped in clarified butter, served with tomato chutney and kadala curry.' },
  { id: 'd16', name: 'Idli Sambar (6 pcs)', restaurantId: 'r4', category: 'south_indian', price: 99, rating: 4.2, ratingCount: 820, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: '6 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Gravy', description: 'Fluffy steamed rice cakes with tangy lentil sambar and three chutneys.' },

  // BURGERS
  { id: 'd17', name: 'Smash Burger', restaurantId: 'r5', category: 'burger', price: 199, rating: 4.5, ratingCount: 890, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Double smash patty, American cheese, caramelized onions, house sauce on a brioche bun.' },
  { id: 'd18', name: 'Crispy Chicken Burger', restaurantId: 'r5', category: 'burger', price: 179, rating: 4.3, ratingCount: 670, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?w=600&auto=format&fit=crop', tags: ['Quick Bite'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Dry', description: 'Southern-fried crispy chicken thigh, coleslaw, pickles, and sriracha mayo.' },
  { id: 'd19', name: 'Mushroom Swiss Burger', restaurantId: 'r5', category: 'burger', price: 229, rating: 4.4, ratingCount: 410, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1548940740-204726a19be3?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Sautéed wild mushrooms, Swiss cheese, garlic aioli on a toasted brioche.' },

  // THALI
  { id: 'd20', name: 'North Indian Thali', restaurantId: 'r6', category: 'thali', price: 299, rating: 4.2, ratingCount: 420, deliveryTime: '35–45 min', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Gravy', description: 'Dal makhani, paneer butter masala, roti, rice, raita, salad, papad and sweet. Full meal.' },
  { id: 'd21', name: 'Rajasthani Thali', restaurantId: 'r6', category: 'thali', price: 349, rating: 4.4, ratingCount: 310, deliveryTime: '35–45 min', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 2', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Dal baati churma, gatte ki sabzi, ker sangri, bajra roti — authentic Rajasthani feast.' },
  { id: 'd22', name: 'Palak Paneer + Roti', restaurantId: 'r6', category: 'curry', price: 229, rating: 4.1, ratingCount: 290, deliveryTime: '35–45 min', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop', tags: ['Healthy'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Gravy', description: 'Fresh cottage cheese cubes in a smooth, spiced spinach gravy with 3 tandoor rotis.' },

  // ROLLS & WRAPS
  { id: 'd23', name: 'Chicken Kathi Roll', restaurantId: 'r7', category: 'roll', price: 129, rating: 4.5, ratingCount: 1320, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Flaky paratha rolled with spiced chicken tikka, onions, green chutney, and lime.' },
  { id: 'd24', name: 'Egg Chicken Roll', restaurantId: 'r7', category: 'roll', price: 109, rating: 4.3, ratingCount: 980, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Classic Kolkata egg roll — paratha dipped in beaten egg, filled with juicy chicken pieces.' },
  { id: 'd25', name: 'Paneer Tikka Wrap', restaurantId: 'r7', category: 'wrap', price: 149, rating: 4.4, ratingCount: 760, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Char-grilled paneer tikka, mint chutney, pickled onion wrapped in whole wheat paratha.' },
  { id: 'd26', name: 'Double Chicken Frankie', restaurantId: 'r7', category: 'roll', price: 169, rating: 4.6, ratingCount: 540, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Dry', description: 'Double the chicken, double the spice. A monster frankie for serious hunger.' },
  { id: 'd27', name: 'Veg Grilled Wrap', restaurantId: 'r7', category: 'wrap', price: 119, rating: 4.1, ratingCount: 420, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Grilled seasonal vegetables, hummus, and herb sauce in a toasted multigrain wrap.' },

  // PASTA
  { id: 'd28', name: 'Penne Arrabbiata', restaurantId: 'r8', category: 'pasta', price: 279, rating: 4.5, ratingCount: 680, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Al dente penne in a fiery San Marzano and chilli sauce, finished with fresh basil.' },
  { id: 'd29', name: 'Fettuccine Alfredo', restaurantId: 'r8', category: 'pasta', price: 319, rating: 4.6, ratingCount: 520, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Gravy', description: 'Silky cream sauce, Parmigiano-Reggiano, and fresh pasta. The Roman original.' },
  { id: 'd30', name: 'Chicken Aglio e Olio', restaurantId: 'r8', category: 'pasta', price: 349, rating: 4.7, ratingCount: 390, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Spaghetti tossed in golden garlic, chilli, extra virgin olive oil, and grilled chicken.' },
  { id: 'd31', name: 'Truffle Carbonara', restaurantId: 'r8', category: 'pasta', price: 449, rating: 4.8, ratingCount: 290, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop', tags: ['Premium'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Guanciale, egg yolk, pecorino romano, black pepper, and truffle shavings. Indulgent.' },

  // MOMOS
  { id: 'd32', name: 'Steamed Chicken Momos', restaurantId: 'r9', category: 'momo', price: 139, rating: 4.4, ratingCount: 1560, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: '8 pieces', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Delicate minced chicken dumplings steamed to perfection, served with tangy chilli dip.' },
  { id: 'd33', name: 'Pan-Fried Pork Dumplings', restaurantId: 'r9', category: 'momo', price: 179, rating: 4.6, ratingCount: 720, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '6 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Pork and ginger dumplings crispy on the bottom, juicy inside. Japanese gyoza style.' },
  { id: 'd34', name: 'Jhol Momo', restaurantId: 'r9', category: 'momo', price: 159, rating: 4.5, ratingCount: 890, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1541696490-8744a5dc0228?w=600&auto=format&fit=crop', tags: ['Trending'], quantity: '8 pieces', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Soft chicken momos dunked in fiery Nepali sesame-tomato jhol broth.' },
  { id: 'd35', name: 'Veg Cheese Momos', restaurantId: 'r9', category: 'momo', price: 149, rating: 4.2, ratingCount: 540, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: '8 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Cheese and veggie stuffed dumplings, lightly pan-fried. Comfort in every bite.' },

  // KEBABS
  { id: 'd36', name: 'Seekh Kebab (4 pcs)', restaurantId: 'r10', category: 'kebab', price: 279, rating: 4.7, ratingCount: 830, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: '4 pieces', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Dry', description: 'Minced lamb seekh kebabs charred on skewers, served with mint chutney and onion salad.' },
  { id: 'd37', name: 'Paneer Tikka', restaurantId: 'r10', category: 'kebab', price: 249, rating: 4.5, ratingCount: 650, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 2', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Thick cut cottage cheese marinated in yogurt and spices, kissed by charcoal flame.' },
  { id: 'd38', name: 'Reshmi Kebab', restaurantId: 'r10', category: 'kebab', price: 329, rating: 4.6, ratingCount: 410, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '4 pieces', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Silky chicken kebabs marinated in cream, cashew paste, and saffron. Melt-in-mouth texture.' },
  { id: 'd39', name: 'Tandoori Chicken Half', restaurantId: 'r10', category: 'kebab', price: 359, rating: 4.8, ratingCount: 920, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1–2', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Dry', description: 'Overnight-marinated half chicken slow-cooked in tandoor. Smoky, juicy, legendary.' },

  // DESSERTS
  { id: 'd40', name: 'Chocolate Lava Cake', restaurantId: 'r11', category: 'dessert', price: 199, rating: 4.7, ratingCount: 740, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Warm molten chocolate cake with a flowing dark chocolate center. Served with vanilla ice cream.' },
  { id: 'd41', name: 'Classic Kulfi', restaurantId: 'r11', category: 'dessert', price: 89, rating: 4.4, ratingCount: 920, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: '2 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Dense, creamy Indian ice cream with pistachio and cardamom. No-frills, all soul.' },
  { id: 'd42', name: 'Gulab Jamun (6 pcs)', restaurantId: 'r11', category: 'dessert', price: 119, rating: 4.3, ratingCount: 680, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: '6 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Gravy', description: 'Soft milk-solid dumplings soaked in rose and cardamom sugar syrup.' },
  { id: 'd43', name: 'Belgian Waffle & Nutella', restaurantId: 'r11', category: 'dessert', price: 179, rating: 4.5, ratingCount: 510, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Crispy-outside fluffy-inside waffle, Nutella swirl, fresh berries, and powdered sugar.' },

  // SOUPS
  { id: 'd44', name: 'Tom Yum Soup', restaurantId: 'r12', category: 'soup', price: 189, rating: 4.4, ratingCount: 460, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Spicy', type: 'Gravy', description: 'Aromatic Thai broth with lemongrass, galangal, kaffir lime, mushrooms, and prawns.' },
  { id: 'd45', name: 'Cream of Tomato Bisque', restaurantId: 'r12', category: 'soup', price: 149, rating: 4.2, ratingCount: 320, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Gravy', description: 'Slow-roasted Roma tomatoes blended with cream, basil, and croutons.' },
  { id: 'd46', name: 'Hot & Sour Soup', restaurantId: 'r12', category: 'soup', price: 159, rating: 4.1, ratingCount: 380, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=600&auto=format&fit=crop', tags: ['Quick Bite'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Spicy', type: 'Gravy', description: 'Tangy, spicy Indo-Chinese broth with tofu, mushrooms, and egg ribbons.' },

  // SUSHI
  { id: 'd47', name: 'Salmon Nigiri (4 pcs)', restaurantId: 'r13', category: 'sushi', price: 499, rating: 4.8, ratingCount: 290, deliveryTime: '30–45 min', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&auto=format&fit=crop', tags: ['Premium'], quantity: '4 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Fresh Atlantic salmon over hand-pressed sushi rice, brushed with ponzu.' },
  { id: 'd48', name: 'Dragon Roll (8 pcs)', restaurantId: 'r13', category: 'sushi', price: 649, rating: 4.9, ratingCount: 180, deliveryTime: '30–45 min', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&auto=format&fit=crop', tags: ['High Rated', 'Premium'], quantity: '8 pieces', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Prawn tempura inside, avocado and tobiko on top. A showstopper roll.' },
  { id: 'd49', name: 'Veggie Rainbow Roll', restaurantId: 'r13', category: 'sushi', price: 399, rating: 4.5, ratingCount: 240, deliveryTime: '30–45 min', image: 'https://images.unsplash.com/photo-1617196034043-89e9b3a8f36b?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '8 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Colourful vegetable maki topped with avocado, cucumber, and sesame.' },

  // SANDWICHES
  { id: 'd50', name: 'Club Sandwich', restaurantId: 'r14', category: 'sandwich', price: 179, rating: 4.3, ratingCount: 560, deliveryTime: '15–20 min', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Triple-decker with grilled chicken, egg, lettuce, tomato, and mayo on toasted brown bread.' },
  { id: 'd51', name: 'Grilled Cheese & Tomato', restaurantId: 'r14', category: 'sandwich', price: 129, rating: 4.1, ratingCount: 380, deliveryTime: '10–15 min', image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=600&auto=format&fit=crop', tags: ['Quick Bite', 'Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Three-cheese melt with heirloom tomato and fresh basil on sourdough. Simple luxury.' },
  { id: 'd52', name: 'BLT Sub', restaurantId: 'r14', category: 'sandwich', price: 199, rating: 4.4, ratingCount: 430, deliveryTime: '15–20 min', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c18106?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Crispy bacon, butter lettuce, tomato, avocado and chipotle aioli in a toasted ciabatta.' },

  // SALADS & BOWLS
  { id: 'd53', name: 'Caesar Salad', restaurantId: 'r15', category: 'salad', price: 249, rating: 4.5, ratingCount: 390, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Romaine lettuce, grilled chicken, house-made Caesar dressing, parmesan, and croutons.' },
  { id: 'd54', name: 'Quinoa Power Bowl', restaurantId: 'r15', category: 'salad', price: 299, rating: 4.6, ratingCount: 310, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Tri-colour quinoa, roasted chickpeas, avocado, edamame, and tahini dressing.' },
  { id: 'd55', name: 'Greek Salad', restaurantId: 'r15', category: 'salad', price: 199, rating: 4.2, ratingCount: 270, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop', tags: ['Healthy'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Cucumber, Kalamata olives, cherry tomatoes, feta, and oregano. Drizzled with extra virgin olive oil.' },
  { id: 'd56', name: 'Acai Berry Bowl', restaurantId: 'r15', category: 'salad', price: 329, rating: 4.7, ratingCount: 180, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop', tags: ['Premium', 'Healthy'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Blended acai base with granola, fresh berries, banana, coconut flakes, and honey drizzle.' },
];

// ─── CATEGORIES ─────────────────────────────────────────────────────────────
export const cuisineCategories = [
  { id: 'all',         label: 'All',         emoji: '🍽️' },
  { id: 'biryani',    label: 'Biryani',     emoji: '🍚' },
  { id: 'pizza',      label: 'Pizza',       emoji: '🍕' },
  { id: 'burger',     label: 'Burger',      emoji: '🍔' },
  { id: 'roll',       label: 'Rolls',       emoji: '🫔' },
  { id: 'wrap',       label: 'Wraps',       emoji: '🌯' },
  { id: 'pasta',      label: 'Pasta',       emoji: '🍝' },
  { id: 'momo',       label: 'Momos',       emoji: '🥟' },
  { id: 'dosa',       label: 'Dosa',        emoji: '🫓' },
  { id: 'noodles',    label: 'Noodles',     emoji: '🍜' },
  { id: 'curry',      label: 'Curry',       emoji: '🍛' },
  { id: 'kebab',      label: 'Kebabs',      emoji: '🍢' },
  { id: 'thali',      label: 'Thali',       emoji: '🥘' },
  { id: 'sandwich',   label: 'Sandwiches',  emoji: '🥪' },
  { id: 'sushi',      label: 'Sushi',       emoji: '🍣' },
  { id: 'salad',      label: 'Bowls',       emoji: '🥗' },
  { id: 'dessert',    label: 'Desserts',    emoji: '🍮' },
  { id: 'soup',       label: 'Soups',       emoji: '🥣' },
  { id: 'chinese',    label: 'Chinese',     emoji: '🥡' },
  { id: 'rice',       label: 'Rice',        emoji: '🍱' },
  { id: 'south_indian', label: 'South Indian', emoji: '🥥' },
];

export const trendingSearches = [
  'Biryani', 'Momos', 'Pizza', 'Chicken Roll', 'Pasta',
  'Dosa', 'Sushi', 'Kebab', 'Burger', 'Thali', 'Noodles', 'Wrap',
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
export const getRestaurantById  = (id) => restaurants.find((r) => r.id === id);
export const getDishById        = (id) => dishes.find((d) => d.id === id);
export const getDishesByRestaurant = (restaurantId) => dishes.filter((d) => d.restaurantId === restaurantId);

export const filterDishes = ({
  query      = '',
  priceRange = null,
  category   = null,
  sortBy     = 'rating',
}) => {
  let result = [...dishes];

  if (query) {
    const q = query.toLowerCase();
    result = result.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        getRestaurantById(d.restaurantId)?.name.toLowerCase().includes(q) ||
        getRestaurantById(d.restaurantId)?.cuisine.toLowerCase().includes(q)
    );
  }

  if (priceRange) {
    result = result.filter(
      (d) => d.price >= priceRange.min && d.price <= priceRange.max
    );
  }

  if (category && category !== 'all') {
    result = result.filter((d) => d.category === category);
  }

  if (sortBy === 'rating')       result.sort((a, b) => b.rating - a.rating);
  else if (sortBy === 'price_asc')  result.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price_desc') result.sort((a, b) => b.price - a.price);
  else if (sortBy === 'delivery')
    result.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));

  return result;
=======
// ─── RESTAURANTS ────────────────────────────────────────────────────────────
export const restaurants = [
  {
    id: 'r1',
    name: 'The Biryani House',
    rating: 4.7,
    deliveryTime: '25–35 min',
    cuisine: 'Mughlai, Biryani',
    area: 'Park Street',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop',
    tags: ['Top Rated'],
  },
  {
    id: 'r2',
    name: 'Pizzeria Napoli',
    rating: 4.5,
    deliveryTime: '20–30 min',
    cuisine: 'Italian, Pizza',
    area: 'Ballygunge',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop',
    tags: ['Must Try'],
  },
  {
    id: 'r3',
    name: 'Golden Bowl',
    rating: 4.3,
    deliveryTime: '30–40 min',
    cuisine: 'Chinese, Pan-Asian',
    area: 'Salt Lake',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop',
    tags: ['Best Value'],
  },
  {
    id: 'r4',
    name: 'South Spice',
    rating: 4.6,
    deliveryTime: '20–30 min',
    cuisine: 'South Indian',
    area: 'Alipore',
    image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&auto=format&fit=crop',
    tags: ['Healthy'],
  },
  {
    id: 'r5',
    name: 'Burger Foundry',
    rating: 4.4,
    deliveryTime: '15–25 min',
    cuisine: 'American, Burgers',
    area: 'New Town',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop',
    tags: ['Quick Bite'],
  },
  {
    id: 'r6',
    name: 'Thali & Co.',
    rating: 4.2,
    deliveryTime: '35–45 min',
    cuisine: 'North Indian',
    area: 'Howrah',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop',
    tags: ['Good for Sharing'],
  },
  {
    id: 'r7',
    name: 'Roll House',
    rating: 4.5,
    deliveryTime: '15–25 min',
    cuisine: 'Rolls, Wraps, Kathi',
    area: 'Gariahat',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&auto=format&fit=crop',
    tags: ['Quick Bite'],
  },
  {
    id: 'r8',
    name: 'Pasta Madre',
    rating: 4.6,
    deliveryTime: '25–35 min',
    cuisine: 'Italian, Pasta',
    area: 'Park Circus',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop',
    tags: ['Top Rated'],
  },
  {
    id: 'r9',
    name: 'Momo Studio',
    rating: 4.4,
    deliveryTime: '20–30 min',
    cuisine: 'Tibetan, Momos, Dumplings',
    area: 'New Town',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop',
    tags: ['Trending'],
  },
  {
    id: 'r10',
    name: 'The Kebab Corner',
    rating: 4.7,
    deliveryTime: '25–35 min',
    cuisine: 'Mughlai, Kebabs, Grills',
    area: 'Shyambazar',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop',
    tags: ['Top Rated'],
  },
  {
    id: 'r11',
    name: 'Sweet Endings',
    rating: 4.3,
    deliveryTime: '20–30 min',
    cuisine: 'Desserts, Ice Cream, Mithai',
    area: 'Camac Street',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop',
    tags: ['Premium'],
  },
  {
    id: 'r12',
    name: 'Soup & Co.',
    rating: 4.1,
    deliveryTime: '20–30 min',
    cuisine: 'Asian, Continental, Soups',
    area: 'Rajarhat',
    image: 'https://images.unsplash.com/photo-1578374173713-74ef32b7bd50?w=600&auto=format&fit=crop',
    tags: ['Healthy'],
  },
  {
    id: 'r13',
    name: 'Sushi Koi',
    rating: 4.8,
    deliveryTime: '30–45 min',
    cuisine: 'Japanese, Sushi',
    area: 'Ballygunge',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop',
    tags: ['Premium'],
  },
  {
    id: 'r14',
    name: 'Sandwich Republic',
    rating: 4.2,
    deliveryTime: '15–20 min',
    cuisine: 'Sandwiches, Subs, Burgers',
    area: 'Jadavpur',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop',
    tags: ['Quick Bite'],
  },
  {
    id: 'r15',
    name: 'Greens & Grains',
    rating: 4.5,
    deliveryTime: '20–30 min',
    cuisine: 'Salads, Bowls, Healthy',
    area: 'Salt Lake',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop',
    tags: ['Healthy'],
  },
];

// ─── DISHES ─────────────────────────────────────────────────────────────────
export const dishes = [
  // BIRYANI
  { id: 'd1', name: 'Chicken Dum Biryani', restaurantId: 'r1', category: 'biryani', price: 299, rating: 4.8, ratingCount: 1240, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Gravy', description: 'Slow-cooked in sealed pot with aged Basmati, whole spices, and free-range chicken. Served with raita and salan.' },
  { id: 'd2', name: 'Mutton Biryani', restaurantId: 'r1', category: 'biryani', price: 399, rating: 4.7, ratingCount: 860, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Tender slow-braised mutton layered with saffron-infused Basmati. Rich, aromatic, and deeply satisfying.' },
  { id: 'd3', name: 'Veg Dum Biryani', restaurantId: 'r1', category: 'biryani', price: 199, rating: 4.3, ratingCount: 540, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Seasonal vegetables and paneer layered with fragrant Basmati and whole spices.' },
  { id: 'd4', name: 'Prawn Biryani', restaurantId: 'r1', category: 'biryani', price: 449, rating: 4.6, ratingCount: 380, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&auto=format&fit=crop', tags: ['Premium'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Gravy', description: 'Juicy tiger prawns marinated in coastal spices, slow-cooked with golden Basmati.' },

  // PIZZA
  { id: 'd5', name: 'Margherita Pizza', restaurantId: 'r2', category: 'pizza', price: 249, rating: 4.6, ratingCount: 980, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '6 slices', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Thin-crust Neapolitan style with San Marzano tomato, fresh mozzarella, and basil. Simple. Perfect.' },
  { id: 'd6', name: 'Pepperoni Overload', restaurantId: 'r2', category: 'pizza', price: 349, rating: 4.5, ratingCount: 720, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: '6 slices', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Dry', description: 'Hand-stretched dough, double-layer pepperoni, and three-cheese blend.' },
  { id: 'd7', name: 'Truffle Mushroom Pizza', restaurantId: 'r2', category: 'pizza', price: 449, rating: 4.7, ratingCount: 410, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop', tags: ['Premium'], quantity: '6 slices', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Wild mushrooms, truffle oil drizzle, parmesan shavings, and fresh thyme on white sauce.' },
  { id: 'd8', name: 'BBQ Chicken Pizza', restaurantId: 'r2', category: 'pizza', price: 379, rating: 4.4, ratingCount: 560, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '6 slices', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Smoky BBQ base, grilled chicken chunks, red onion, and mozzarella.' },

  // CHINESE
  { id: 'd9', name: 'Hakka Noodles', restaurantId: 'r3', category: 'noodles', price: 179, rating: 4.2, ratingCount: 630, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Wok-tossed thin noodles with crisp vegetables and dark soy.' },
  { id: 'd10', name: 'Chicken Manchurian', restaurantId: 'r3', category: 'chinese', price: 249, rating: 4.4, ratingCount: 780, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 2', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Crispy chicken tossed in tangy manchurian sauce with garlic, ginger and spring onions.' },
  { id: 'd11', name: 'Chicken Fried Rice', restaurantId: 'r3', category: 'rice', price: 199, rating: 4.3, ratingCount: 540, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop', tags: ['Quick Bite'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Wok-fried long-grain rice with tender chicken, scrambled egg, scallions and soy.' },
  { id: 'd12', name: 'Crispy Honey Chilli Potato', restaurantId: 'r3', category: 'chinese', price: 159, rating: 4.1, ratingCount: 420, deliveryTime: '30–40 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 2', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Crispy potato fingers tossed in sweet-spicy honey chilli glaze. Irresistible.' },

  // SOUTH INDIAN
  { id: 'd13', name: 'Masala Dosa', restaurantId: 'r4', category: 'dosa', price: 129, rating: 4.6, ratingCount: 1100, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Crispy fermented crepe with spiced potato filling, served with coconut chutney and sambar.' },
  { id: 'd14', name: 'Chettinad Chicken Curry', restaurantId: 'r4', category: 'curry', price: 319, rating: 4.8, ratingCount: 560, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Bold, aromatic chicken curry with freshly ground Chettinad masala.' },
  { id: 'd15', name: 'Ghee Roast Dosa', restaurantId: 'r4', category: 'dosa', price: 149, rating: 4.5, ratingCount: 680, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Paper-thin dosa crisped in clarified butter, served with tomato chutney and kadala curry.' },
  { id: 'd16', name: 'Idli Sambar (6 pcs)', restaurantId: 'r4', category: 'south_indian', price: 99, rating: 4.2, ratingCount: 820, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: '6 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Gravy', description: 'Fluffy steamed rice cakes with tangy lentil sambar and three chutneys.' },

  // BURGERS
  { id: 'd17', name: 'Smash Burger', restaurantId: 'r5', category: 'burger', price: 199, rating: 4.5, ratingCount: 890, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Double smash patty, American cheese, caramelized onions, house sauce on a brioche bun.' },
  { id: 'd18', name: 'Crispy Chicken Burger', restaurantId: 'r5', category: 'burger', price: 179, rating: 4.3, ratingCount: 670, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?w=600&auto=format&fit=crop', tags: ['Quick Bite'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Dry', description: 'Southern-fried crispy chicken thigh, coleslaw, pickles, and sriracha mayo.' },
  { id: 'd19', name: 'Mushroom Swiss Burger', restaurantId: 'r5', category: 'burger', price: 229, rating: 4.4, ratingCount: 410, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1548940740-204726a19be3?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Sautéed wild mushrooms, Swiss cheese, garlic aioli on a toasted brioche.' },

  // THALI
  { id: 'd20', name: 'North Indian Thali', restaurantId: 'r6', category: 'thali', price: 299, rating: 4.2, ratingCount: 420, deliveryTime: '35–45 min', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Medium', type: 'Gravy', description: 'Dal makhani, paneer butter masala, roti, rice, raita, salad, papad and sweet. Full meal.' },
  { id: 'd21', name: 'Rajasthani Thali', restaurantId: 'r6', category: 'thali', price: 349, rating: 4.4, ratingCount: 310, deliveryTime: '35–45 min', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 2', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Dal baati churma, gatte ki sabzi, ker sangri, bajra roti — authentic Rajasthani feast.' },
  { id: 'd22', name: 'Palak Paneer + Roti', restaurantId: 'r6', category: 'curry', price: 229, rating: 4.1, ratingCount: 290, deliveryTime: '35–45 min', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop', tags: ['Healthy'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Gravy', description: 'Fresh cottage cheese cubes in a smooth, spiced spinach gravy with 3 tandoor rotis.' },

  // ROLLS & WRAPS
  { id: 'd23', name: 'Chicken Kathi Roll', restaurantId: 'r7', category: 'roll', price: 129, rating: 4.5, ratingCount: 1320, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Flaky paratha rolled with spiced chicken tikka, onions, green chutney, and lime.' },
  { id: 'd24', name: 'Egg Chicken Roll', restaurantId: 'r7', category: 'roll', price: 109, rating: 4.3, ratingCount: 980, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Classic Kolkata egg roll — paratha dipped in beaten egg, filled with juicy chicken pieces.' },
  { id: 'd25', name: 'Paneer Tikka Wrap', restaurantId: 'r7', category: 'wrap', price: 149, rating: 4.4, ratingCount: 760, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Char-grilled paneer tikka, mint chutney, pickled onion wrapped in whole wheat paratha.' },
  { id: 'd26', name: 'Double Chicken Frankie', restaurantId: 'r7', category: 'roll', price: 169, rating: 4.6, ratingCount: 540, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Dry', description: 'Double the chicken, double the spice. A monster frankie for serious hunger.' },
  { id: 'd27', name: 'Veg Grilled Wrap', restaurantId: 'r7', category: 'wrap', price: 119, rating: 4.1, ratingCount: 420, deliveryTime: '15–25 min', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Grilled seasonal vegetables, hummus, and herb sauce in a toasted multigrain wrap.' },

  // PASTA
  { id: 'd28', name: 'Penne Arrabbiata', restaurantId: 'r8', category: 'pasta', price: 279, rating: 4.5, ratingCount: 680, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Al dente penne in a fiery San Marzano and chilli sauce, finished with fresh basil.' },
  { id: 'd29', name: 'Fettuccine Alfredo', restaurantId: 'r8', category: 'pasta', price: 319, rating: 4.6, ratingCount: 520, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Gravy', description: 'Silky cream sauce, Parmigiano-Reggiano, and fresh pasta. The Roman original.' },
  { id: 'd30', name: 'Chicken Aglio e Olio', restaurantId: 'r8', category: 'pasta', price: 349, rating: 4.7, ratingCount: 390, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Spaghetti tossed in golden garlic, chilli, extra virgin olive oil, and grilled chicken.' },
  { id: 'd31', name: 'Truffle Carbonara', restaurantId: 'r8', category: 'pasta', price: 449, rating: 4.8, ratingCount: 290, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop', tags: ['Premium'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Guanciale, egg yolk, pecorino romano, black pepper, and truffle shavings. Indulgent.' },

  // MOMOS
  { id: 'd32', name: 'Steamed Chicken Momos', restaurantId: 'r9', category: 'momo', price: 139, rating: 4.4, ratingCount: 1560, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: '8 pieces', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Delicate minced chicken dumplings steamed to perfection, served with tangy chilli dip.' },
  { id: 'd33', name: 'Pan-Fried Pork Dumplings', restaurantId: 'r9', category: 'momo', price: 179, rating: 4.6, ratingCount: 720, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '6 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Pork and ginger dumplings crispy on the bottom, juicy inside. Japanese gyoza style.' },
  { id: 'd34', name: 'Jhol Momo', restaurantId: 'r9', category: 'momo', price: 159, rating: 4.5, ratingCount: 890, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1541696490-8744a5dc0228?w=600&auto=format&fit=crop', tags: ['Trending'], quantity: '8 pieces', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Gravy', description: 'Soft chicken momos dunked in fiery Nepali sesame-tomato jhol broth.' },
  { id: 'd35', name: 'Veg Cheese Momos', restaurantId: 'r9', category: 'momo', price: 149, rating: 4.2, ratingCount: 540, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: '8 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Cheese and veggie stuffed dumplings, lightly pan-fried. Comfort in every bite.' },

  // KEBABS
  { id: 'd36', name: 'Seekh Kebab (4 pcs)', restaurantId: 'r10', category: 'kebab', price: 279, rating: 4.7, ratingCount: 830, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: '4 pieces', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Dry', description: 'Minced lamb seekh kebabs charred on skewers, served with mint chutney and onion salad.' },
  { id: 'd37', name: 'Paneer Tikka', restaurantId: 'r10', category: 'kebab', price: 249, rating: 4.5, ratingCount: 650, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 2', portionSize: 'Light', spiceLevel: 'Medium', type: 'Dry', description: 'Thick cut cottage cheese marinated in yogurt and spices, kissed by charcoal flame.' },
  { id: 'd38', name: 'Reshmi Kebab', restaurantId: 'r10', category: 'kebab', price: 329, rating: 4.6, ratingCount: 410, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '4 pieces', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Silky chicken kebabs marinated in cream, cashew paste, and saffron. Melt-in-mouth texture.' },
  { id: 'd39', name: 'Tandoori Chicken Half', restaurantId: 'r10', category: 'kebab', price: 359, rating: 4.8, ratingCount: 920, deliveryTime: '25–35 min', image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1–2', portionSize: 'Filling', spiceLevel: 'Spicy', type: 'Dry', description: 'Overnight-marinated half chicken slow-cooked in tandoor. Smoky, juicy, legendary.' },

  // DESSERTS
  { id: 'd40', name: 'Chocolate Lava Cake', restaurantId: 'r11', category: 'dessert', price: 199, rating: 4.7, ratingCount: 740, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop', tags: ['Best Seller'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Warm molten chocolate cake with a flowing dark chocolate center. Served with vanilla ice cream.' },
  { id: 'd41', name: 'Classic Kulfi', restaurantId: 'r11', category: 'dessert', price: 89, rating: 4.4, ratingCount: 920, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: '2 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Dense, creamy Indian ice cream with pistachio and cardamom. No-frills, all soul.' },
  { id: 'd42', name: 'Gulab Jamun (6 pcs)', restaurantId: 'r11', category: 'dessert', price: 119, rating: 4.3, ratingCount: 680, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: '6 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Gravy', description: 'Soft milk-solid dumplings soaked in rose and cardamom sugar syrup.' },
  { id: 'd43', name: 'Belgian Waffle & Nutella', restaurantId: 'r11', category: 'dessert', price: 179, rating: 4.5, ratingCount: 510, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Crispy-outside fluffy-inside waffle, Nutella swirl, fresh berries, and powdered sugar.' },

  // SOUPS
  { id: 'd44', name: 'Tom Yum Soup', restaurantId: 'r12', category: 'soup', price: 189, rating: 4.4, ratingCount: 460, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Spicy', type: 'Gravy', description: 'Aromatic Thai broth with lemongrass, galangal, kaffir lime, mushrooms, and prawns.' },
  { id: 'd45', name: 'Cream of Tomato Bisque', restaurantId: 'r12', category: 'soup', price: 149, rating: 4.2, ratingCount: 320, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Gravy', description: 'Slow-roasted Roma tomatoes blended with cream, basil, and croutons.' },
  { id: 'd46', name: 'Hot & Sour Soup', restaurantId: 'r12', category: 'soup', price: 159, rating: 4.1, ratingCount: 380, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=600&auto=format&fit=crop', tags: ['Quick Bite'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Spicy', type: 'Gravy', description: 'Tangy, spicy Indo-Chinese broth with tofu, mushrooms, and egg ribbons.' },

  // SUSHI
  { id: 'd47', name: 'Salmon Nigiri (4 pcs)', restaurantId: 'r13', category: 'sushi', price: 499, rating: 4.8, ratingCount: 290, deliveryTime: '30–45 min', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&auto=format&fit=crop', tags: ['Premium'], quantity: '4 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Fresh Atlantic salmon over hand-pressed sushi rice, brushed with ponzu.' },
  { id: 'd48', name: 'Dragon Roll (8 pcs)', restaurantId: 'r13', category: 'sushi', price: 649, rating: 4.9, ratingCount: 180, deliveryTime: '30–45 min', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&auto=format&fit=crop', tags: ['High Rated', 'Premium'], quantity: '8 pieces', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Prawn tempura inside, avocado and tobiko on top. A showstopper roll.' },
  { id: 'd49', name: 'Veggie Rainbow Roll', restaurantId: 'r13', category: 'sushi', price: 399, rating: 4.5, ratingCount: 240, deliveryTime: '30–45 min', image: 'https://images.unsplash.com/photo-1617196034043-89e9b3a8f36b?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: '8 pieces', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Colourful vegetable maki topped with avocado, cucumber, and sesame.' },

  // SANDWICHES
  { id: 'd50', name: 'Club Sandwich', restaurantId: 'r14', category: 'sandwich', price: 179, rating: 4.3, ratingCount: 560, deliveryTime: '15–20 min', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop', tags: ['Best Value'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Triple-decker with grilled chicken, egg, lettuce, tomato, and mayo on toasted brown bread.' },
  { id: 'd51', name: 'Grilled Cheese & Tomato', restaurantId: 'r14', category: 'sandwich', price: 129, rating: 4.1, ratingCount: 380, deliveryTime: '10–15 min', image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=600&auto=format&fit=crop', tags: ['Quick Bite', 'Best Value'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Three-cheese melt with heirloom tomato and fresh basil on sourdough. Simple luxury.' },
  { id: 'd52', name: 'BLT Sub', restaurantId: 'r14', category: 'sandwich', price: 199, rating: 4.4, ratingCount: 430, deliveryTime: '15–20 min', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c18106?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Crispy bacon, butter lettuce, tomato, avocado and chipotle aioli in a toasted ciabatta.' },

  // SALADS & BOWLS
  { id: 'd53', name: 'Caesar Salad', restaurantId: 'r15', category: 'salad', price: 249, rating: 4.5, ratingCount: 390, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Romaine lettuce, grilled chicken, house-made Caesar dressing, parmesan, and croutons.' },
  { id: 'd54', name: 'Quinoa Power Bowl', restaurantId: 'r15', category: 'salad', price: 299, rating: 4.6, ratingCount: 310, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop', tags: ['High Rated'], quantity: 'Serves 1', portionSize: 'Filling', spiceLevel: 'Mild', type: 'Dry', description: 'Tri-colour quinoa, roasted chickpeas, avocado, edamame, and tahini dressing.' },
  { id: 'd55', name: 'Greek Salad', restaurantId: 'r15', category: 'salad', price: 199, rating: 4.2, ratingCount: 270, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop', tags: ['Healthy'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Cucumber, Kalamata olives, cherry tomatoes, feta, and oregano. Drizzled with extra virgin olive oil.' },
  { id: 'd56', name: 'Acai Berry Bowl', restaurantId: 'r15', category: 'salad', price: 329, rating: 4.7, ratingCount: 180, deliveryTime: '20–30 min', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop', tags: ['Premium', 'Healthy'], quantity: 'Serves 1', portionSize: 'Light', spiceLevel: 'Mild', type: 'Dry', description: 'Blended acai base with granola, fresh berries, banana, coconut flakes, and honey drizzle.' },
];

// ─── CATEGORIES ─────────────────────────────────────────────────────────────
export const cuisineCategories = [
  { id: 'all',         label: 'All',         emoji: '🍽️' },
  { id: 'biryani',    label: 'Biryani',     emoji: '🍚' },
  { id: 'pizza',      label: 'Pizza',       emoji: '🍕' },
  { id: 'burger',     label: 'Burger',      emoji: '🍔' },
  { id: 'roll',       label: 'Rolls',       emoji: '🫔' },
  { id: 'wrap',       label: 'Wraps',       emoji: '🌯' },
  { id: 'pasta',      label: 'Pasta',       emoji: '🍝' },
  { id: 'momo',       label: 'Momos',       emoji: '🥟' },
  { id: 'dosa',       label: 'Dosa',        emoji: '🫓' },
  { id: 'noodles',    label: 'Noodles',     emoji: '🍜' },
  { id: 'curry',      label: 'Curry',       emoji: '🍛' },
  { id: 'kebab',      label: 'Kebabs',      emoji: '🍢' },
  { id: 'thali',      label: 'Thali',       emoji: '🥘' },
  { id: 'sandwich',   label: 'Sandwiches',  emoji: '🥪' },
  { id: 'sushi',      label: 'Sushi',       emoji: '🍣' },
  { id: 'salad',      label: 'Bowls',       emoji: '🥗' },
  { id: 'dessert',    label: 'Desserts',    emoji: '🍮' },
  { id: 'soup',       label: 'Soups',       emoji: '🥣' },
  { id: 'chinese',    label: 'Chinese',     emoji: '🥡' },
  { id: 'rice',       label: 'Rice',        emoji: '🍱' },
  { id: 'south_indian', label: 'South Indian', emoji: '🥥' },
];

export const trendingSearches = [
  'Biryani', 'Momos', 'Pizza', 'Chicken Roll', 'Pasta',
  'Dosa', 'Sushi', 'Kebab', 'Burger', 'Thali', 'Noodles', 'Wrap',
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
export const getRestaurantById  = (id) => restaurants.find((r) => r.id === id);
export const getDishById        = (id) => dishes.find((d) => d.id === id);
export const getDishesByRestaurant = (restaurantId) => dishes.filter((d) => d.restaurantId === restaurantId);

export const filterDishes = ({
  query      = '',
  priceRange = null,
  category   = null,
  sortBy     = 'rating',
}) => {
  let result = [...dishes];

  if (query) {
    const q = query.toLowerCase();
    result = result.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        getRestaurantById(d.restaurantId)?.name.toLowerCase().includes(q) ||
        getRestaurantById(d.restaurantId)?.cuisine.toLowerCase().includes(q)
    );
  }

  if (priceRange) {
    result = result.filter(
      (d) => d.price >= priceRange.min && d.price <= priceRange.max
    );
  }

  if (category && category !== 'all') {
    result = result.filter((d) => d.category === category);
  }

  if (sortBy === 'rating')       result.sort((a, b) => b.rating - a.rating);
  else if (sortBy === 'price_asc')  result.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price_desc') result.sort((a, b) => b.price - a.price);
  else if (sortBy === 'delivery')
    result.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));

  return result;
>>>>>>> ef71eadf7600c2495aeee12a49fb5ea83ef37f64
};