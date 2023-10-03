   const title = document.getElementById("title").value;
   const author = document.getElementById("author").value;
   const isbn = document.getElementById("isbn").value;

   document.getElementById("book-form").addEventListener("submit", (event) => {
    	event.preventDefault();
	    let newRow = document.createElement('tr')
    	newRow.innerHTML = `
			<td>${title}<td/>
            <td>${author}<td/>
            <td>${isbn}<td/>
			`;
       document.getElementById('book-list').appendChild('newRow')
            // Clear the input fields
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("isbn").value = "";

	
})