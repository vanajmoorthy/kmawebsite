<template>
	<div id="app">
		<div id="nav">
			<div>
				<h1>Kumar Moorthy & Associates</h1>
			</div>
			<div>
				<router-link to="/">Home</router-link>
				<router-link to="/awards">Awards</router-link>
				<router-link to="/about">About</router-link>
			</div>
		</div>
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<style>
::-webkit-scrollbar {
	display: none;
}

.fade-enter-active,
.fade-leave-active {
	transition-property: opacity;
	transition-duration: 0.25s;
}

.fade-enter-active {
	transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}

@font-face {
	font-family: "AirbnbBlack";
	src: url(./fonts/AirbnbCereal-Black.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbBold";
	src: url(./fonts/AirbnbCereal-Bold.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbBook";
	src: url(./fonts/AirbnbCereal-Book.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbExtraBold";
	src: url(./fonts/AirbnbCereal-ExtraBold.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbLight";
	src: url(./fonts/AirbnbCereal-Light.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbMedium";
	src: url(./fonts/AirbnbCereal-Medium.ttf) format("truetype");
}
</style>

<style scoped>
#app {
	margin: 2rem 8rem;
}

#nav {
	display: flex;
	height: 5rem;
	justify-content: space-between;
	align-items: center;
	font-family: "AirbnbMedium";
	margin-bottom: 10rem;
}

a {
	color: black;
	margin-left: 2rem;
	text-decoration: none;
}

a:hover {
	color: #999999;
	transition: all ease 0.3s;
}

@media screen and (max-width: 940px) {
	#app {
		margin: 2rem 1rem;
	}
}

h1 {
	font-size: 1.8rem;
}

@media screen and (max-width: 710px) {
	#app {
		margin: 2rem 2rem;
	}
	#nav {
		flex-direction: column;
	}
	h1 {
		text-align: center;
		font-size: 1.3rem;
	}
	a {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		text-align: center;
	}
}

#nav a.router-link-exact-active {
	text-decoration: underline !important;
}
</style>
