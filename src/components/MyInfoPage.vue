<template>
    <div>
        <header>
            <div class="title">            
                <img src="../assets/image/avatar.jpg" alt="">
            </div>
        </header>
        <div>
            <ul>
                <li>用户名</li>    
                <li>密码</li>   
                <li>签名</li>   
            </ul>  
        </div>        
    </div>
</template>

<script>
export default {
    name:'MyInfoPage'
}
</script>

<style scoped>
.title {
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
}
.title img {
    height: 80%;
    width: auto;
    border-radius:50%
}
.title::after {
   content: '>';
    color: #aaa
}
div ul {
    padding-right: 16px;
    padding-left: 16px;
    list-style: none;
}
div li::after {
    content: '>';
    color: #aaa
}
div li {
    display: flex;
    justify-content: space-between;
}

li ~ li {
    margin-top: 30px;
}



</style>
