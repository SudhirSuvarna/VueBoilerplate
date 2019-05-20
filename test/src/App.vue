<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.container {
	 width: 100%;
	 height: 900px;
	 background-color: #fff;
	 padding: 50px 80px;
}
 $use-filters: true;

[card-stack] {
  will-change: transform;
  position: relative;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
}

[name="card-set"] {
  display: none;
  &:checked {
    //Card 1
    + [card] {
      display: flex;
      opacity: 1;
      @if ($use-filters) {
        filter: blur(0);
      }
      transform: translateY(0) scale(1);
      transition: transform 1s, opacity 1s, filter .25s;
      transition-delay: .3s;
      z-index: 0;
      //card 2
      ~ [card] {
        z-index: -1;
        display: flex;
        opacity: .9;
        @if ($use-filters) {
          filter: blur(1px);
        }
        transform: translateY(1.2rem) scale(.95);
        transition: transform 1.5s, opacity 1.5s, filter .5s;
        transition-delay: .4s;
        //card 3
        ~ [card] {
          z-index: -2;
          display: flex;
          opacity: .7;
          @if ($use-filters) {
            filter: blur(2px);
          }
          transform: translateY(2.4rem) scale(.9);
          transition: transform 2s, opacity 2s, filter 1.5s;
          transition-delay: .5s;
          //card 4... you know what... I shouldn't have to explain anymore.
          ~ [card] {
            z-index: -3;
            display: flex;
            opacity: .5;
            @if ($use-filters) {
              filter: blur(3px);
            }
            transform: translateY(3.6rem) scale(.85);
            transition: transform 2.5s, opacity 2.5s, filter 2s;
            transition-delay: .7s;
            //card 5+
            ~ [card] {
              z-index: -4;
              display: flex;
              opacity: 0;
              @if ($use-filters) {
                filter: blur(4px);
              }
              transform: translateY(5rem) scale(.8);
              transition: transform 3s, opacity 3s, filter 2.5s;
              transition-delay: .8s;
            }
          }
        }
      }
    }
  }
}

[card] {
  display: flex;
  will-change: filter opacity transform;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: white;
  opacity: 0;
  transform: translateX(0) translateY(calc(-100% - 1rem)) scale(1);
  transition: transform .5s, opacity .2s .3s, filter .1s;
  transition-timing-function: ease-in;
  box-shadow: 0 .2rem 0 rgba(black, .2);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  min-height: 50vh;
  &::before {
    content: '';
    display: block;
    padding-bottom: 130%;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    text-align: center;
  }
  label {
    color: white;
    display: inline-block;
    padding: 1rem 2rem;
    margin: 1rem;
    background-color: #47cf73;
    border-radius: 200px;
    user-select: none;
    &:hover {
      background-color: lighten(#47cf73, 10%);
    }
    &:active {
      background-color: darken(#47cf73, 20%);
    }
  }
}
//cool stuff ends here.
body {
  background: darken(#47cf73, 20%);
}
</style>
