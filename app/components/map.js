import Component from '@glimmer/component';
import ENV from 'official-tutorial/config/environment';

const MAPBOX_THEME = [
  'streets-v11',
  'outdoors-v11',
  'light-v10',
  'dark-v10',
  'satellite-v9',
  'satellite-streets-v11',
  'navigation-day-v1',
  'navigation-night-v1',
];
const MAPBOX_API = `https://api.mapbox.com/styles/v1/mapbox/${MAPBOX_THEME[0]}/static`;

export default class MapComponent extends Component {
  get token() {
    // It is important to URL-encode the token, just in case it contains any special characters that are not URL-safe.
    return encodeURIComponent(ENV.MAP_ACCESS_TOKEN);
  }

  get src() {
    // All arguments that come from this.args are automatically marked as tracked by Ember
    let { lon, lat, width, height, zoom } = this.args;
    let coordinates = `${lon},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }
}
