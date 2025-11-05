//your JS code here. If required.
const openBtn = document.getElementById('openModal');
    const modal = document.getElementById('modalRoot');
    const closeBtn = modal.querySelector('.close-modal');

    function openModal() {
      modal.classList.add('open');
    }
    function closeModal() {
      modal.classList.remove('open');
    }

    // Open on button click
    openBtn.addEventListener('click', openModal);

    // Close on close button
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside modal-content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // (Optional) Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
