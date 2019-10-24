<template>
  <div id="app">
    <router-view/>

    


  </div>
  


</template>

<script>
export default {
  name: 'App'
}

	// $(".btn-info").click(() => {
	// 			$.ajax({
	// 				url:"/uploadFile",
	// 				type:"POST",
	// 				processData:false,  //tell jQuery not to process the data
	//                 contentType: false,  //tell jQuery not to set contentType
	//                	data:new FormData($("#formdata")[0]),
	// 				success:function(data) {
	// 					$("#imgurl").attr("src", data);
	// 					$("[name=bookImageUrl]").attr("value",data)
	// 				}
					
	// 			})
	// 		})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
