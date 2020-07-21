const kawuraform = document.getElementsByClassName('form');
kawuraform.addEventListener('submit', function(e){
   e.preventDefault();

   const formData = new FormData(this);

   fetch('https://kawuraweb.herokuapp.com',{
      method: 'post',
      body: formData
   
      }).then(function(response){
         return response.text();
      }).then(function(text){
         console.log(text);
      }).catch(function(error){
         console.error(error);
      })
})



const kawuraForm = document.getElementById('myForm');
kawuraForm.addEventListener('submit', function(e) {
   e.preventDefault();

   const isValidElement = element => {
      return element.name && element.value;
   };

   const formToJSON = elements => [].reduce.call(elements, (data, element) => {
      if (isValidElement(element)) {
      data[element.name] = element.value;
   }
   return data;
   }, {});
   const formData = formToJSON(form.elements);
   console.log(JSON.stringify(formData));

   const url ='https://kawuraweb.herokuapp.com/signin';
   fetch(url,{
      method: 'post',
      body: formData
   }).then(function(response){
      return response.text();
   }).then(function(text){
      console.log(text);
   }).catch(function(error){
      console.log("error");
   })
  
});