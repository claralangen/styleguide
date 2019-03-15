<template>
    <div>
        <div v-if="modal" class="overlay"></div>
        <Title content="Photographies"></Title>
        <Paragraph>Médiamétrie, c’est avant tout une histoire d’hommes et de femmes« qui observent des hommes et des femmes ! ».</br>
        Dans nos visuels, nous retrouvons des hommes et des femmes dans des situations en écho avec notre travail, à l’interne, comme à l’externe, 
        avec un écran ou dans la pratique de loisirs numériques.
        </Paragraph>
        <div class="btn-container">
            <button class="tag-button all subtitle-secondary" v-on:click="displayAllPhotos(categories)" > all </button>
            <button 
                    v-for="category in categories"
                    :key="category.id"
                    class="tag-button subtitle-secondary"
                    v-on:click="displayPhotos(category)"
                    
            >
            {{category.name}}
            </button>
        </div>
        
        <div class="gallery">
            <figure v-for="category in categories"
                :key="category.id"
                v-if="category.tag"
                >
                <img v-on:click="openModal" :src="category.urls" class="photo" alt="">
            </figure>
        </div>
        <div v-if="modal" class="modal">
            <img :src="modalsrc" alt="">
            <img src="../assets/close.svg" class="close" alt="fermer" v-on:click="closeModal">
        </div>
        
    </div>
</template>

<script>
import Title from "../ui-components/title";
import Paragraph from "../ui-components/paragraph";

    export default {
        name : "Photo",
        components: {
            Title,
            Paragraph
        },
        data: function(){
            return{
                modal: false,
                modalsrc: '',
                tag : true,
                categories : [
                    {name: 'television', urls: ['https://picsum.photos/300/170/?image=8'], tag: true },
                    {name: 'desktop', urls: ['https://picsum.photos/400/270/?image=17'], tag: true },
                    {name: 'mobile', urls: ['https://picsum.photos/600/190/?image=57'], tag: true },
                    {name: 'tablette', urls: ['https://picsum.photos/350/140/?image=47'], tag: true },
                    {name: 'radio', urls: ['https://picsum.photos/300/170/?image=37'], tag: true },
                    {name: 'cinéma', urls: ['https://picsum.photos/300/170/?image=15'], tag: true },
                    {name: 'buisness', urls: ['https://picsum.photos/600/400/?image=159'], tag: true },                   
                ]
            }
        },
        methods:{
            displayPhotos(category){
                category.tag = !category.tag;
            },
            displayAllPhotos(categories){
                for( var i=0 ; i < categories.length ; i++){
                    categories[i].tag = true;
                }
            },
            openModal(event){
                this.modalsrc = event.target.src;
                this.modal = !this.modal;
            },
            closeModal(){
                this.modal = !this.modal;
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../variables';
    .btn-container{
       margin: 10px 0 50px; 
    }
    .tag-button{
        border: solid 1px #B2B2B2;
        padding: 18px 30px;
        border-radius: 3px;
        margin: 0 10px 10px 0;
        &:hover{
            cursor: pointer;
        }
        &:focus{
           color: $red;
           border: solid 2px $red;
           outline: none;
        }
        .all{
            
        }
    }
    .gallery{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        grid-gap: 15px;
    }
    .photo{
        border-radius: 2px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover{
            cursor:pointer;
        }
    }
    .modal{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70vw;
        height: 60vh;
        background: white;
        border-radius: 6px;
        .close{  
        position: absolute;
        top: 20px;
        right: 20px;
        transform: rotate(45deg);
        width: 30px;
        &:hover{
            cursor: pointer;
        }
        }
    }
</style>