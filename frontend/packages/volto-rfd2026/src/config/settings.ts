import type { ConfigType } from '@plone/registry';

export default function install(config: ConfigType) {
  // Language settings
  config.settings.isMultilingual = true;
  config.settings.supportedLanguages = ['en', 'nl'];
  config.settings.defaultLanguage = 'en';

  return config;
}
