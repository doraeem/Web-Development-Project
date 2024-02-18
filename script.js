document.getElementById("displayButton").addEventListener("click", function() {
    document.getElementById("formContainer").style.display = "block";
  });
  
  document.getElementById("exampleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
   
    document.getElementById("formDataName").textContent = name;
    document.getElementById("formDataEmail").textContent = email;
    document.getElementById("formDataMessage").textContent = message;
  
   
    document.getElementById("formData").style.display = "block";
  
  
    document.getElementById("exampleForm").reset();
  });
  
  document.getElementById("editButton").addEventListener("click", function() {
 
    document.getElementById("formData").style.display = "none";
  
    document.getElementById("formContainer").style.display = "block";
  
    
    const formDataName = document.getElementById("formDataName").textContent;
    const formDataEmail = document.getElementById("formDataEmail").textContent;
    const formDataMessage = document.getElementById("formDataMessage").textContent;
    
    document.getElementById("name").value = formDataName;
    document.getElementById("email").value = formDataEmail;
    document.getElementById("message").value = formDataMessage;
  });
  
  document.getElementById("deleteButton").addEventListener("click", function() {
 
    document.getElementById("exampleForm").reset();
   
    document.getElementById("formData").style.display = "none";
  });
 
  