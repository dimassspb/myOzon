// checkbox
export function toggleCheckBox() {
  const checkbox = document.querySelector('.filter-check_checkbox');
  const checkMark = document.querySelector('.filter-check_checkmark');
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      checkMark.classList.add('checked');
    } else {
      checkMark.classList.remove('checked');
    }
  });
}
// end checkbox
