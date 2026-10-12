/*===== COPY CONTACT =====*/
document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy)
      button.textContent = 'コピー済み'
    } catch (e) {
      button.textContent = 'コピー失敗'
    }
    setTimeout(() => { button.textContent = 'コピー' }, 1600)
  })
})

/*===== SHOW HEADER ON SCROLL =====*/
const header = document.getElementById('header')

const toggleHeader = () => {
  header.classList.toggle('is-visible', window.scrollY > 240)
}
window.addEventListener('scroll', toggleHeader, { passive: true })
toggleHeader()

/*===== REVEAL SECTIONS =====*/
const revealTargets = document.querySelectorAll('.reveal')

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-shown')
        observer.unobserve(entry.target)
      }
    })
  }, { rootMargin: '0px 0px -10% 0px' })

  revealTargets.forEach(target => observer.observe(target))
} else {
  revealTargets.forEach(target => target.classList.add('is-shown'))
}
