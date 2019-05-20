<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<style lang="scss">
.container {
	 width: 100%;
	 height: 900px;
	 background-color: #fff;
	 padding: 50px 80px;
}
 .container .card-stack {
	 width: 500px;
	 height: 250px;
	 position: absolute;
	 margin: 20px auto;
}

 .invoice-detail .buttons,
 .container .card-stack .buttons {
	 display: none;
	 position: absolute;
	 background: rgba(0,0,0,0.46);
	 border: 2px solid rgba(255,255,255,0.7);
	 border-radius: 50%;
	 width: 35px;
	 height: 35px;
	 left: 0;
	 //top: 55%;
	 color: rgba(255,255,255,0.7);
	 text-align: center;
	 line-height: 35px;
	 text-decoration: none;
	 font-size: 22px;
	 z-index: 100;
	 outline: none;
	 transition: all 0.2s ease;
}

.invoice-detail .buttons {
	display: block;
	left: 15px;
	right: auto;
	top: 55%;
}

.container .card-stack .buttons:hover {
	 transform: scale(1.3,1.3);
}

.container .card-stack .up {
	 left: 45%;
	 right: auto;
    -webkit-transform: rotate(90deg)  !important; /* Safari and Chrome */
    -moz-transform: rotate(90deg)  !important;   /* Firefox */
    -ms-transform: rotate(90deg)  !important;   /* IE 9 */
    -o-transform: rotate(90deg)  !important;   /* Opera */
    transform: rotate(90deg) !important;
}
 .container .card-stack .down {
    left: 45%;
    bottom: -45%;
     -webkit-transform: rotate(90deg)  !important; /* Safari and Chrome */
    -moz-transform: rotate(90deg)  !important;   /* Firefox */
    -ms-transform: rotate(90deg)  !important;   /* IE 9 */
    -o-transform: rotate(90deg)  !important;   /* Opera */
    transform: rotate(90deg) !important;
	 //left: auto;
	 //right: 15px;
}

 .container .card-stack .next {
	 left: auto;
	 right: 15px;
   top: 55%;
}
 .container .card-stack .carousel .buttons:hover {
	 color: #C01313;
	 background: #fff;
}
 .container .card-stack .card-list {
	 width: 300px;
}
 .container .card-stack .card-list li {
	 transition: all 100ms ease-in-out;
	 border-radius: 2px;
	 position: absolute;
	 list-style: none;
	 height: 300px;
	 -webkit-box-shadow: 0 2px 15px 1px rgba(225,225,225,0.5);
	 box-shadow: 0 1px 4px 1px rgba(0,0,0,0.5);
	 left: 0;
	 right: 0;
	 margin: 0 auto;
	 padding-top: 20px;
	 text-align: center;
	 background-size: cover;
}
 .container .card-stack .card-list li:nth-child(1) {
	 top: 72px;
	 width: 60%;
}
 .container .card-stack .card-list li:nth-child(2) {
	 top: 60px;
	 width: 70%;
}
 .container .card-stack .card-list li:nth-child(3) {
	 top: 48px;
	 width: 80%;
}
 .container .card-stack .card-list li:nth-child(4) {
	 top: 36px;
	 width: 90%;
}
 .container .card-stack .card-list li:nth-child(5) {
	 top: 24px;
	 width: 100%;
}
 .container .card-stack:hover > .buttons.up {
	 display: block;
	 animation: bounceInLeft 200ms;
}
 .container .card-stack:hover > .buttons.down {
	 display: block;
	 animation: bounceInRight 200ms;
}

.container .card-stack:hover > .buttons.next {
	 display: block;
	 animation: bounceInRight 200ms;
}


 .transformThis {
	 animation: scaleDown 500ms;
}
 .transformPrev {
	 animation: scaleUp 100ms;
	 display: none;
}
 @keyframes scaleUp {
	 0% {
		 transform: scale(1.2) translateY(50px);
		 opacity: 0;
	}
	 20% {
		 transform: scale(1.15) translateY(40px);
		 opacity: 0.10;
	}
	 40% {
		 transform: scale(1.10) translateY(30px);
		 opacity: 0.20;
	}
	 60% {
		 transform: scale(1.05) translateY(20px);
		 opacity: 0.40;
	}
	 80% {
		 transform: scale(1.01) translateY(10px);
		 opacity: 0.80;
	}
	 100% {
		 transform: scale(1) translateY(0);
		 opacity: 1;
	}
}
 @keyframes scaleDown {
	 0% {
		 transform: scale(1) translateY(0);
		 opacity: 1;
	}
	 20% {
		 transform: scale(1.01) translateY(20px);
		 opacity: 0.80;
	}
	 40% {
		 transform: scale(1.05) translateY(40px);
		 opacity: 0.40;
	}
	 60% {
		 transform: scale(1.10) translateY(60px);
		 opacity: 0.20;
	}
	 80% {
		 transform: scale(1.15) translateY(80px);
		 opacity: 0.10;
	}
	 100% {
		 transform: scale(1.2) translateY(100px);
		 opacity: 0;
	}
}
 @keyframes scaleCard {
	 0% {
		 top: 5px;
	}
	 100% {
		 top: 24px;
	}
}
 @keyframes bounceInLeft {
	 0% {
		 opacity: 0;
		 transform: translateX(40px);
	}
	 100% {
		 transform: translateX(0);
	}
}
 @keyframes bounceInRight {
	 0% {
		 opacity: 0;
		 transform: translateX(-40px);
	}
	 100% {
		 transform: translateX(0);
	}
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
