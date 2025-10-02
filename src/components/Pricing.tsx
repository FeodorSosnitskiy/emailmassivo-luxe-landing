import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const plans = [
  {
    nameKey: 'starter',
    price: '29',
    features: [
      { key: 'upTo', value: '5,000', suffix: 'subscribers' },
      { key: 'emailsSent', value: '50,000' },
      { key: 'basicAutomation' },
      { key: 'emailSupport' },
    ],
  },
  {
    nameKey: 'professional',
    price: '99',
    popular: true,
    features: [
      { key: 'upTo', value: '25,000', suffix: 'subscribers' },
      { key: 'emailsSent', value: '250,000' },
      { key: 'advancedAutomation' },
      { key: 'prioritySupport' },
    ],
  },
  {
    nameKey: 'enterprise',
    price: '299',
    features: [
      { key: 'unlimitedEverything' },
      { key: 'customIntegrations' },
      { key: 'dedicatedManager' },
      { key: 'prioritySupport' },
    ],
  },
];

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t('pricingTitle')}</h2>
          <p className="text-xl text-muted-foreground">{t('pricingSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl relative hover:scale-105 transition-all duration-300 animate-scale-in ${
                plan.popular ? 'ring-2 ring-primary shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{t(plan.nameKey)}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">{t('perMonth')}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                    <span className="text-sm">
                      {feature.value ? `${t(feature.key)} ${feature.value} ${feature.suffix ? t(feature.suffix) : ''}` : t(feature.key)}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'hero' : 'glass'} 
                className="w-full"
                size="lg"
              >
                {t('selectPlan')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
