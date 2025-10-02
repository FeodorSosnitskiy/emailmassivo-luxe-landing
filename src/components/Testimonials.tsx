import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'EmailMassivo transformed our email campaigns. The automation features saved us countless hours while improving our conversion rates by 45%.',
    rating: 5,
  },
  {
    name: 'Miguel Rodriguez',
    role: 'CEO',
    company: 'GrowthLabs',
    content: 'The analytics and personalization capabilities are unmatched. We finally understand our audience and can deliver exactly what they need.',
    rating: 5,
  },
  {
    name: 'Ana Silva',
    role: 'Digital Marketing Manager',
    company: 'Innovate Inc',
    content: 'Best email marketing platform we have used. The interface is intuitive, and the support team is incredibly responsive.',
    rating: 5,
  },
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t('testimonialsTitle')}</h2>
          <p className="text-xl text-muted-foreground">{t('testimonialsSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
