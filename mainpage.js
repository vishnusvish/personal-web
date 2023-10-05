var typed = new Typed(".text",{
    strings:["Frontend Developer","Web Designer","Social Media Promoter"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
   
})

$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbycIu2IXpzZM7Qp-rJDG-i-5N9HaZtzLFArTOkoraxxI9wfAGFe1G-a2XgPhYV2frm83Q/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")

      }
    })
  })
