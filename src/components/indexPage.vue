<template>
  <div class="container">
    <div class="search_title">
      <input type="text" placeholder="请输入书名作者">
      <button>搜索</button>
    </div>
    <div class="xtitle">
      <span>最受关注类图书</span>
      <span>更多</span>
    </div>
    <div class="menu_xwrapper" ref="menuXwrapper">
      <ul>
        <li v-for="book in books" :key="book.bookId">
          <img :src="book.bookImageUrl" alt>
        </li>
      </ul>
    </div>
    <hr>
    <div class="xtitle">
      <span>发现好书</span>
      <span>更多</span>
    </div>
    <div class="menu_ywrapper" ref="menuYwrapper">
      <ul>
        <li v-for="book in books" :key="book.bookId">
          <img :src="book.bookImageUrl" alt>
          <div>
              <span>{{book.bookName}}</span>
              <p>{{book.bookAbstract}}</p>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: "indexPage",
  data() {
    return {
      books:[]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollx = new BScroll(this.$refs.menuXwrapper, {
        scrollX: true
      });
       this.scrolly = new BScroll(this.$refs.menuYwrapper, {
        scrollY: true
      });
    });
    this.axios.get("/api/api/books").then(response => {
      this.books = response.data
    })
  }
};
</script>
<style>
.search_title {
  padding: 9px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  height: 30px;
}
input {
  padding: 3px;
  border: 1px solid #d0d0d0;
  width: 75%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
button {
  background-color: #ffffff;
  border: 1px solid #d1d1d1;
  width: 20%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
button:focus,
input:focus {
  outline: none;
}

.xtitle {
  display: flex;
  justify-content: space-between;

  align-items: flex-end;
  margin: 6px 9px;

  border-left: #259b24 4px solid;
}
.xtitle span:last-child {
  color: #259b24;
}
.menu_xwrapper {
  margin: 0 auto;
  width: 95%;
  height: 160px;
  overflow: hidden;
  position: relative;
}
.menu_ywrapper {
  margin: 0 auto;
  width: 95%;
  height: 340px;
  overflow: hidden;
  position: relative;
}
.menu_ywrapper ul{
  position: absolute;
  list-style: none;
  padding: 0;
  margin-top: 6px;
  margin-bottom: 6px;
}
.menu_xwrapper ul {
  box-sizing: border-box;
  position: absolute;
  list-style: none;
  padding: 0;
  margin-top: 6px;
  margin-bottom: 6px;
  white-space: nowrap;
}
.menu_ywrapper li {
  text-align: left;
  display: flex; 
  justify-content: flex-start
}
.menu_ywrapper li div{
    padding-left: 16px;
    width: 60%;
}
.menu_ywrapper span {
    color: black;
}
.menu_ywrapper p{
    color: #888;
}
.menu_ywrapper li~li {
    padding-top: 4px; 
}

.menu_xwrapper li {
  display: inline-block;
}
.menu_xwrapper li~li {
    padding-left: 16px
}
img {
  width: 100px;
  height: 140px;
}
</style>
