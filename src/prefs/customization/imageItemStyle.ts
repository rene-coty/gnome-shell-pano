import { Settings } from '@gi-types/gio2';
import { ItemExpanderRow } from '@pano/prefs/customization/itemExpanderRow';
import { createColorRow, createFontRow } from '@pano/prefs/customization/utils';
import { registerGObjectClass } from '@pano/utils/gjs';
import { PanoItemTypes } from '@pano/utils/panoItemType';
import { _, getCurrentExtensionSettings } from '@pano/utils/shell';

@registerGObjectClass
export class ImageItemStyleRow extends ItemExpanderRow {
  private settings: Settings;

  constructor() {
    super(_('Image Item Style'), _('Change the style of the image item'), PanoItemTypes.IMAGE.iconName);

    this.settings = getCurrentExtensionSettings().get_child('image-item');

    // create header background color row
    this.add_row(
      createColorRow(
        _('Header Background Color'),
        _('You can change the background color of the header'),
        this.settings,
        'header-bg-color',
      ),
    );

    // create header text color row
    this.add_row(
      createColorRow(
        _('Header Text Color'),
        _('You can change the text color of the header'),
        this.settings,
        'header-color',
      ),
    );

    // create body background color row
    this.add_row(
      createColorRow(
        _('Body Background Color'),
        _('You can change the background color of the body'),
        this.settings,
        'body-bg-color',
      ),
    );

    // create metadata background color row
    this.add_row(
      createColorRow(
        _('Metadata Background Color'),
        _('You can change the background color of the metadata'),
        this.settings,
        'metadata-bg-color',
      ),
    );

    // create metadata text color row
    this.add_row(
      createColorRow(
        _('Metadata Text Color'),
        _('You can change the text color of the metadata'),
        this.settings,
        'metadata-color',
      ),
    );

    // create metadata font row
    this.add_row(
      createFontRow(_('Metadata Font'), _('You can change the font of the metadata'), this.settings, 'metadata-font'),
    );
  }
}
