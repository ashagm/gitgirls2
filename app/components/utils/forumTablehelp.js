const axios = require('axios');


var forumTablehelp = {

	showInfo: function() {
		return axios.get('/forumtable')
			.then(function(response) {
				console.log("forumTablehelp showInfo(response.data.comment): " + response.data[0].comment[0]);
				console.log('forumTablehelp showInfo(response.data): ', response.data[0])
				return response.data
			})
			.catch(function (error) {
    			console.log(error);
 			 });
	},

	postInfo: function(data) {
		// console.log(data)
		// console.log("data area" + data.area)
		return axios.post('/forumpost', {
			title:data.title, 
			category:data.category, 
			author:data.author, 
			content:data.content, 
			location:data.location, 
			condition: data.condition
		})
			.then((response) => {
				// console.log("this is forum;table " + response.data)data;
				return response.data
			});
	}


};

module.exports = forumTablehelp;