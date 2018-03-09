export default function initials(name) {
  try {
    return name.trim().split(' ').map(word => word[0].toUpperCase()).slice(0, 2).join('')
  } catch (e) {
    console.log(e)
    return '?'
  }
}
