// // Saved to localstorage
// export function saveFile(file, key) {
//   const reader = new FileReader();
//   reader.onload = function (base64) {
//     localStorage[key] = base64;
//   };
//   reader.readAsDataURL(file);
// }

// // Retreived file object
// export function getFile(key) {
//   const base64 = localStorage[key];
//   if (!base64) return null;

//   const base64Parts = base64.split(",");
//   const fileFormat = base64Parts[0].split(";")[1];
//   const fileContent = base64Parts[1];
//   const file = new File([fileContent], "file name here", { type: fileFormat });
//   return file;
// }

export function saveFile(url, key) {
  localStorage.setItem(key, url);
}

export function getFile(key) {
  return localStorage.getItem(key);
}
