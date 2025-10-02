import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Users, BarChart3, Puzzle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    titleKey: 'automationTitle',
    descKey: 'automationDesc',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Users,
    titleKey: 'personalizationTitle',
    descKey: 'personalizationDesc',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: BarChart3,
    titleKey: 'analyticsTitle',
    descKey: 'analyticsDesc',
    gradient: 'from-accent to-secondary',
  },
  {
    icon: Puzzle,
    titleKey: 'integrationsTitle',
    descKey: 'integrationsDesc',
    gradient: 'from-primary to-secondary',
  },
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t('featuresTitle')}</h2>
          <p className="text-xl text-muted-foreground">{t('featuresSubtitle')}</p>
        </div>

        <div className="bento-grid max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 glow-effect group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
