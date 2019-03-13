<template>
    <div v-if="!clickable && !double">
        <div class="frame"><slot name="frame"></slot></div>
         <div class="code code-simple">
            <slot name="code"></slot>
        </div>
    </div>
    <div v-else-if="!clickable && double" class="frames">
        <div class="frame"><slot name="frame"></slot></div>
         <div class="code">
            <slot name="code"></slot>
        </div>
    </div>
    <div v-else="clickable">
        <div class="frame"><slot name="frame"></slot></div>
         <div v-on:click="openCode" 
              v-bind:class = "{ open : codeOpen}"
              class="code">
            <img src="../assets/close.svg" alt="fermer">
            <slot v-if="codeOpen " name="code"></slot>
        </div>
    </div>
</template>

<script>

    export default {
       name: "Frame",
       props:{
           content: String,
           clickable: Boolean,
           double: Boolean
       },
       data(){
           return{
               codeOpen : false
           }
       },
       methods:{
           openCode(){
               this.codeOpen = !this.codeOpen
           }
       }
    }
</script>

<style lang="scss" scoped>
.frames{
    display:flex;
    justify-content: space-between;
    
    .frame{
        margin: 10px 5px 0 0;
        padding: 30px 45px;
        width: 48%;
    }
    .code{
        margin: 10px 0 0 5px;
        padding: 30px 45px;
        width: 48%;
    &:hover{
        cursor: auto;
        background-color: #F4F5F7;
    }
    }
}
.frame{
    margin-top: 50px;
    padding: 30px 40px;
    border: 1px solid #E6E6E6;
    border-radius: 3px;
}
.code{
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding: 20px;
    background-color:#F4F5F7; 
    border: 1px solid #E6E6E6;
    border-radius: 3px;
    transition: 0.4s ease;
    img{
        transition: 0.4s ease;
    }
    &:hover{
        cursor:pointer;
        background-color: #E6E6E6;
    }
    &-simple{
        &:hover{
        cursor:auto;
        background-color: #F4F5F7;
    }
    }
}
.open{
    display: block;
    padding: 40px;
    img{  
    position: absolute;
    top: 20px;
    right: 20px;
    transform: rotate(45deg);
    }
}
</style>