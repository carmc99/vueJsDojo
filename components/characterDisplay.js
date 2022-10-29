app.component("character-display", {
  template:
    /*html*/
    `     <div class="character-image">
            <img :src="character.image" alt="Profile image" />
          </div>
          <div class="character-info">
            <h1>{{name}}</h1>
            <h2>{{species}}</h2>
            <p>{{info}}</p>
            <small v-if="character.gender === 'Male'"
              >Episodes that him appears {{ nEpisodes }}</small
            >
            <small v-else-if="character.gender === 'Female'"
              >Episodes that her appears {{ nEpisodes }}</small
            >
            <small v-else> Episodes that it appears {{ nEpisodes }}</small>
            <span v-if="!favorites" v-on:click="addToFavorites" class="material-icons favorite" >star_border</span>
            <span v-else v-on:click="removeToFavorites" class="material-icons favorite">star</span>
          </div>`,
  props: {
    character: {
      type: Object,
      required: true,
    },
    favorites: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    info() {
      return `${this.character.gender} - ${this.character.status}`;
    },
    nEpisodes() {
      return this.character.episode?.length;
    },
    name() {
      return this.character.name;
    },
    species() {
      return this.character.species;
    },
  },
  methods: {
    addToFavorites() {
      this.$emit("add-to-favorites", this.character.id);
    },
    removeToFavorites() {
      this.$emit("remove-to-favorites", this.character.id);
    },
  },
  emits: ["add-to-favorites", "remove-to-favorites"],
});
