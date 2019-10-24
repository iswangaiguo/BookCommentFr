<template>
    <div>
        <ul class="category">
            <li v-for="stdo in category" :key="stdo.index">
                {{stdo}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            category: [
                '小说', '爱情','历史','外国文学','青春','励志','随笔','传记','推理','旅行','奇幻','经营'       
            ]
        }
    }
}
</script>

<style scoped>
.category {
    padding-left: 16px;
    padding-right: 16px;
    color:black;
    list-style: none
}
.category li {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
}
.category li::after{
    content: '>';
    color: #bbb;
}
</style>

