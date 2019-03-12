<template>
    <div class="searchContainer">
        <div v-on:click="$emit('toggleSearch')" class="icon-container">
            <img src="../assets/back_arrow.svg" alt="back" class="icon">
        </div>
        <div class="search">
            <input type="text" placeholder="Recherche" autofocus>
            <ul class="results">
                <li class="result">
                    <span class="hash"></span>
                    <div>
                        <p class="result-item">radio-button</p>
                        <p class="result-section">design</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';
.searchContainer{
position: absolute;
top: 0;
left: 0;
z-index: 10;
display: flex;
padding: 30px 11px;
background: white;
height: 100vh;
.icon-container{
&:hover{
        @include darken-hover(#EFEFEF,2%);
        cursor: pointer;
    }
    &:active{
      @include darken-hover(#EFEFEF,4%);
    }  
}
}
.search{
    padding: 12px 40px;
}
input{
  padding: 0;
  border-radius: 0;
  background-color: transparent;
  color: #4C4C4C;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  border: none;
  outline: none;
  &::placeholder{
      color: #7E7E7E;
      font-weight: 100;
  }
}
.results{
    padding: 40px 0;
}
.result{
    margin-top: 30px;
    display: flex;
    &-item{
        font-family: Verdana;
        font-size: 18px;
        color: rgba(0,0,0,0.70);
        letter-spacing: 0;
    }
    &-section{
        margin-top: 10px;
        text-transform: uppercase;
        font-family: Verdana;
        font-size: 10px;
        color: #B2B2B2;
        letter-spacing: 3.12px;
    }
}

.hash{
    display: block;
    margin-right: 20px;
    height: auto;
    width: 3px;
    background-color: $red;
}

</style>