import { useLanguage } from '@/contexts/LanguageContext';

const integrations = [
  { name: 'Salesforce', color: 'from-blue-500 to-blue-600' },
  { name: 'HubSpot', color: 'from-orange-500 to-red-500' },
  { name: 'Shopify', color: 'from-green-500 to-green-600' },
  { name: 'WordPress', color: 'from-blue-600 to-blue-700' },
  { name: 'Stripe', color: 'from-purple-500 to-purple-600' },
  { name: 'Slack', color: 'from-pink-500 to-red-500' },
  { name: 'Zapier', color: 'from-orange-400 to-orange-500' },
  { name: 'Google Analytics', color: 'from-yellow-500 to-orange-500' },
];

export function Integrations() {
  const { t } = useLanguage();

  return (
    <section id="integrations" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t('integrationsTitle')}</h2>
          <p className="text-xl text-muted-foreground">Connect with your favorite tools</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 glow-effect animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-full h-16 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center`}>
                <span className="font-bold text-white text-sm">{integration.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
