// check off the specific ToDo if clicked
$("ul").on("click","li", function(){
	// Toggle the class called ".completed"
	$(this).toggleClass("completed");

	// Method - 2 , but its little bit longer !!

	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color : "black",
	// 		textDecoration : "none"
	// 	})
	// } else {
	// 	$(this).css({
	// 		color : "gray",
	// 		textDecoration : "line-through"
	// 	})
	// }
});

// configuring the delete button
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// configuring the input 
$("input[type = 'text']").keypress(function(event){
	// check if the user press enter key
	if (event.which === 13) {
		// grabing the value typed in the input box and storing it to a var
		var newTodo = $(this).val();
		// making the input box empty after the user press enter
		$(this).val("");
		// push the typed value to the ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +newTodo+ "</li>");
	}
});

// configuring the plus icon
$(".fa-plus-circle").click(function(){
	$("input[type = 'text']").fadeToggle();
});
