(function () {
  var wrapper = document.getElementById('cv-wrapper');
  var toggle = document.getElementById('cv-toggle');
  if (!wrapper || !toggle) return;

  toggle.addEventListener('click', function () {
    var isDark = wrapper.classList.toggle('cv-dark');
    toggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  });
})();
