var accordionItems = document.getElementsByClassName('accordion-item');

for (var i = 0; i < accordionItems.length; i++) {
  var header = accordionItems[i].querySelector('.accordion-header');
  header.addEventListener('click', toggleAccordion);
}

function toggleAccordion() {
  var content = this.nextElementSibling;
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
}
