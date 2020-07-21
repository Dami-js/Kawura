//test for validity and display fallback message onclicking submit button
(function() {
   window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('form');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
         form.addEventListener('submit', function(event) {
         if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
         }
         form.classList.add('was-validated');
         }, false);
      });
   }, false);
   })();






/* the function below preveny default submission of form data and run our custom script
* @param {Event}, @param{HTMLFormControlsCollection}
* @return {void}, @return{object}
*/
//function that checks for validity
const isValidElement = element => {
   return element.name && element.value;
 };


const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    // Make sure the element has the required properties.
   if (isValidElement(element)) {
      data[element.name] = element.value;
   }
   return data;
 }, {});

 const handleFormSubmit = event => {
   // Stop the form from submitting since we’re handling that with AJAX.
   event.preventDefault();
   // Call our function to get the form data.
   const data = formToJSON(form.elements);
   // Demo only: print the form data onscreen as a formatted JSON object.
   const dataContainer = document.getElementsByClassName('result-display')[0];
   // Use `JSON.stringify()` to make the output valid, human-readable JSON.
   dataContainer.textContent = JSON.stringify(data, null, "  ");
   // ...this is where we’d actually do something with the form data...
 };

 const form = document.getElementsByClassName('form')[0];
 form.addEventListener('submit', handleFormSubmit);
