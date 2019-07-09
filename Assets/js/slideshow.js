// var slideshow = {
// 	photoList: ['photo1', 'photo2', 'photo3', 'photo4'],

// 	currentPhotoIndex: 0,

// 	nextPhoto: function(){
// 		if(this.currentPhotoIndex + 1 < this.photoList.length){
// 			this.currentPhotoIndex++;
// 			console.log(this.photoList[this.currentPhotoIndex]);
// 		}else{
// 			console.log('End of Slideshow');
// 		}
// 	},

// 	prevPhoto: function(){
// 		if(this.currentPhotoIndex > 0){
// 			this.currentPhotoIndex--;
// 			console.log(this.photoList[this.currentPhotoIndex]);
// 		}else{
// 			console.log('Beginning of Slideshow');
// 		}
// 	},
// 	getCurrentPhoto: function(){
// 		return this.photoList.[this.currentPhotoIndex];
// 	}		 	
// };

var slideshow = {
	photoList: ['Assets/img/dog.jpg', 'Assets/img/dog2.jpg', 'Assets/img/dog3.jpg', 'Assets/img/dog4.jpg'],
	currentPhotoIndex: 0,
	playInterval:undefined,
	nextPhoto: function(){
		if(this.currentPhotoIndex + 1 < this.photoList.length){
			this.currentPhotoIndex++;
			this.displayPhoto();
		}else{
			this.pause();
			console.log("End of Slideshow");
		}
	},
	prevPhoto: function(){
		if(this.currentPhotoIndex > 0){
			this.currentPhotoIndex--;
			this.displayPhoto();
		}else{
			console.log('Beginning of Slideshow');
		}
	},
	displayPhoto: function(){
		$("#slideshow-image").attr('src', this.getCurrentPhoto());
	},
	getCurrentPhoto: function(){
		return this.photoList[this.currentPhotoIndex];
	},

	play: function(){
		this.playInterval = window.setInterval(this.nextPhoto.bind(this),2000);
	},

	pause: function() {
	clearInterval(this.playInterval);
	}

};

slideshow.displayPhoto();

$('#prev-photo').click(function(){
	slideshow.prevPhoto();
});

$('#next-photo').click(function(){
	slideshow.nextPhoto();
});

$('#play').click(function(){
	slideshow.play();
});

$('#pause').click(function(){
	slideshow.pause();
});