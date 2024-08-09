import {Page} from 'playwright';

export async function createMoveIndicator(page: Page) {
  await page.evaluate(() => {
    const moveIndicator = document.createElement('div');
    moveIndicator.id = 'move-indicator';
    moveIndicator.style.position = 'absolute';
    moveIndicator.style.background = 'rgba(0, 0, 255, 0.5)';
    moveIndicator.style.borderRadius = '50%';
    moveIndicator.style.width = '20px';
    moveIndicator.style.height = '20px';
    moveIndicator.style.pointerEvents = 'none';
    moveIndicator.style.zIndex = '9999';

    document.body.appendChild(moveIndicator);

    document.addEventListener('mousemove', (event) => {
      moveIndicator.style.top = `${event.clientY - 10}px`;
      moveIndicator.style.left = `${event.clientX - 10}px`;
    });

    document.addEventListener('mousedown', () => {
      moveIndicator.style.backgroundColor = 'yellow';
    });

    document.addEventListener('mouseup', () => {
      moveIndicator.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    });
  });
}
