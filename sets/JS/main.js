/*===== COPY CONTACT =====*/
const copyButton = document.getElementById('copy-button')

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const text = copyButton.dataset.copy
    try {
      await navigator.clipboard.writeText(text)
      copyButton.textContent = 'コピー済み'
    } catch (e) {
      copyButton.textContent = 'コピー失敗'
    }
    setTimeout(() => { copyButton.textContent = 'コピー' }, 1600)
  })
}
