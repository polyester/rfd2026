import type { ConfigType } from '@plone/registry';
import cloneDeep from 'lodash/cloneDeep';
import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';
import applicationSVG from '@plone/volto/icons/application.svg';
import IframeView from '../components/Blocks/Iframe/View';
import IframeEdit from '../components/Blocks/Iframe/Edit';

import ScriptView from '../components/Blocks/Script/View';
import ScriptEdit from '../components/Blocks/Script/Edit';

import Screening from '../components/theme/Views/Screening';
import ScreeningListingTemplate from 'volto-rfd2026/components/Blocks/ListingTemplate/ScreeningListingTemplate';

export default function install(config: ConfigType) {
  // Language settings
  config.settings.isMultilingual = true;
  config.settings.supportedLanguages = ['en', 'nl'];
  config.settings.defaultLanguage = 'en';
  config.settings.showTags = false;
  config.settings.matomoSiteId = '6';
  config.settings.matomoUrlBase = 'https://piwik.cleanclothes.org/';

  config.blocks.blocksConfig.iframe = {
    id: 'iframe',
    title: 'Iframe',
    icon: applicationSVG,
    group: 'common',
    view: IframeView,
    edit: IframeEdit,
    schema: BlockSettingsSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };

  config.blocks.blocksConfig.script = {
    id: 'script',
    title: 'Script',
    icon: applicationSVG,
    group: 'common',
    view: ScriptView,
    edit: ScriptEdit,
    schema: BlockSettingsSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };

  /**
   * Enable 'iframe', '__button' and 'heading' blocks
   * to be used in 'gridBlock'
   */
  config.blocks.blocksConfig.gridBlock.blocksConfig.iframe = cloneDeep(
    config.blocks.blocksConfig.iframe,
  );
  config.blocks.blocksConfig.gridBlock.allowedBlocks.push('iframe');

  config.blocks.blocksConfig.gridBlock.blocksConfig.__button = cloneDeep(
    config.blocks.blocksConfig.__button,
  );
  config.blocks.blocksConfig.gridBlock.allowedBlocks.push('__button');

  config.blocks.blocksConfig.gridBlock.blocksConfig.heading = cloneDeep(
    config.blocks.blocksConfig.heading,
  );
  config.blocks.blocksConfig.gridBlock.allowedBlocks.push('heading');

  config.blocks.requiredBlocks = [];

  config.blocks.blocksConfig.listing.variations.push({
    id: 'screening',
    title: 'Screening',
    template: ScreeningListingTemplate,
  });

  config.views.contentTypesViews['Screening'] = Screening;

  config.blocks.blocksConfig.search.mostUsed = true;

  return config;
}
