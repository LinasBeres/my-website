if (typeof renderMathInElement !== 'undefined') {
  renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$',  right: '$',  display: false}
    ],
    throwOnError: false
  });
}

document.querySelectorAll('.bibtex-box').forEach(function(box) {
  box.addEventListener('click', function() {
    var pre = box.querySelector('pre') || box;
    var sel = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(pre);
    sel.removeAllRanges();
    sel.addRange(range);
  });
});
