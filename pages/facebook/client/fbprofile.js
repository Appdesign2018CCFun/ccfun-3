Template.fbprofile.helpers({
  user(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile){
      var k = Profiles.find().count();
      Profiles.insert({name:"anonymous"+k,owner:Meteor.userId()});
    } else {
    return theProfile
    }
   },


})

Template.fbinfo.helpers({
  isSelected(a,b){
    if (a==b){
      return "selected"
    } else {
      return ""
    }
  },


})




Template.fbinfo.events({
    "click #js-submit"(event,instance){
      const name = instance.$('#js-name').val();
      console.log('just read '+name);
      const bday = instance.$('#js-bday').val();
      console.log('just read'+bday);
      const gender = instance.$('#js-gender').val();
      console.log('just read'+ gender);
      const country = instance.$('#js-country').val();
      console.log('just read'+ country);
      this.user.name = name;
      this.user.bday = bday;
      this.user.gender = gender;
      this.user.country = country;
      Profiles.update(this.user._id,this.user);
    },

})
