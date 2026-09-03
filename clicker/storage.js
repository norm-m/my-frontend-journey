export function saveHistory(data) {
  localStorage.setItem('saveHistory', JSON.stringify(data));
}
export function loadHistory() {
  return JSON.parse(localStorage.getItem('saveHistory')) || [];
}
