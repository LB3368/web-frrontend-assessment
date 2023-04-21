console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault()
	alert('Form submitted successfully!')
	
	console.log('form submit')
}


let form = document.querySelector('#contact')

form.addEventListener('submit', handleSubmit)

let profilePic = document.querySelector('img')
profilePic.addEventListener('mouseover', ( ) => {
	alert('You look amazing today!')
})
