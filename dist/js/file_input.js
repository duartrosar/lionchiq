var file_label = document.getElementById("file_name");

function get_file_name() {
  var file_input = document.getElementById("img");
  var file_name = file_input.files[0].name;

  file_label.value = file_name;
}
