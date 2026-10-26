document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
function closeMenu() {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Меню';
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Закрыть' : 'Меню';
  navigation.classList.toggle('is-open', open);
});
navigation?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});

document.querySelectorAll('.phone-grid').forEach(gallery => {
  gallery.addEventListener('focusin', event => {
    const link = event.target.closest('.media-link');
    if (!link || gallery.scrollWidth <= gallery.clientWidth) return;
    const frame = gallery.getBoundingClientRect();
    const screen = link.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(gallery).paddingLeft);
    if (screen.left < frame.left + padding - 1 || screen.right > frame.right - padding + 1) {
      gallery.scrollTo({left: gallery.scrollLeft + screen.left - frame.left - padding, behavior: 'instant'});
    }
  });
});

const allLinks = [...document.querySelectorAll('[data-lightbox]')];
let links = allLinks;
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  document.querySelectorAll('[data-kind]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.kind !== button.dataset.filter; });
  links = allLinks.filter(link => !link.closest('[hidden]'));
}));
if (links.length && typeof HTMLDialogElement !== 'undefined') {
  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-labelledby', 'viewer-title');
  dialog.innerHTML = `<div class="lightbox-bar"><p class="lightbox-title" id="viewer-title"></p><div class="lightbox-controls"><button type="button" class="viewer-prev" aria-label="Предыдущее изображение">←</button><button type="button" class="viewer-next" aria-label="Следующее изображение">→</button><button type="button" class="viewer-zoom" aria-pressed="false">Увеличить</button><a class="viewer-original" target="_blank" rel="noopener">Оригинал</a><button type="button" class="close-viewer" aria-label="Закрыть изображение">×</button></div></div><div class="lightbox-stage"><img alt=""></div>`;
  document.body.append(dialog);
  const img = dialog.querySelector('img');
  const zoom = dialog.querySelector('.viewer-zoom');
  const stage = dialog.querySelector('.lightbox-stage');
  let current = 0;
  let opener;
  function show(index) {
    current = (index + links.length) % links.length;
    const link = links[current];
    const source = link.querySelector('img');
    dialog.classList.remove('is-zoomed');
    zoom.textContent = 'Увеличить';
    zoom.setAttribute('aria-pressed', 'false');
    img.src = link.href;
    img.alt = source?.alt || link.dataset.title || '';
    dialog.querySelector('.lightbox-title').textContent = link.dataset.title || img.alt;
    dialog.querySelector('.viewer-original').href = link.href;
    stage.scrollTo(0, 0);
  }
  allLinks.forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    show(links.indexOf(link));
    dialog.showModal();
    document.body.classList.add('viewer-open');
    dialog.querySelector('.close-viewer').focus();
  }));
  dialog.querySelector('.viewer-prev').addEventListener('click', () => show(current - 1));
  dialog.querySelector('.viewer-next').addEventListener('click', () => show(current + 1));
  dialog.querySelector('.close-viewer').addEventListener('click', () => dialog.close());
  zoom.addEventListener('click', () => {
    const enlarged = dialog.classList.toggle('is-zoomed');
    dialog.style.setProperty('--image-width', `${Math.max(img.naturalWidth, stage.clientWidth)}px`);
    zoom.textContent = enlarged ? 'Вписать' : 'Увеличить';
    zoom.setAttribute('aria-pressed', String(enlarged));
    stage.scrollTo(0, 0);
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (dialog.classList.contains('is-zoomed')) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    img.removeAttribute('src');
    opener?.focus();
  });
}
