const inputs = document.querySelectorAll('.controls input')

function handleColor() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change',handleColor))
inputs.forEach(input => input.addEventListener('mousemove',handleColor))
