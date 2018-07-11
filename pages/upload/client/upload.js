/* Template.upload.events({
   "click #js-upload"(event,instance){
    var k = Video.find().count();
    k = k + 1
    Video.insert({title:"unknown"+k, cpath:"unknown"+k, vpath:"unknown"+k, ds:"unknown"+k, qt:"unknown"+k, vid:k});
    const title = instance.$('#js-title').val();
    console.log('just read '+name);
    const cpath = instance.$('js-cpath').val();
    console.log('just read'+cpath);
    const vpath = instance.$('js-vpath').val();
    console.log('just read'+vpath);
    const ds = instance.$('js-ds').val();
    console.log('just read'+ds);
    const qt = instance.$('js-qt').val();
    console.log('just read'+qt);
    var theVideo = Video.findOne({vid:k});
    theVideo.title = title;
    theVideo.cpath = cpath;
    theVideo.vpath = vpath;
    theVideo.ds = ds;
    theVideo.qt = qt;
    Video.update(k, theVideo);
  }
})
