var vm = new Vue({
  el: '#app',
  data: {
    postcomment: ''
  },
  computed: {
    textAreaLength: function () {
        return 150 - this.postcomment.length;
    },
    computedColor: function(){
      col = '#33a';
      if(this.textAreaLength < 20){
        col = '#3a3';
      }
      if(this.textAreaLength < 1){
        col = '#a33';
      }
      return col;
    }
  }
})