function newItem() {

  //1. Adding a new item to the list of items:

  //JavaScript:

  /*   let li = document.createElement("li");
     let inputValue = document.getElementById("input").value;
     let text = document.createTextNode(inputValue);
     li.appendChild(text);

     if (inputValue === '') {
       alert("You must write something!");
     } else {
       let list = document.querySelector('#list');
       list.appendChild(li);
     }
  */

  //jQuery:

  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }


  //2. Crossing out an item from the list of items:

  //JavaScript:

  /*   function crossOut() {
   		li.classList.toggle("strike");
   	}

   	li.addEventListener("dblclick",crossOut);
  */

  //jQuery:

  li.on("dblclick", function() {
    li.toggleClass("strike");
  });

  //3. Adding the delete button "X":

  //JavaScript:
  /*
     let crossOutButton = document.createElement("crossOutButton");
   	crossOutButton.appendChild(document.createTextNode("X"));
   	li.appendChild(crossOutButton);

   	crossOutButton.addEventListener("click", deleteListItem);
   //Adding CLASS DELETE (DISPLAY: NONE) from the css:
     function deleteListItem(){
   		li.classList.add("delete")
   	}
  */

  //jQuery:

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);
  crossOutButton.on("click", function() {
    li.addClass("delete");
  });


  // 4. Reordering the items:
  $('#list').sortable();

}









// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








/*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/
