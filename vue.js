var vm = new Vue({
	el: '#sabora',
	data: {
		name: 'saber',
		age: '21',
		city: 'Alex',
		inputField: '',
		items: [],
		hideItems: false,
		srch: [],
		hideSrch: true
	},
	methods:  {
		addTodo: function(added){
			this.items.push({message: added});
			this.inputField = '';
			this.hideSrch = true;
			this.hideItems = false;
		},
		del: function(index){
			this.items.splice(index, 1);
		},
		search: function(toSearch){
			for (var i = 0; i < this.items.length; i++) {
				if(this.items[i].message == toSearch)
					this.srch.push({found: toSearch}); 
			}
			this.hideSrch = false;
			this.hideItems = true;
		}
	}
})

// var example1 = new Vue({
//   el: '#example-1',
//   data: {
//     items: [
//       { message: 'Foo' },
//       { message: 'Bar' }
//     ]
//   }
// })