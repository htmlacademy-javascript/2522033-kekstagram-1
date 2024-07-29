import { objectPhoto } from "./functions.js";
import "./data.js";
import { renderPictures } from "./picture.js";
import "./form.js";
import "./zoom.js";
import { getData } from "./api.js";
import { showAlert } from "./util.js";

// onFormSubmit(async (data) => {
// try {
// await sendData(data);
// hideModal();
// showSuccessMessage();
// } catch {
// showErrorMessage();
// }
// });

try {
  const data = await getData();
  renderPictures(data);
} catch (err) {
  showAlert(err.message);
}
