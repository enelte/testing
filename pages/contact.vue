<template>
  <div class="contact container">
    <div class="row row-no-gutters">
      <div class="col-xs-12 col-md-6">
        Name:
        <p>
          Job:
        </p>
      </div>
      <div class="col-xs-6 col-md-6">
        <div class="inputname">
          <b-form-input v-model="name" placeholder="Enter your name">
          </b-form-input>
        </div>
        <div class="inputname">
          <b-form-input v-model="job" placeholder="Enter your job">
          </b-form-input>
        </div>
      </div>
    </div>
    <button @click="addMember">Add</button>
    <div class="table">
      <b-table hover :items="dataMember"></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ACT_USER } from '../constants/action-types'
import { GTR_USER } from '../constants/getter-types'
export default {
  data() {
    return {
      name: '',
      job: ''
    }
  },
  computed: {
    ...mapGetters({
      dataMember: GTR_USER.base + '/' + GTR_USER.getUser
    })
  },
  methods: {
    addMember() {
      const data = {
        name: this.name,
        job: this.job
      }
      console.log(JSON.stringify(data))
      this.$store.dispatch(ACT_USER.base + '/' + ACT_USER.getUser, data)
      this.name = ''
      this.job = ''
    }
  }
}
</script>
