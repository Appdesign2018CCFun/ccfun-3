/*
Template.fbinfo.events({
  "click #js-submit"(event,instance){
    const name = instance.$('#js-name').val();
    console.log('just read '+name);
    const bday = instance.$('#js-bday').val();
    console.log('just read'+bday);
    const bday = instance.$('#js-gender').val();
    console.log('just read'+ gender);
    this.user.name = name;
    this.user.bday = bday;
    this.user.bday = gender;
    Profiles.update(this.user._id,this.user);
    var input = document.getElementById('js-gender');
    function loadSettings() {
    if (localStorage['js-gender']) {
        input.value = instance.$('js-gender').val();
      }
  }

  function saveSettings() {
    localStorage['js-gener'] = input.value;
    Profiles.update(input.value);
    }
  }
})
*/
