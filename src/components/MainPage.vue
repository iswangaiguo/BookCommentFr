<template>
  <div>
    <header>
        <span>BookComment</span>
    </header>
    <router-view></router-view>
    <div class="footer">
      <ul>
        <router-link to="/index" tag="li">
          <li>
            <i class="iconfont icon-zhuye"></i>
            <p>主页</p>
          </li>
        </router-link>
        <router-link to="/category" tag="li">
          <li>
            <i class="iconfont icon-tubiao13"></i>
            <p>分类</p>
          </li>
        </router-link>
        <router-link to="/message" tag="li">
        <li>
          <i class="iconfont icon-xiaoxi"></i>
          <p>消息</p>
        </li>
        </router-link>
        <router-link to="/myinfo" tag="li">
        <li>
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
        </li>
          </router-link>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less" type="text/less">
.footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
}
.footer ul {
  padding: 6px 32px 0px 32px;
  margin-bottom: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f9f9f9;
}
ul p {
  font-size: 0.8rem;
  margin: 0;
}
.router-link-exact-active {
  color: #20AB1F
}
i {
  font-size: 1.3rem
}
header{
  margin: 0px 0px 6px 0px;
  height: 40px;
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center
}
header span {
  color: black;
  font-size: 1.2rem
  
}

</style>
