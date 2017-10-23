<template>
  <div>
    <form>
      <div class="from-group">
        <label for="bookName" class="control-label">书名</label>
        <input type="text" id="bookName" class="form-control" placeholder="请输入书名" autocomplete="off"
               v-model="book.bookName">
      </div>
      <div class="from-group">
        <label for="bookCover" class="control-label">书的封面</label>
        <input type="text" id="bookCover" class="form-control" placeholder="请输入封面" autocomplete="off"
               v-model="book.bookCover">
      </div>
      <div class="from-group">
        <label for="bookPrice" class="control-label">书的价格</label>
        <input type="text" id="bookPrice" class="form-control" placeholder="请输入价格" autocomplete="off"
               v-model="book.bookPrice">
      </div>
      <div class="from-group">
        <button type="button" class="btn btn-primary" @click="add">添加图书</button>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        book: {
          bookName: '',
          bookPrice: '',
          bookCover: ''
        }
      }
    },
    components: {},
    methods: {
      add(){
        this.$http.post('/book', this.book).then(() => {
          this.$router.push('/list');//路由跳转
        });
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
