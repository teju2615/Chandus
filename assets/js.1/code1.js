const images = document.querySelectorAll('.photo-gallery img');
const imageContent = document.getElementById('image-content');
const nextPageBtn = document.getElementById('next-page-btn');

images.forEach(image => {
  image.addEventListener('click', () => {
    const content = image.getAttribute('data-content');
    imageContent.textContent = content;
  });
});

nextPageBtn.addEventListener('click', () => {
  window.location.href = 'next-page.html';
});