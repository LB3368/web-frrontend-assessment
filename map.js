const randomRestaurantBtn = document.querySelector("#random-restaurant-btn")

randomRestaurantBtn.addEventListener("click", getRandomRestaurant)

function getRandomRestaurant() {
	const restaurants = ["That Burger Spot", "Olive Garden", "Carrabba's"]

	const randomIndex = Math.floor(Math.random() * restaurants.length)
	const randomRestaurant = restaurants[randomIndex];

	alert(`I recommend ${randomRestaurant} for your next meal!`)
}