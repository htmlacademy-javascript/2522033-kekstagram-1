import { renderPictures } from './picture.js';
import './form.js';
import './zoom.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import './filter.js';
import { switchFilters } from './filter.js';


try {
  const photos = await getData();
  const filterElement = document.querySelector('.img-filters');
  filterElement.classList.remove('img-filters--inactive');
  switchFilters (photos);
  renderPictures(photos);
} catch (err) {
  showAlert(err.message);
}
