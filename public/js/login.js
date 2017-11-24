$( () =>{
  $(".input-login").focus(function(){
    if(this.value == ""){
      this.__placeholder = this.placeholder;
      this.placeholder = "";
    }
  });

  $(".input-login").blur(function(){
    if(this.value == ""){
      this.placeholder = this.__placeholder;
    }
  });
});
