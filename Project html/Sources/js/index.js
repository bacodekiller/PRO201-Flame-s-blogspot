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


// check form sign-in
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