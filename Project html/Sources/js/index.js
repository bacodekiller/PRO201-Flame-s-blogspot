(function () {
  $('.gallery-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.find('figcaption').text() || item.el.attr('title');
      }
    },
    zoom: {
      enabled: true
    },
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      tCounter: ''
    },
    disableOn: function () {
      if ($(window).width() < 640) {
        return false;
      }
      return true;
    }
  });

}).call(this);


check form sign-in
function validateForm() {

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  if (username == '') {
    alert('Bạn chưa nhập tên đăng nhập');
  } else if (password == '') {
    alert('Bạn chưa nhập mật khẩu');
  } else {
    alert('Đăng nhập thành công.Xin chào ' + username);
    return true;
  }

  return false;
}

//checkk form sign-up
function validateForm2() {

  var username = document.getElementsByTagName('username').value;
  var password = document.getElementById('password').value;
  var cfpassword = document.getElementById('cfpassword').value;
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  if (firstname == '') {
    alert("Bạn chưa nhập first-name");
  } else if (lastname == '') {
    alert("Bạn chưa nhập last-name");
  } else if (username == '') {
    alert('Bạn chưa nhập tên đăng nhập');
  } else if (password == '') {
    alert('Bạn chưa nhập mật khẩu');
  } else if (cfpassword == '') {
    alert('Bạn chưa nhập mật khẩu');
  } else {
    alert('Đăng kí thành công');
    return true;
  }

  return false;
}

////

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}