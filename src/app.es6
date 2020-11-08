document.addEventListener('DOMContentLoaded', event => {
  document.querySelector('input[name="enemy"]').focus();

  document.querySelector('input[name="enemy"]').addEventListener('input', event => {
    renderEnemy();
  });

  document.querySelector('input[name="drop"]').addEventListener('input', event => {
    renderDrop();
  });

  document.querySelector('input[name="enemy"]').addEventListener('keydown', event => {
    switch(event.key) {
      case 'Up':
      case 'ArrowUp':
        if(event.shiftKey) {
          incrementDrop();
        }
        if(event.altKey) {
          incrementDrop();
          event.preventDefault();
        }
        break;
      case 'Down':
      case 'ArrowDown':
        if(event.shiftKey) {
          decrementDrop();
        }
        if(event.altKey) {
          decrementDrop();
          event.preventDefault();
        }
        break;
    }
  })

  
  const renderEnemy = () => {
    const view = document.querySelector('[data-enemy]');
    const input = document.querySelector('input[name="enemy"]');
    view.textContent = input.value;
  };

  const renderDrop = () => {
    const view = document.querySelector('[data-drop]');
    const input = document.querySelector('input[name="drop"]');
    view.textContent = input.value;
  };

  const incrementDrop = () => plusDrop(1);
  const decrementDrop = () => plusDrop(-1);

  const plusDrop = num => {
    const view = document.querySelector('[data-drop]');
    const input = document.querySelector('input[name="drop"]');
    input.value = parseInt(input.value) + num;
    view.textContent = input.value;
  };
});
