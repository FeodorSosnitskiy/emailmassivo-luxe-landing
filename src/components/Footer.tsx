import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">EmailMassivo</h3>
            <p className="text-sm text-muted-foreground">
              Smart email marketing and automation for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('product')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">{t('features')}</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">{t('pricing')}</a></li>
              <li><a href="#integrations" className="hover:text-foreground transition-colors">{t('integrations')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('about')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('careers')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('blog')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('privacy')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 EmailMassivo. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
