import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import { getRestaurantById, getDishesByRestaurant } from '../data/mockData';
import DishCard from '../components/DishCard';

const sections = [
  { label: 'Must Try', filter: (dishes) => dishes.filter((d) => d.tags?.includes('Best Seller') || d.tags?.includes('High Rated')) },
  { label: 'Best Value', filter: (dishes) => dishes.filter((d) => d.tags?.includes('Best Value') || d.price <= 200) },
  { label: 'Good for Sharing', filter: (dishes) => dishes.filter((d) => d.quantity?.includes('2') || d.quantity?.includes('6')) },
];

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = getRestaurantById(id);
  const dishes = getDishesByRestaurant(id);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <p className="text-text-secondary">Restaurant not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-6 relative z-10 pb-16">
        {/* Restaurant info */}
        <div className="bg-bg-secondary rounded-2xl border border-border-default p-6 mb-10">
          <h1 className="font-display font-bold text-2xl text-text-primary mb-1">{restaurant.name}</h1>
          <p className="text-text-secondary text-sm font-body mb-4">{restaurant.cuisine}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Star size={14} className="text-accent-gold fill-accent-gold" />
              <span className="font-display font-semibold text-text-primary">{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary text-sm">
              <Clock size={14} />
              {restaurant.deliveryTime}
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary text-sm">
              <MapPin size={14} />
              {restaurant.area}
            </div>
          </div>
        </div>

        {/* Sections */}
        {sections.map(({ label, filter }) => {
          const sectionDishes = filter(dishes);
          if (sectionDishes.length === 0) return null;
          return (
            <div key={label} className="mb-10">
              <h2 className="font-display font-semibold text-text-primary text-lg mb-5">{label}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sectionDishes.map((dish, i) => (
                  <DishCard key={dish.id} dish={dish} delay={i * 80} />
                ))}
              </div>
            </div>
          );
        })}

        {/* All dishes if no sections matched */}
        {sections.every(({ filter }) => filter(dishes).length === 0) && (
          <div>
            <h2 className="font-display font-semibold text-text-primary text-lg mb-5">Our Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dishes.map((dish, i) => (
                <DishCard key={dish.id} dish={dish} delay={i * 80} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}