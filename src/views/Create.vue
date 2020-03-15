<template>
 <div class="row">
   <div class="col s6 offset-s3">
     <h1>Create task</h1>
     <form @submit.prevent="submitHandler">
       <div class="input-field">
         <input type="text" v-model="title" id="title" class="validate" required>
         <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
       </div>

       <div class="chips" ref="chips"></div>

        <div class="input-field">
            <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
            <label for="description">Description</label>
            <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>

        <input type="text" ref="datepicker">

        <button class="btn" type="submit">Create task</button>
     </form>
   </div>
 </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'create',
  data: () => ({
    description: '',
    title: '',
    chips: null,
    date: null
  }),
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags'
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        tags: this.chips.chipsData,
        date: this.date.date
      }

      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  },

  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }

     if (this.chips && this.chips.destroy) {
      this.chips.destroy()
    }
  }
}
</script>
